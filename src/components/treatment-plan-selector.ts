import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type {
  PatientAssessment,
  TreatmentPlan,
  BismuthType,
  Resectability,
  VascularInvasion,
  LymphNodeStatus,
  Metastasis,
  EcogScore
} from '../types';

@customElement('treatment-plan-selector')
export class TreatmentPlanSelector extends LitElement {
  @state()
  private assessment: PatientAssessment = {
    bismuthType: 'I',
    resectability: 'resectable',
    vascularInvasion: 'none',
    lymphNodeStatus: 'N0',
    metastasis: 'M0',
    ecogScore: 0,
    hasJaundice: false,
    tbilLevel: undefined
  };

  @state()
  private expandedPlanId: string | null = null;

  @state()
  private activeCategory: TreatmentPlan['category'] | 'all' = 'all';

  private treatmentPlans: TreatmentPlan[] = [
    {
      id: 'surgery-hepatectomy',
      name: '肝叶切除+肝外胆管切除+淋巴结廓清',
      category: 'surgery',
      indication: '根治性切除术',
      description: '联合规则性肝段切除、肝尾状叶切除、区域淋巴结和神经丛廓清，以及肝管-空肠Roux-en-Y吻合术。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['resectable'],
        bismuthTypes: ['I', 'II', 'IIIa', 'IIIb'],
        lymphNodeStatus: ['N0', 'N1'],
        metastasis: ['M0'],
        ecogMax: 2
      }
    },
    {
      id: 'surgery-expanded',
      name: '扩大肝切除术（右三区/左三区切除）',
      category: 'surgery',
      indication: 'Bismuth IV型根治术',
      description: '适用于Bismuth IV型患者，肿瘤广泛浸润左右肝管二级分支以上时，需行肝三叶联合肝尾状叶切除术。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['resectable'],
        bismuthTypes: ['IV'],
        metastasis: ['M0'],
        ecogMax: 1
      }
    },
    {
      id: 'surgery-parenchymal',
      name: '保留功能性肝实质手术（围肝门切除）',
      category: 'surgery',
      indication: '不适合大范围肝切除的患者',
      description: '围肝门切除+胆管空肠吻合术，适用于部分Bismuth IV型但又无法承受大范围肝切除的患者。',
      recommendations: [
        { level: 'weak', evidence: '证据等级4，弱推荐' }
      ],
      suitableFor: {
        resectability: ['borderline', 'unresectable'],
        bismuthTypes: ['IV'],
        ecogMax: 2
      }
    },
    {
      id: 'surgery-vascular',
      name: '联合血管切除重建术',
      category: 'surgery',
      indication: '合并血管侵犯',
      description: '门静脉切除重建适用于拟保留侧门静脉受累的患者；肝动脉切除重建适用于拟保留侧肝动脉受累的患者。',
      recommendations: [
        { level: 'strong', evidence: '门静脉：证据等级2，强推荐' },
        { level: 'weak', evidence: '肝动脉：证据等级2，弱推荐' }
      ],
      suitableFor: {
        resectability: ['resectable', 'borderline'],
        vascularInvasion: ['portal_vein', 'hepatic_artery'],
        metastasis: ['M0'],
        ecogMax: 1
      }
    },
    {
      id: 'surgery-hepatopancreatectomy',
      name: '肝胰十二指肠切除术',
      category: 'surgery',
      indication: '晚期广泛侵犯',
      description: '适用于肿瘤侵犯胰腺段胆管、远端胆管癌侵犯肝门部、或肝门部和胰腺段胆管存在广泛肝外胆管受累的患者。',
      recommendations: [
        { level: 'weak', evidence: '证据等级3，弱推荐' }
      ],
      suitableFor: {
        resectability: ['resectable', 'borderline'],
        metastasis: ['M0'],
        ecogMax: 1
      }
    },
    {
      id: 'transplant',
      name: '肝移植治疗',
      category: 'transplant',
      indication: '严格筛选的早期患者',
      description: '适用于肿瘤直径<3cm、无淋巴结转移、无肝内和肝外转移的患者。不可切除的局部进展期可行新辅助放化疗后肝移植。',
      recommendations: [
        { level: 'weak', evidence: '证据等级2，弱推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0'],
        ecogMax: 1
      }
    },
    {
      id: 'systemic-first-gemcisp',
      name: '吉西他滨+顺铂',
      category: 'systemic',
      indication: '晚期一线标准治疗',
      description: '晚期肝门部胆管癌一线标准治疗方案之一，中位总生存期显著优于单药吉西他滨。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 2
      }
    },
    {
      id: 'systemic-first-imunochem',
      name: '度伐利尤单抗+吉西他滨+顺铂',
      category: 'systemic',
      indication: '晚期一线首选',
      description: 'TOPAZ-1试验结果显示该联合方案能显著改善总生存期和无进展生存期。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 1
      }
    },
    {
      id: 'systemic-first-pembrochem',
      name: '帕博利珠单抗+吉西他滨+顺铂',
      category: 'systemic',
      indication: '晚期一线治疗',
      description: 'KEYNOTE-966试验显示出生存期优势。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 1
      }
    },
    {
      id: 'systemic-first-gemsft',
      name: '吉西他滨+替吉奥',
      category: 'systemic',
      indication: '晚期一线替代方案',
      description: 'FUGA-BT/JCOG1113研究显示疗效与吉西他滨联合顺铂相当，且在无进展生存期方面表现优势。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 2
      }
    },
    {
      id: 'systemic-first-gemcisft',
      name: '吉西他滨+顺铂+替吉奥',
      category: 'systemic',
      indication: '体能良好患者强化方案',
      description: 'KHBO1401-MITSUBA试验显示三药联合能显著提高中位总生存期和中位无进展生存期。',
      recommendations: [
        { level: 'weak', evidence: '证据等级2，弱推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 0
      }
    },
    {
      id: 'systemic-second-folfox',
      name: 'FOLFOX+积极症状控制',
      category: 'systemic',
      indication: '二线标准治疗',
      description: 'ABC-06试验显示中位总生存期5.3个月 vs 6.2个月（积极控制组）。',
      recommendations: [
        { level: 'strong', evidence: '证据等级3，强推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 2
      }
    },
    {
      id: 'systemic-adjuvant-capecitabine',
      name: '卡培他滨辅助治疗（6个月）',
      category: 'systemic',
      indication: '术后辅助治疗',
      description: 'BILCAP试验：中位总生存期49.6个月 vs 36.1个月（观察组）。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['resectable'],
        lymphNodeStatus: ['N0', 'N1', 'N2'],
        metastasis: ['M0'],
        ecogMax: 2
      }
    },
    {
      id: 'systemic-adjuvant-ts',
      name: '替吉奥辅助治疗（6个月）',
      category: 'systemic',
      indication: '术后辅助治疗',
      description: 'JCOG1202/ASCOT试验：5年总生存率64.1% vs 52.2%（观察组）。',
      recommendations: [
        { level: 'strong', evidence: '证据等级2，强推荐' }
      ],
      suitableFor: {
        resectability: ['resectable'],
        lymphNodeStatus: ['N0', 'N1', 'N2'],
        metastasis: ['M0'],
        ecogMax: 2
      }
    },
    {
      id: 'radiation-adjuvant',
      name: '术后辅助放疗',
      category: 'radiation',
      indication: 'R1/R2切除或淋巴结阳性',
      description: '适用于术后存在阳性切缘或淋巴结阳性的患者，可降低复发率并改善总生存期。',
      recommendations: [
        { level: 'weak', evidence: '证据等级4，弱推荐' }
      ],
      suitableFor: {
        resectability: ['resectable'],
        lymphNodeStatus: ['N1', 'N2'],
        metastasis: ['M0'],
        ecogMax: 2
      }
    },
    {
      id: 'palliative-stent',
      name: '姑息性胆道引流/支架',
      category: 'palliative',
      indication: '不可切除伴胆道梗阻',
      description: '适用于晚期无法手术切除患者的胆道减压，缓解黄疸症状。金属支架优于塑料支架。',
      recommendations: [
        { level: 'strong', evidence: '证据等级3，强推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M1'],
        ecogMax: 3
      }
    },
    {
      id: 'palliative-hai',
      name: '肝动脉灌注化疗（HAIC）',
      category: 'palliative',
      indication: '姑息性治疗',
      description: '肝动脉灌注化疗术联合系统治疗可提高远期疗效，高胆红素血症患者在充分胆道引流后也可考虑。',
      recommendations: [
        { level: 'weak', evidence: '证据等级4，弱推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 2
      }
    },
    {
      id: 'palliative-pdt',
      name: '光动力治疗',
      category: 'palliative',
      indication: '姑息性治疗',
      description: '光动力治疗结合支架置入可提高1年和2年生存率，且未增加胆管炎及其他治疗相关不良事件。',
      recommendations: [
        { level: 'weak', evidence: '证据等级4，弱推荐' }
      ],
      suitableFor: {
        resectability: ['unresectable'],
        metastasis: ['M0', 'M1'],
        ecogMax: 2
      }
    }
  ];

  static styles = css`
    :host {
      display: block;
    }
    .selector-card {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .selector-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }
    .selector-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .selector-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .selector-subtitle {
      font-size: 12px;
      color: #666;
      margin-top: 2px;
    }
    .filter-section {
      margin-bottom: 20px;
    }
    .filter-group {
      margin-bottom: 16px;
    }
    .filter-label {
      font-size: 13px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .filter-label .required {
      color: #ff4d4f;
    }
    .filter-options {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .filter-chip {
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      border: 1px solid #d9d9d9;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      color: #333;
    }
    .filter-chip:hover {
      border-color: #52c41a;
      color: #52c41a;
    }
    .filter-chip.selected {
      background: #52c41a;
      border-color: #52c41a;
      color: white;
    }
    .filter-chip.highlight-warning {
      border-color: #fa8c16;
    }
    .filter-chip.selected.highlight-warning {
      background: #fa8c16;
      border-color: #fa8c16;
    }
    .filter-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .filter-input:focus {
      border-color: #52c41a;
    }
    .category-tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .category-tab {
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      border: 1px solid #e8e8e8;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      color: #666;
    }
    .category-tab:hover {
      border-color: #52c41a;
      color: #52c41a;
    }
    .category-tab.active {
      background: #f6ffed;
      border-color: #52c41a;
      color: #52c41a;
    }
    .category-tab .count {
      display: inline-block;
      background: #f0f0f0;
      padding: 2px 6px;
      border-radius: 10px;
      font-size: 11px;
      margin-left: 4px;
    }
    .category-tab.active .count {
      background: #d9f7be;
      color: #389e0d;
    }
    .plans-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .plan-card {
      border: 1px solid #e8e8e8;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.2s;
    }
    .plan-card:hover {
      border-color: #52c41a;
      box-shadow: 0 2px 12px rgba(82, 196, 26, 0.15);
    }
    .plan-card.primary {
      border-color: #52c41a;
      background: #fafff0;
    }
    .plan-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      cursor: pointer;
      background: white;
    }
    .plan-card.primary .plan-header {
      background: #f6ffed;
    }
    .plan-category-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }
    .plan-category-icon.surgery {
      background: #e6f7ff;
    }
    .plan-category-icon.systemic {
      background: #fff0f6;
    }
    .plan-category-icon.radiation {
      background: #fff7e6;
    }
    .plan-category-icon.palliative {
      background: #f5f5f5;
    }
    .plan-category-icon.transplant {
      background: #f9f0ff;
    }
    .plan-info {
      flex: 1;
      min-width: 0;
    }
    .plan-name {
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 4px;
    }
    .plan-indication {
      font-size: 12px;
      color: #666;
    }
    .plan-badges {
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .badge {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 500;
    }
    .badge.primary {
      background: #52c41a;
      color: white;
    }
    .badge.strong {
      background: #1890ff;
      color: white;
    }
    .badge.weak {
      background: #faad14;
      color: white;
    }
    .expand-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
      color: #999;
    }
    .expand-icon.expanded {
      transform: rotate(180deg);
    }
    .plan-detail {
      padding: 0 16px 16px 16px;
      background: white;
      border-top: 1px solid #f0f0f0;
    }
    .plan-card.primary .plan-detail {
      background: #fafff0;
      border-top-color: #b7eb8f;
    }
    .plan-description {
      font-size: 13px;
      color: #333;
      line-height: 1.6;
      margin-bottom: 12px;
      padding-top: 12px;
    }
    .plan-evidence {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .evidence-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 12px;
      color: #666;
    }
    .evidence-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .evidence-icon.strong {
      background: #1890ff;
    }
    .evidence-icon.weak {
      background: #faad14;
    }
    .evidence-icon svg {
      width: 10px;
      height: 10px;
    }
    .no-results {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }
    .no-results-icon {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }
    .no-results-text {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .no-results-hint {
      font-size: 12px;
      color: #bfbfbf;
    }
    .divider {
      height: 1px;
      background: #f0f0f0;
      margin: 20px 0;
    }
    .summary-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 16px;
      color: white;
      margin-bottom: 20px;
    }
    .summary-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .summary-text {
      font-size: 13px;
      opacity: 0.9;
      line-height: 1.5;
    }
  `;

  private isPlanSuitable(plan: TreatmentPlan): boolean {
    const { suitableFor } = plan;
    const a = this.assessment;

    if (suitableFor.bismuthTypes && !suitableFor.bismuthTypes.includes(a.bismuthType)) {
      return false;
    }
    if (suitableFor.resectability && !suitableFor.resectability.includes(a.resectability)) {
      return false;
    }
    if (suitableFor.vascularInvasion) {
      if (a.vascularInvasion === 'none' && suitableFor.vascularInvasion.includes('none')) {
      } else if (a.vascularInvasion !== 'none' && !suitableFor.vascularInvasion.includes(a.vascularInvasion)) {
        return false;
      }
    }
    if (suitableFor.lymphNodeStatus && !suitableFor.lymphNodeStatus.includes(a.lymphNodeStatus)) {
      return false;
    }
    if (suitableFor.metastasis && !suitableFor.metastasis.includes(a.metastasis)) {
      return false;
    }
    if (suitableFor.ecogMax !== undefined && a.ecogScore > suitableFor.ecogMax) {
      return false;
    }

    return true;
  }

  private getFilteredPlans(): TreatmentPlan[] {
    return this.treatmentPlans.filter(plan => this.isPlanSuitable(plan));
  }

  private getFilteredPlansByCategory(category: TreatmentPlan['category'] | 'all'): TreatmentPlan[] {
    const filtered = this.getFilteredPlans();
    if (category === 'all') return filtered;
    return filtered.filter(plan => plan.category === category);
  }

  private getCategoryCount(category: TreatmentPlan['category'] | 'all'): number {
    if (category === 'all') return this.getFilteredPlans().length;
    return this.getFilteredPlans().filter(plan => plan.category === category).length;
  }

  private getPrimaryRecommendation(): TreatmentPlan | null {
    const plans = this.getFilteredPlans();
    const strongRecs = plans.filter(p =>
      p.recommendations.some(r => r.level === 'strong')
    );
    return strongRecs.length > 0 ? strongRecs[0] : (plans.length > 0 ? plans[0] : null);
  }

  private getCategoryIcon(category: TreatmentPlan['category']): string {
    const icons: Record<TreatmentPlan['category'], string> = {
      surgery: '🔪',
      systemic: '💊',
      radiation: '☢️',
      palliative: '🩹',
      transplant: '🏥'
    };
    return icons[category];
  }

  private getCategoryLabel(category: TreatmentPlan['category']): string {
    const labels: Record<TreatmentPlan['category'], string> = {
      surgery: '手术',
      systemic: '药物治疗',
      radiation: '放疗',
      palliative: '姑息治疗',
      transplant: '肝移植'
    };
    return labels[category];
  }

  private handleFilterChange(key: keyof PatientAssessment, value: unknown): void {
    this.assessment = { ...this.assessment, [key]: value };
  }

  private togglePlan(planId: string): void {
    this.expandedPlanId = this.expandedPlanId === planId ? null : planId;
  }

  render() {
    const filteredPlans = this.getFilteredPlans();
    const primaryRec = this.getPrimaryRecommendation();

    return html`
      <div class="selector-card">
        <div class="selector-header">
          <div class="selector-icon">📋</div>
          <div>
            <div class="selector-title">个性化治疗方案</div>
            <div class="selector-subtitle">根据患者评估信息智能推荐治疗方案</div>
          </div>
        </div>

        ${primaryRec ? html`
          <div class="summary-card">
            <div class="summary-title">💡 推荐方案</div>
            <div class="summary-text">
              基于当前患者评估，<strong>${primaryRec.name}</strong> 为首选推荐方案。
              ${primaryRec.recommendations.some(r => r.level === 'strong')
                ? '该方案具有强有力的循证医学证据支持。'
                : '该方案可作为备选方案。'}
            </div>
          </div>
        ` : ''}

        <div class="filter-section">
          <div class="filter-group">
            <div class="filter-label">
              Bismuth分型 <span class="required">*</span>
            </div>
            <div class="filter-options">
              ${(['I', 'II', 'IIIa', 'IIIb', 'IV'] as BismuthType[]).map(type => html`
                <button
                  class="filter-chip ${this.assessment.bismuthType === type ? 'selected' : ''}"
                  @click="${() => this.handleFilterChange('bismuthType', type)}"
                >
                  ${type === 'I' ? 'I型' : type === 'II' ? 'II型' : type === 'IIIa' ? 'IIIa型' : type === 'IIIb' ? 'IIIb型' : 'IV型'}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">
              可切除性评估 <span class="required">*</span>
            </div>
            <div class="filter-options">
              ${([
                { value: 'resectable', label: '可切除' },
                { value: 'borderline', label: '边界可切除' },
                { value: 'unresectable', label: '不可切除' }
              ] as Array<{ value: Resectability; label: string }>).map(item => html`
                <button
                  class="filter-chip ${this.assessment.resectability === item.value ? 'selected' : ''} ${item.value === 'borderline' ? 'highlight-warning' : ''}"
                  @click="${() => this.handleFilterChange('resectability', item.value)}"
                >
                  ${item.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">血管侵犯</div>
            <div class="filter-options">
              ${([
                { value: 'none', label: '无血管侵犯' },
                { value: 'portal_vein', label: '门静脉侵犯' },
                { value: 'hepatic_artery', label: '肝动脉侵犯' }
              ] as Array<{ value: VascularInvasion; label: string }>).map(item => html`
                <button
                  class="filter-chip ${this.assessment.vascularInvasion === item.value ? 'selected' : ''}"
                  @click="${() => this.handleFilterChange('vascularInvasion', item.value)}"
                >
                  ${item.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">淋巴结状态</div>
            <div class="filter-options">
              ${([
                { value: 'N0', label: 'N0 (无转移)' },
                { value: 'N1', label: 'N1 (1-3枚)' },
                { value: 'N2', label: 'N2 (≥4枚)' }
              ] as Array<{ value: LymphNodeStatus; label: string }>).map(item => html`
                <button
                  class="filter-chip ${this.assessment.lymphNodeStatus === item.value ? 'selected' : ''}"
                  @click="${() => this.handleFilterChange('lymphNodeStatus', item.value)}"
                >
                  ${item.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">远处转移</div>
            <div class="filter-options">
              ${([
                { value: 'M0', label: 'M0 (无远处转移)' },
                { value: 'M1', label: 'M1 (有远处转移)' }
              ] as Array<{ value: Metastasis; label: string }>).map(item => html`
                <button
                  class="filter-chip ${this.assessment.metastasis === item.value ? 'selected' : ''} ${item.value === 'M1' ? 'highlight-warning' : ''}"
                  @click="${() => this.handleFilterChange('metastasis', item.value)}"
                >
                  ${item.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">体能状态 (ECOG)</div>
            <div class="filter-options">
              ${([0, 1, 2, 3] as EcogScore[]).map(score => html`
                <button
                  class="filter-chip ${this.assessment.ecogScore === score ? 'selected' : ''}"
                  @click="${() => this.handleFilterChange('ecogScore', score)}"
                >
                  ${score}分 ${score === 0 ? '(正常)' : score === 1 ? '(能走动)' : score === 2 ? '(能起床)' : '(卧床)'}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">黄疸状态</div>
            <div class="filter-options">
              <button
                class="filter-chip ${!this.assessment.hasJaundice ? 'selected' : ''}"
                @click="${() => this.handleFilterChange('hasJaundice', false)}"
              >
                无黄疸
              </button>
              <button
                class="filter-chip ${this.assessment.hasJaundice ? 'selected' : ''} highlight-warning"
                @click="${() => this.handleFilterChange('hasJaundice', true)}"
              >
                有黄疸
              </button>
              ${this.assessment.hasJaundice ? html`
                <input
                  type="number"
                  class="filter-input"
                  style="width: 120px; margin-left: 8px;"
                  placeholder="胆红素(μmol/L)"
                  .value="${this.assessment.tbilLevel?.toString() || ''}"
                  @input="${(e: Event) => this.handleFilterChange('tbilLevel', parseFloat((e.target as HTMLInputElement).value) || undefined)}"
                />
              ` : ''}
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="category-tabs">
          <button
            class="category-tab ${this.activeCategory === 'all' ? 'active' : ''}"
            @click="${() => this.activeCategory = 'all'}"
          >
            全部 <span class="count">${this.getCategoryCount('all')}</span>
          </button>
          ${(['surgery', 'systemic', 'radiation', 'palliative', 'transplant'] as TreatmentPlan['category'][]).map(cat => html`
            <button
              class="category-tab ${this.activeCategory === cat ? 'active' : ''}"
              @click="${() => this.activeCategory = cat}"
            >
              ${this.getCategoryIcon(cat)} ${this.getCategoryLabel(cat)} <span class="count">${this.getCategoryCount(cat)}</span>
            </button>
          `)}
        </div>

        <div class="plans-list">
          ${this.getFilteredPlansByCategory(this.activeCategory).length === 0 ? html`
            <div class="no-results">
              <div class="no-results-icon">🔍</div>
              <div class="no-results-text">没有找到匹配的治疗方案</div>
              <div class="no-results-hint">请调整筛选条件后重试</div>
            </div>
          ` : this.getFilteredPlansByCategory(this.activeCategory).map(plan => html`
            <div class="plan-card ${primaryRec?.id === plan.id ? 'primary' : ''}">
              <div class="plan-header" @click="${() => this.togglePlan(plan.id)}">
                <div class="plan-category-icon ${plan.category}">
                  ${this.getCategoryIcon(plan.category)}
                </div>
                <div class="plan-info">
                  <div class="plan-name">${plan.name}</div>
                  <div class="plan-indication">${plan.indication}</div>
                </div>
                <div class="plan-badges">
                  ${plan.recommendations.some(r => r.level === 'strong') ? html`
                    <span class="badge ${primaryRec?.id === plan.id ? 'primary' : 'strong'}">
                      ${primaryRec?.id === plan.id ? '首选' : '强推荐'}
                    </span>
                  ` : html`
                    <span class="badge weak">可选</span>
                  `}
                </div>
                <div class="expand-icon ${this.expandedPlanId === plan.id ? 'expanded' : ''}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              ${this.expandedPlanId === plan.id ? html`
                <div class="plan-detail">
                  <div class="plan-description">${plan.description}</div>
                  <div class="plan-evidence">
                    ${plan.recommendations.map(rec => html`
                      <div class="evidence-item">
                        <div class="evidence-icon ${rec.level}">
                          ${rec.level === 'strong' ? html`
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          ` : html`
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          `}
                        </div>
                        <span>${rec.evidence}</span>
                      </div>
                    `)}
                  </div>
                </div>
              ` : ''}
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'treatment-plan-selector': TreatmentPlanSelector;
  }
}