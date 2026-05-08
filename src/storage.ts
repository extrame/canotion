import type { Archive, Article, ArticleStorage } from './types';

export interface PatientInfo {
  name: string;
  age: number | null;
  gender: string;
  phone: string;
  idNumber: string;
}

export interface StorageData {
  patientInfo: PatientInfo;
  archives: Archive[];
}

const STORAGE_KEY = 'canotion-patient-data';
const ARTICLES_KEY = 'canotion-articles';
const OLD_ARCHIVES_KEY = 'canotion-archives'; // 旧存储位置

const defaultPatientInfo: PatientInfo = {
  name: '',
  age: null,
  gender: '',
  phone: '',
  idNumber: ''
};

/**
 * 从旧存储位置迁移数据到新位置
 * 确保用户的胆红素记录等数据不会丢失
 */
function migrateFromOldStorage(): boolean {
  try {
    const oldData = localStorage.getItem(OLD_ARCHIVES_KEY);
    if (!oldData) return false;

    const oldArchives: Archive[] = JSON.parse(oldData);
    if (!Array.isArray(oldArchives) || oldArchives.length === 0) return false;

    // 读取新位置的数据
    const newDataStr = localStorage.getItem(STORAGE_KEY);
    const newData: StorageData = newDataStr
      ? JSON.parse(newDataStr)
      : { patientInfo: { ...defaultPatientInfo }, archives: [] };

    // 合并档案数据：以旧数据为基础，用新数据补充
    const mergedArchives: Archive[] = [];
    const processedIds = new Set<string>();

    // 先处理旧档案（保留胆红素记录等详细数据）
    for (const oldArchive of oldArchives) {
      if (!oldArchive.id) continue;

      // 查找新位置是否有同名档案
      const newArchive = newData.archives?.find(a => a.id === oldArchive.id);

      if (newArchive) {
        // 合并两个档案的数据，优先保留旧档案的详细记录
        mergedArchives.push({
          ...newArchive,
          ...oldArchive,
          // 确保这些字段不会被新数据的空值覆盖
          bilirubinRecords: oldArchive.bilirubinRecords?.length > 0
            ? oldArchive.bilirubinRecords
            : newArchive.bilirubinRecords || [],
          pathologyReport: oldArchive.pathologyReport || newArchive.pathologyReport,
          completedExamIds: oldArchive.completedExamIds?.length > 0
            ? oldArchive.completedExamIds
            : newArchive.completedExamIds || [],
          completedTreatmentIds: oldArchive.completedTreatmentIds?.length > 0
            ? oldArchive.completedTreatmentIds
            : newArchive.completedTreatmentIds || [],
        });
      } else {
        // 新位置没有，直接添加旧档案
        mergedArchives.push(oldArchive);
      }
      processedIds.add(oldArchive.id);
    }

    // 添加新位置独有的档案
    for (const newArchive of newData.archives || []) {
      if (!processedIds.has(newArchive.id)) {
        mergedArchives.push(newArchive);
      }
    }

    // 保存合并后的数据到新位置
    const mergedData: StorageData = {
      patientInfo: { ...defaultPatientInfo, ...newData.patientInfo },
      archives: mergedArchives
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedData));

    // 可选：迁移完成后删除旧数据（或保留作为备份）
    // localStorage.removeItem(OLD_ARCHIVES_KEY);

    console.log(`[Storage Migration] 成功迁移 ${oldArchives.length} 个旧档案，合并后共 ${mergedArchives.length} 个档案`);
    return true;

  } catch (e) {
    console.error('[Storage Migration] 迁移失败:', e);
    return false;
  }
}

class StorageService {
  private migrated = false;

  load(): StorageData {
    // 首次加载时执行迁移
    if (!this.migrated) {
      migrateFromOldStorage();
      this.migrated = true;
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved) as StorageData;
        return {
          patientInfo: { ...defaultPatientInfo, ...data.patientInfo },
          archives: data.archives || []
        };
      }
    } catch (e) {
      console.error('Failed to load data from localStorage:', e);
    }
    return {
      patientInfo: { ...defaultPatientInfo },
      archives: []
    };
  }

  save(data: StorageData): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save data to localStorage:', e);
    }
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}

class ArticleStorageService {
  load(): ArticleStorage {
    try {
      const saved = localStorage.getItem(ARTICLES_KEY);
      if (saved) {
        const data = JSON.parse(saved) as ArticleStorage;
        return {
          articles: data.articles || [],
          lastUpdated: data.lastUpdated || new Date().toISOString()
        };
      }
    } catch (e) {
      console.error('Failed to load articles from localStorage:', e);
    }
    return {
      articles: [],
      lastUpdated: new Date().toISOString()
    };
  }

  save(data: ArticleStorage): void {
    try {
      localStorage.setItem(ARTICLES_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save articles to localStorage:', e);
    }
  }

  clear(): void {
    localStorage.removeItem(ARTICLES_KEY);
  }
}

export const storageService = new StorageService();
export const articleStorageService = new ArticleStorageService();