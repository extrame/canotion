import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { PathologyReport, IHCItem, GeneTestResult } from '../types';

/** 预设的免疫组化检测项 */
const DEFAULT_IHC_ITEMS: Array<{ name: string; fullName: string }> = [
  { name: 'Ki-67', fullName: 'Ki-67 增殖指数' },
  { name: 'P53', fullName: 'P53 蛋白' },
  { name: 'CK7', fullName: '细胞角蛋白7' },
  { name: 'CK19', fullName: '细胞角蛋白19' },
  { name: 'CK20', fullName: '细胞角蛋白20' },
  { name: 'CEA', fullName: '癌胚抗原' },
  { name: 'CA19-9', fullName: '糖类抗原19-9' },
  { name: 'MUC-1', fullName: '黏蛋白1' },
  { name: 'MUC-5AC', fullName: '黏蛋白5AC' },
  { name: 'HER-2', fullName: '人表皮生长因子受体2' },
  { name: 'MLH1', fullName: 'MutL同源蛋白1' },
  { name: 'MSH2', fullName: 'MutS同源蛋白2' },
  { name: 'MSH6', fullName: 'MutS同源蛋白6' },
  { name: 'PMS2', fullName: 'PMS2蛋白' },
];

/** 预设的基因检测项 */
const DEFAULT_GENE_ITEMS: Array<{ name: string; desc: string }> = [
  { name: 'FGFR2', desc: 'FGFR2 融合/通路改变' },
  { name: 'IDH1', desc: 'IDH1 突变' },
  { name: 'BRAF', desc: 'BRAF V600E 突变' },
  { name: 'HER2/ERBB2', desc: 'HER2 过表达/扩增' },
  { name: 'MSI', desc: '微卫星不稳定性' },
  { name: 'NTRK', desc: 'NTRK 融合突变' },
  { name: 'KRAS', desc: 'KRAS G12C 突变' },
];

@customElement('pathology-form')
export class PathologyForm extends LitElement {
  @property({ type: Object }) report: PathologyReport | null = null;

  @state() private formData: Partial<PathologyReport> = {};
  @state() private ihcItems: Array<{ name: string; fullName: string; value: string; numericValue?: number }> = [];
  @state() private geneItems: Array<{ geneName: string; desc: string; result: string; mutationType: string; significance: string }> = [];
  @state() private showIhcSection: boolean = false;
  @state() private showGeneSection: boolean = false;
  @state() private customIhcName: string = '';
  @state() private customGeneName: string = '';

