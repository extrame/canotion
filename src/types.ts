export interface Archive {
  id: string;
  diseaseType: string;
  diseaseName: string;
  createdAt: string;
  stage?: string;
  completedExamIds: string[];
  completedTreatmentIds: string[];
  currentStage: 'examination' | 'treatment';
  bilirubinRecords: BilirubinRecord[];
}

export interface BilirubinRecord {
  id: string;
  date: string;
  total: number;
  direct: number;
  indirect: number;
  unit: string;
}

export interface Disease {
  id: string;
  name: string;
  desc: string;
  icon: string;
  diagnosisKeyItem: string;
  examItems: ExamItem[];
  treatmentItems: TreatmentItem[];
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
  currentStage: 'examination' | 'treatment';
}

export interface PatientInfo {
  name: string;
  age: number;
  gender: string;
}

export interface DrainageRecord {
  id: string;
  date: string;
  volume: number;
  color?: string;
  notes?: string;
}

export type BismuthType = 'I' | 'II' | 'IIIa' | 'IIIb' | 'IV';
export type Resectability = 'resectable' | 'borderline' | 'unresectable';
export type VascularInvasion = 'none' | 'portal_vein' | 'hepatic_artery';
export type LymphNodeStatus = 'N0' | 'N1' | 'N2';
export type Metastasis = 'M0' | 'M1';
export type EcogScore = 0 | 1 | 2 | 3 | 4;

export interface PatientAssessment {
  bismuthType: BismuthType;
  resectability: Resectability;
  vascularInvasion: VascularInvasion;
  lymphNodeStatus: LymphNodeStatus;
  metastasis: Metastasis;
  ecogScore: EcogScore;
  hasJaundice: boolean;
  tbilLevel?: number;
}

export interface TreatmentPlan {
  id: string;
  name: string;
  category: 'surgery' | 'systemic' | 'radiation' | 'palliative' | 'transplant';
  indication: string;
  description: string;
  recommendations: Array<{
    level: 'strong' | 'weak';
    evidence: string;
  }>;
  suitableFor: {
    bismuthTypes?: BismuthType[];
    resectability?: Resectability[];
    vascularInvasion?: VascularInvasion[];
    lymphNodeStatus?: LymphNodeStatus[];
    metastasis?: Metastasis[];
    ecogMax?: EcogScore;
  };
}

export interface StorageData {
  archives: Archive[];
  lastUpdated: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author?: string;
  cover_image?: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  embeddedComponents?: EmbeddedComponent[];
  // Supabase 后台管理字段
  is_published?: boolean;
  published_at?: string;
}

export interface EmbeddedComponent {
  name: string;
  props?: Record<string, unknown>;
  children?: string;
}

export interface ArticleStorage {
  articles: Article[];
  lastUpdated: string;
}