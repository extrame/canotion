export interface Archive {
  id: string;
  diseaseType: string;
  diseaseName: string;
  createdAt: string;
  stage?: string;
  completedExamIds: string[];
  completedTreatmentIds: string[];
  currentStage: 'suspect' | 'examination' | 'treatment';
  bilirubinRecords: BilirubinRecord[];
  drainageRecords: DrainageRecord[];
  hasPortalVeinTumorThrombus?: boolean;
  suspectDocsSaved?: boolean;
}

export interface BilirubinRecord {
  id: string;
  date: string;
  total: number;
  direct: number;
  indirect: number;
  unit: string;
}

export interface DrainageRecord {
  id: string;
  date: string;
  volume: number;
  color: string;
  notes: string;
}

export interface Disease {
  id: string;
  name: string;
  desc: string;
  icon: string;
  diagnosisKeyItem: string;
  examItems: ExamItem[];
  treatmentItems: TreatmentItem[];
  suspectStageInfo?: SuspectStageInfo;
}

export interface SuspectStageInfo {
  title: string;
  tips: string[];
  recommendDepartment: string;
}

export interface ExamItem {
  id: string;
  name: string;
  desc: string;
  category: string;
}

export interface TreatmentItem {
  id: string;
  name: string;
  desc: string;
  category: string;
}

export interface StageSelectResult {
  completedExamIds: string[];
  completedTreatmentIds: string[];
  currentStage: 'suspect' | 'examination' | 'treatment';
  suspectDocsSaved?: boolean;
}

export interface PatientInfo {
  name: string;
  age: number;
  gender: string;
}

export interface StorageData {
  archives: Archive[];
  lastUpdated: string;
}