  static styles = css`
    :host {
      display: block;
    }
    .form-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #f0f0f0;
    }
    .form-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
    }
    .form-header-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    /* 表单组 */
    .form-section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .form-group.full-width {
      grid-column: 1 / -1;
    }
    .form-label {
      font-size: 13px;
      font-weight: 600;
      color: #555;
    }
    .form-label .required {
      color: #ff4d4f;
      margin-left: 2px;
    }
    .form-input, .form-select, .form-textarea {
      padding: 10px 14px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      font-family: inherit;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    .form-textarea {
      resize: vertical;
      min-height: 60px;
    }
    .form-select {
      cursor: pointer;
      background: white;
    }

    /* 布尔开关 */
    .toggle-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .toggle {
      position: relative;
      width: 44px;
      height: 24px;
      background: #ddd;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .toggle.active {
      background: #667eea;
    }
    .toggle-knob {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      transition: transform 0.3s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    .toggle.active .toggle-knob {
      transform: translateX(20px);
    }
    .toggle-label {
      font-size: 13px;
      color: #666;
    }

    /* 免疫组化 */
    .collapsible-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 12px 16px;
      background: #fafafa;
      border-radius: 10px;
      margin-bottom: 12px;
      transition: background 0.2s;
    }
    .collapsible-header:hover {
      background: #f0f0f0;
    }
    .collapsible-left {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }
    .collapsible-badge {
      font-size: 11px;
      padding: 2px 8px;
      background: #667eea;
      color: white;
      border-radius: 10px;
    }
    .collapsible-arrow {
      transition: transform 0.3s;
      color: #999;
    }
    .collapsible-arrow.open {
      transform: rotate(180deg);
    }
    .collapsible-body {
      display: grid;
      gap: 8px;
      margin-bottom: 16px;
    }
    .ihc-row, .gene-row {
      display: grid;
      grid-template-columns: 140px 1fr 1fr;
      gap: 8px;
      align-items: center;
      padding: 8px 12px;
      background: #fafafa;
      border-radius: 8px;
    }
    .ihc-row-name, .gene-row-name {
      font-size: 13px;
      font-weight: 600;
      color: #333;
    }
    .ihc-row-name small, .gene-row-name small {
      font-weight: 400;
      color: #999;
      display: block;
      font-size: 11px;
    }
    .add-item-row {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 8px 12px;
      border: 1px dashed #d9d9d9;
      border-radius: 8px;
    }
    .add-item-row input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid #e8e8e8;
      border-radius: 6px;
      font-size: 13px;
      outline: none;
    }
    .add-item-row input:focus {
      border-color: #667eea;
    }
    .add-btn {
      padding: 6px 12px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
    }
    .add-btn:hover {
      opacity: 0.9;
    }
    .remove-btn {
      width: 24px;
      height: 24px;
      border: none;
      background: #ff4d4f;
      color: white;
      border-radius: 50%;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .remove-btn:hover {
      opacity: 0.8;
    }

    /* 按钮 */
    .form-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid #f0f0f0;
    }
    .btn {
      padding: 10px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .btn-primary:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
    .btn-secondary {
      background: #f5f5f5;
      color: #666;
    }
    .btn-secondary:hover {
      background: #e8e8e8;
    }

    .form-hint {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }

    @media (max-width: 600px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      .ihc-row, .gene-row {
        grid-template-columns: 1fr;
        gap: 6px;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.report) {
      this.formData = { ...this.report };
      this.ihcItems = (this.report.ihcResults || []).map(item => ({
        name: item.name,
        fullName: item.fullName,
        value: item.value,
        numericValue: item.numericValue
      }));
      this.geneItems = (this.report.geneTestResults || []).map(item => ({
        geneName: item.geneName,
        desc: item.mutationType,
        result: item.result,
        mutationType: item.mutationType,
        significance: item.clinicalSignificance
      }));
      if (this.ihcItems.length > 0) this.showIhcSection = true;
      if (this.geneItems.length > 0) this.showGeneSection = true;
    } else {
      this.formData = {
        reportDate: new Date().toISOString().split('T')[0],
        specimenSource: '',
        histologicalType: '腺癌',
        differentiation: 'moderate',
        vascularInvasion: false,
        perineuralInvasion: false,
        marginStatus: 'pending',
        ihcResults: [],
        geneTestResults: []
      };
    }
  }

  private updateField(field: string, value: any) {
    this.formData = { ...this.formData, [field]: value };
  }

  private toggleBoolean(field: 'vascularInvasion' | 'perineuralInvasion') {
    this.formData = { ...this.formData, [field]: !this.formData[field] };
  }

  private updateIhcValue(index: number, field: 'value' | 'numericValue', val: string) {
    const newItems = [...this.ihcItems];
    if (field === 'numericValue') {
      const num = parseFloat(val);
      newItems[index] = { ...newItems[index], numericValue: isNaN(num) ? undefined : num };
    } else {
      newItems[index] = { ...newItems[index], value: val };
    }
    this.ihcItems = newItems;
  }

  private removeIhcItem(index: number) {
    this.ihcItems = this.ihcItems.filter((_, i) => i !== index);
  }

  private addCustomIhc() {
    if (!this.customIhcName.trim()) return;
    this.ihcItems = [...this.ihcItems, {
      name: this.customIhcName.trim(),
      fullName: this.customIhcName.trim(),
      value: ''
    }];
    this.customIhcName = '';
  }

  private addDefaultIhc() {
    const existing = new Set(this.ihcItems.map(i => i.name));
    const toAdd = DEFAULT_IHC_ITEMS.filter(i => !existing.has(i.name));
    if (toAdd.length === 0) return;
    this.ihcItems = [...this.ihcItems, ...toAdd.map(i => ({ name: i.name, fullName: i.fullName, value: '' }))];
    this.showIhcSection = true;
  }

  private updateGeneResult(index: number, field: string, val: string) {
    const newItems = [...this.geneItems];
    (newItems[index] as any)[field] = val;
    this.geneItems = newItems;
  }

  private removeGeneItem(index: number) {
    this.geneItems = this.geneItems.filter((_, i) => i !== index);
  }

  private addCustomGene() {
    if (!this.customGeneName.trim()) return;
    this.geneItems = [...this.geneItems, {
      geneName: this.customGeneName.trim(),
      desc: '',
      result: '',
      mutationType: '',
      significance: ''
    }];
    this.customGeneName = '';
  }

  private addDefaultGenes() {
    const existing = new Set(this.geneItems.map(i => i.geneName));
    const toAdd = DEFAULT_GENE_ITEMS.filter(i => !existing.has(i.name));
    if (toAdd.length === 0) return;
    this.geneItems = [...this.geneItems, ...toAdd.map(i => ({
      geneName: i.name, desc: i.desc, result: '', mutationType: '', significance: ''
    }))];
    this.showGeneSection = true;
  }

  private handleSave() {
    const report: PathologyReport = {
      reportDate: this.formData.reportDate || '',
      specimenSource: this.formData.specimenSource || '',
      histologicalType: this.formData.histologicalType || '腺癌',
      differentiation: this.formData.differentiation || 'moderate',
      bismuthType: this.formData.bismuthType,
      tnmStage: this.formData.tnmStage,
      vascularInvasion: this.formData.vascularInvasion || false,
      perineuralInvasion: this.formData.perineuralInvasion || false,
      marginStatus: this.formData.marginStatus || 'pending',
      lymphNodeStatus: this.formData.lymphNodeStatus,
      ihcResults: this.ihcItems.map(item => ({
        name: item.name,
        fullName: item.fullName,
        value: item.value,
        numericValue: item.numericValue
      })),
      geneTestResults: this.geneItems
        .filter(item => item.result)
        .map(item => ({
          geneName: item.geneName,
          mutationType: item.mutationType || item.desc,
          result: item.result,
          clinicalSignificance: item.significance || '',
          therapeuticImplication: ''
        })),
      notes: this.formData.notes
    };

    this.dispatchEvent(new CustomEvent<PathologyReport>('save', {
      bubbles: true,
      composed: true,
      detail: report
    }));
  }

  private handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const fd = this.formData;

    return html`
      <div class="form-card">
        <div class="form-header">
          <div class="form-header-icon">📝</div>
          录入病理报告
        </div>

