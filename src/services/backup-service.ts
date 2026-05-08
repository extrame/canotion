import type { Archive, Article } from '../types';
import { storageService, articleStorageService } from '../storage';

export interface BackupData {
  version: string;
  exportDate: string;
  patientData: {
    patientInfo: ReturnType<typeof storageService.load>['patientInfo'];
    archives: Archive[];
  };
  articles: {
    articles: Article[];
    lastUpdated: string;
  };
}

export interface ImportResult {
  success: boolean;
  message: string;
  importedArchives?: number;
  importedArticles?: number;
}

class BackupService {
  private readonly CURRENT_VERSION = '1.0.0';

  /**
   * 导出所有数据为 JSON 文件
   */
  exportAll(): void {
    const patientData = storageService.load();
    const articlesData = articleStorageService.load();

    const backupData: BackupData = {
      version: this.CURRENT_VERSION,
      exportDate: new Date().toISOString(),
      patientData: {
        patientInfo: patientData.patientInfo,
        archives: patientData.archives
      },
      articles: {
        articles: articlesData.articles,
        lastUpdated: articlesData.lastUpdated
      }
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    // 生成文件名：backup_YYYYMMDD_HHMMSS.json
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/[-:T]/g, '');
    link.download = `canotion_backup_${timestamp}.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * 从文件导入数据
   */
  async importFromFile(file: File, options: {
    mergeStrategy?: 'replace' | 'merge' | 'skip-existing';
  } = {}): Promise<ImportResult> {
    const { mergeStrategy = 'merge' } = options;

    try {
      const content = await file.text();
      const backupData: BackupData = JSON.parse(content);

      // 验证备份文件格式
      if (!this.validateBackupData(backupData)) {
        return {
          success: false,
          message: '无效的备份文件格式'
        };
      }

      let importedArchives = 0;
      let importedArticles = 0;

      // 导入档案数据
      if (backupData.patientData?.archives) {
        const currentData = storageService.load();
        const newArchives = backupData.patientData.archives;

        switch (mergeStrategy) {
          case 'replace':
            currentData.archives = newArchives;
            importedArchives = newArchives.length;
            break;

          case 'skip-existing':
            const existingIds = new Set(currentData.archives.map(a => a.id));
            const uniqueNewArchives = newArchives.filter(a => !existingIds.has(a.id));
            currentData.archives = [...currentData.archives, ...uniqueNewArchives];
            importedArchives = uniqueNewArchives.length;
            break;

          case 'merge':
          default:
            // 合并策略：新档案覆盖同名档案（按 ID），其余追加
            const archiveMap = new Map(currentData.archives.map(a => [a.id, a]));
            for (const newArchive of newArchives) {
              archiveMap.set(newArchive.id, newArchive);
              importedArchives++;
            }
            currentData.archives = Array.from(archiveMap.values());
            break;
        }

        // 更新患者信息（如果存在）
        if (backupData.patientData.patientInfo) {
          currentData.patientInfo = {
            ...currentData.patientInfo,
            ...backupData.patientData.patientInfo
          };
        }

        storageService.save(currentData);
      }

      // 导入文章数据
      if (backupData.articles?.articles) {
        const currentArticles = articleStorageService.load();
        const newArticles = backupData.articles.articles;

        switch (mergeStrategy) {
          case 'replace':
            currentArticles.articles = newArticles;
            importedArticles = newArticles.length;
            break;

          case 'skip-existing':
            const existingIds = new Set(currentArticles.articles.map(a => a.id));
            const uniqueNewArticles = newArticles.filter(a => !existingIds.has(a.id));
            currentArticles.articles = [...currentArticles.articles, ...uniqueNewArticles];
            importedArticles = uniqueNewArticles.length;
            break;

          case 'merge':
          default:
            const articleMap = new Map(currentArticles.articles.map(a => [a.id, a]));
            for (const newArticle of newArticles) {
              articleMap.set(newArticle.id, newArticle);
              importedArticles++;
            }
            currentArticles.articles = Array.from(articleMap.values());
            break;
        }

        currentArticles.lastUpdated = new Date().toISOString();
        articleStorageService.save(currentArticles);
      }

      return {
        success: true,
        message: `成功导入 ${importedArchives} 个档案和 ${importedArticles} 篇文章`,
        importedArchives,
        importedArticles
      };

    } catch (error) {
      return {
        success: false,
        message: `导入失败: ${error instanceof Error ? error.message : '未知错误'}`
      };
    }
  }

  /**
   * 验证备份数据格式
   */
  private validateBackupData(data: unknown): data is BackupData {
    if (!data || typeof data !== 'object') return false;

    const backup = data as Partial<BackupData>;

    // 检查必要字段
    if (!backup.version || typeof backup.version !== 'string') return false;
    if (!backup.exportDate || typeof backup.exportDate !== 'string') return false;

    // 检查档案数据
    if (backup.patientData) {
      if (!Array.isArray(backup.patientData.archives)) return false;
    }

    // 检查文章数据
    if (backup.articles) {
      if (!Array.isArray(backup.articles.articles)) return false;
    }

    return true;
  }

  /**
   * 获取当前数据摘要
   */
  getDataSummary(): {
    archiveCount: number;
    articleCount: number;
    lastUpdated: string | null;
  } {
    const patientData = storageService.load();
    const articlesData = articleStorageService.load();

    return {
      archiveCount: patientData.archives.length,
      articleCount: articlesData.articles.length,
      lastUpdated: articlesData.lastUpdated
    };
  }
}

export const backupService = new BackupService();
