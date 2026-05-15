export interface Archive {
  id: string;
  diseaseType: string;
  diseaseName: string;
  createdAt: string;
  stage?: string;
  completedExamIds: string[];
  completedTreatmentIds: string[];
  currentStage: 'examination' | 'treatment' | 'suspect';
  bilirubinRecords: BilirubinRecord[];
  pathologyReport?: PathologyReport;
}

export interface BilirubinRecord {
  id: string;
  date: string;
  total: number;
  direct: number;
  indirect: number;
  unit: string;
}

// ==================== 病理报告相关类型 ====================

/** Ki-67 增殖活性分级 */
export type Ki67Grade = 'low' | 'moderate' | 'high' | 'very-high';

/** 免疫组化单项结果 */
export interface IHCItem {
  name: string;
  fullName: string;
  value: string;       // 如 "40%", "2+", "阳性", "阴性"
  numericValue?: number; // 可选的数值（如 Ki-67 的百分比）
  interpretation?: string; // 临床解读
}

/** 病理报告 */
export interface PathologyReport {
  reportDate: string;
  specimenSource: string;  // 标本来源：穿刺活检、手术切除等
  histologicalType: string; // 组织学类型：如 腺癌
  differentiation: 'well' | 'moderate' | 'poor' | 'undifferentiated'; // 分化程度
  bismuthType?: string;    // Bismuth 分型
  tnmStage?: string;       // TNM 分期
  vascularInvasion: boolean;  // 脉管侵犯
  perineuralInvasion: boolean; // 神经侵犯
  marginStatus: 'R0' | 'R1' | 'R2' | 'pending'; // 切缘状态
  lymphNodeStatus?: string;  // 淋巴结转移情况
  ihcResults: IHCItem[];     // 免疫组化结果列表
  geneTestResults?: GeneTestResult[]; // 基因检测结果
  notes?: string;            // 备注
}

/** 基因检测结果 */
export interface GeneTestResult {
  geneName: string;
  mutationType: string;  // 如 "融合突变", "点突变", "过表达", "扩增"
  result: string;        // 如 "阳性", "阴性", "未检出"
  clinicalSignificance: string; // 临床意义
  therapeuticImplication?: string; // 治疗指导意义
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

// 文章配套组件类型
export type ComponentType = 
  | 'archive-matcher'      // 档案匹配评估
  | 'decision-tree'        // 决策树
  | 'stage-guide'          // 阶段向导
  | 'bilirubin-calculator' // 胆红素计算器
  | 'treatment-timeline'   // 治疗时间线
  | 'drainage-chart';      // PTCD引流记录

export interface EmbeddedComponent {
  id: string;
  type: ComponentType;
  title: string;
  config?: ComponentConfig;
}

// 组件配置类型
export interface ComponentConfig {
  // 档案匹配器配置
  matchRules?: MatchRule[];
  recommendations?: Recommendation[];
  // 决策树配置
  treeType?: 'diagnosis' | 'treatment' | 'followup';
  // 通用配置
  showByDefault?: boolean;
}

export interface MatchRule {
  field: string;
  operator: 'eq' | 'gt' | 'lt' | 'in' | 'contains';
  value: any;
  weight: number;
  description: string;
}

export interface Recommendation {
  condition: string;
  priority: 'high' | 'medium' | 'low' | 'gene';
  title: string;
  content: string;
  action?: string;
}

export interface ArticleStorage {
  articles: Article[];
  lastUpdated: string;
}