        <!-- 基本信息 -->
        <div class="form-section">
          <div class="section-title">📋 基本信息</div>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">报告日期<span class="required">*</span></label>
              <input
                type="date"
                class="form-input"
                .value="${fd.reportDate || ''}"
                @input="${(e: Event) => this.updateField('reportDate', (e.target as HTMLInputElement).value)}"
              />
            </div>
            <div class="form-group">
              <label class="form-label">标本来源<span class="required">*</span></label>
              <select
                class="form-select"
                .value="${fd.specimenSource || ''}"
                @change="${(e: Event) => this.updateField('specimenSource', (e.target as HTMLSelectElement).value)}"
              >
                <option value="">请选择</option>
                <option value="穿刺活检">穿刺活检</option>
                <option value="手术切除">手术切除</option>
                <option value="刷片/脱落细胞">刷片/脱落细胞</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">组织学类型</label>
              <select
                class="form-select"
                .value="${fd.histologicalType || '腺癌'}"
                @change="${(e: Event) => this.updateField('histologicalType', (e.target as HTMLSelectElement).value)}"
              >
                <option value="腺癌">腺癌</option>
                <option value="胰胆管型腺癌">胰胆管型腺癌</option>
                <option value="肠型腺癌">肠型腺癌</option>
                <option value="乳头状腺癌">乳头状腺癌</option>
                <option value="黏液腺癌">黏液腺癌</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">分化程度</label>
              <select
                class="form-select"
                .value="${fd.differentiation || 'moderate'}"
                @change="${(e: Event) => this.updateField('differentiation', (e.target as HTMLSelectElement).value)}"
              >
                <option value="well">高分化</option>
                <option value="moderate">中分化</option>
                <option value="poor">低分化</option>
                <option value="undifferentiated">未分化</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Bismuth 分型</label>
              <select
                class="form-select"
                .value="${fd.bismuthType || ''}"
                @change="${(e: Event) => this.updateField('bismuthType', (e.target as HTMLSelectElement).value)}"
              >
                <option value="">未分型</option>
                <option value="I型">I 型</option>
                <option value="II型">II 型</option>
                <option value="IIIa型">IIIa 型</option>
                <option value="IIIb型">IIIb 型</option>
                <option value="IV型">IV 型</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">TNM 分期</label>
              <input
                type="text"
                class="form-input"
                placeholder="如 T2N0M0"
                .value="${fd.tnmStage || ''}"
                @input="${(e: Event) => this.updateField('tnmStage', (e.target as HTMLInputElement).value)}"
              />
            </div>
            <div class="form-group">
              <label class="form-label">淋巴结状态</label>
              <input
                type="text"
                class="form-input"
                placeholder="如 0/12枚淋巴结转移"
                .value="${fd.lymphNodeStatus || ''}"
                @input="${(e: Event) => this.updateField('lymphNodeStatus', (e.target as HTMLInputElement).value)}"
              />
            </div>
            <div class="form-group">
              <label class="form-label">切缘状态</label>
              <select
                class="form-select"
                .value="${fd.marginStatus || 'pending'}"
                @change="${(e: Event) => this.updateField('marginStatus', (e.target as HTMLSelectElement).value)}"
              >
                <option value="pending">待评估</option>
                <option value="R0">R0 - 切缘阴性</option>
                <option value="R1">R1 - 镜下阳性</option>
                <option value="R2">R2 - 肉眼阳性</option>
              </select>
            </div>
          </div>

