import type { Archive } from './types';

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

export const storageService = new StorageService();