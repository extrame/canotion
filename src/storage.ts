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

const defaultPatientInfo: PatientInfo = {
  name: '',
  age: null,
  gender: '',
  phone: '',
  idNumber: ''
};

class StorageService {
  load(): StorageData {
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