          <div style="display: flex; gap: 24px; margin-top: 14px;">
            <div class="toggle-group">
              <div
                class="toggle ${fd.vascularInvasion ? 'active' : ''}"
                @click="${() => this.toggleBoolean('vascularInvasion')}"
              >
                <div class="toggle-knob"></div>
              </div>
              <span class="toggle-label">脉管侵犯</span>
            </div>
            <div class="toggle-group">
              <div
                class="toggle ${fd.perineuralInvasion ? 'active' : ''}"
                @click="${() => this.toggleBoolean('perineuralInvasion')}"
              >
                <div class="toggle-knob"></div>
              </div>
              <span class="toggle-label">神经侵犯</span>
            </div>
          </div>
        </div>

        <!-- 免疫组化 -->
        <div class="form-section">
          <div class="collapsible-header" @click="${() => { this.showIhcSection = !this.showIhcSection; }}">
            <div class="collapsible-left">
              <span>🧪</span> 免疫组化结果
              ${this.ihcItems.length > 0 ? html`
                <span class="collapsible-badge">${this.ihcItems.length} 项</span>
              ` : ''}
            </div>
            <svg class="collapsible-arrow ${this.showIhcSection ? 'open' : ''}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          ${this.showIhcSection ? html`
            <div class="collapsible-body">
              ${this.ihcItems.map((item, index) => html`
                <div class="ihc-row">
                  <div class="ihc-row-name">
                    ${item.name}
                    <small>${item.fullName}</small>
                  </div>
                  <input
                    type="text"
                    class="form-input"
                    placeholder="如 40%, 2+, 阳性"
                    .value="${item.value}"
                    @input="${(e: Event) => this.updateIhcValue(index, 'value', (e.target as HTMLInputElement).value)}"
                  />
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <input
                      type="number"
                      class="form-input"
                      style="width: 80px"
                      placeholder="数值%"
                      .value="${item.numericValue !== undefined ? String(item.numericValue) : ''}"
                      @input="${(e: Event) => this.updateIhcValue(index, 'numericValue', (e.target as HTMLInputElement).value)}"
                    />
                    <button class="remove-btn" @click="${() => this.removeIhcItem(index)}">×</button>
                  </div>
                </div>
              `)}
              <div class="add-item-row">
                <input
                  type="text"
                  placeholder="自定义检测项名称"
                  .value="${this.customIhcName}"
                  @input="${(e: Event) => { this.customIhcName = (e.target as HTMLInputElement).value; }}"
                  @keydown="${(e: KeyboardEvent) => { if (e.key === 'Enter') this.addCustomIhc(); }}"
                />
                <button class="add-btn" @click="${this.addCustomIhc}">添加</button>
                <button class="add-btn" style="background: #52c41a" @click="${this.addDefaultIhc}">添加常用项</button>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 基因检测 -->
        <div class="form-section">
          <div class="collapsible-header" @click="${() => { this.showGeneSection = !this.showGeneSection; }}">
            <div class="collapsible-left">
              <span>🧬</span> 基因检测结果
              ${this.geneItems.length > 0 ? html`
                <span class="collapsible-badge">${this.geneItems.length} 项</span>
              ` : ''}
            </div>
            <svg class="collapsible-arrow ${this.showGeneSection ? 'open' : ''}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          ${this.showGeneSection ? html`
            <div class="collapsible-body">
              ${this.geneItems.map((item, index) => html`
                <div class="gene-row">
                  <div class="gene-row-name">
                    ${item.geneName}
                    <small>${item.desc}</small>
                  </div>
                  <select
                    class="form-select"
                    .value="${item.result}"
                    @change="${(e: Event) => this.updateGeneResult(index, 'result', (e.target as HTMLSelectElement).value)}"
                  >
                    <option value="">未检测</option>
                    <option value="阳性">阳性</option>
                    <option value="阴性">阴性</option>
                    <option value="未检出">未检出</option>
                    <option value="待检测">待检测</option>
                  </select>
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <input
                      type="text"
                      class="form-input"
                      placeholder="临床意义"
                      .value="${item.significance}"
                      @input="${(e: Event) => this.updateGeneResult(index, 'significance', (e.target as HTMLInputElement).value)}"
                    />
                    <button class="remove-btn" @click="${() => this.removeGeneItem(index)}">×</button>
                  </div>
                </div>
              `)}
              <div class="add-item-row">
                <input
                  type="text"
                  placeholder="自定义基因名称"
                  .value="${this.customGeneName}"
                  @input="${(e: Event) => { this.customGeneName = (e.target as HTMLInputElement).value; }}"
                  @keydown="${(e: KeyboardEvent) => { if (e.key === 'Enter') this.addCustomGene(); }}"
                />
                <button class="add-btn" @click="${this.addCustomGene}">添加</button>
                <button class="add-btn" style="background: #52c41a" @click="${this.addDefaultGenes}">添加常用项</button>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 备注 -->
        <div class="form-section">
          <div class="form-group full-width">
            <label class="form-label">备注</label>
            <textarea
              class="form-textarea"
              placeholder="其他需要记录的病理信息..."
              .value="${fd.notes || ''}"
              @input="${(e: Event) => this.updateField('notes', (e.target as HTMLTextAreaElement).value)}"
            ></textarea>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="form-actions">
          <button class="btn btn-secondary" @click="${this.handleCancel}">取消</button>
          <button class="btn btn-primary" @click="${this.handleSave}">保存病理报告</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pathology-form': PathologyForm;
  }
}
