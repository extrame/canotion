import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { PathologyReport, Ki67Grade, IHCItem } from '../types';

interface GradeInfo {
  grade: Ki67Grade;
  label: string;
  color: string;
  bgColor: string;
  range: string;
  description: string;
  riskLevel: string;
}

const KI67_GRADES: GradeInfo[] = [
  {
    grade: 'low',
    label: '低增殖',
    color: '#52c41a',
    bgColor: '#f6ffed',
    range: '< 10%',
    description: '肿瘤细胞增殖活性较低，生长相对缓慢',
    riskLevel: '低风险'
  },
  {
    grade: 'moderate',
    label: '中等增殖',
    color: '#1890ff',
    bgColor: '#e6f7ff',
    range: '10% ~ 30%',
    description: '肿瘤细胞具有中等增殖活性',
    riskLevel: '中低风险'
  },
  {
    grade: 'high',
    label: '高增殖',
    color: '#faad14',
    bgColor: '#fffbe6',
    range: '30% ~ 60%',
    description: '肿瘤细胞增殖活跃，需密切关注复发风险',
    riskLevel: '中高风险'
  },
  {
    grade: 'very-high',
    label: '极高增殖',
    color: '#ff4d4f',
    bgColor: '#fff2f0',
    range: '> 60%',
    description: '肿瘤细胞增殖极活跃，侵袭性强，复发和转移风险高',
    riskLevel: '高风险'
  }
];

@customElement('ki67-assessment')
export class Ki67Assessment extends LitElement {
  @property({ type: Object }) pathologyReport!: PathologyReport;
  @property({ type: String }) reportDate: string = '';

  @state() private showDetail: boolean = false;

  static styles = css`
    :host {
      display: block;
    }
    .assessment-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #f0f0f0;
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .card-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
    }
    .card-title-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .report-date {
      font-size: 12px;
      color: #999;
    }
    .no-data {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }
    .no-data-icon {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }
    .no-data-text {
      font-size: 14px;
      margin-bottom: 4px;
    }

    /* 主仪表盘 */
    .gauge-section {
      display: flex;
      align-items: center;
      gap: 32px;
      margin-bottom: 24px;
      padding: 20px;
      background: #fafafa;
      border-radius: 12px;
    }
    .gauge-container {
      position: relative;
      width: 140px;
      height: 140px;
      flex-shrink: 0;
    }
    .gauge-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }
    .gauge-bg {
      fill: none;
      stroke: #f0f0f0;
      stroke-width: 12;
    }
    .gauge-fill {
      fill: none;
      stroke-width: 12;
      stroke-linecap: round;
      transition: stroke-dashoffset 1s ease, stroke 0.5s ease;
    }
    .gauge-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .gauge-value {
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
    }
    .gauge-unit {
      font-size: 14px;
      color: #999;
      margin-top: 2px;
    }
    .gauge-info {
      flex: 1;
    }
    .grade-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .grade-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .grade-description {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 8px;
    }
    .risk-tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 6px;
    }

    /* 分级条 */
    .grade-bar {
      display: flex;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .grade-bar-segment {
      flex: 1;
      transition: opacity 0.3s;
      position: relative;
    }
    .grade-bar-segment.active {
      box-shadow: 0 0 8px rgba(0,0,0,0.2);
    }
    .grade-bar-labels {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .grade-bar-label {
      font-size: 11px;
      color: #999;
      text-align: center;
      width: 25%;
    }

    /* 详细信息 */
    .detail-section {
      border-top: 1px solid #f0f0f0;
      padding-top: 20px;
    }
    .detail-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      color: #667eea;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      margin-bottom: 16px;
    }
    .detail-toggle:hover {
      opacity: 0.8;
    }
    .detail-toggle svg {
      transition: transform 0.3s;
    }
    .detail-toggle.open svg {
      transform: rotate(180deg);
    }
    .detail-content {
      display: grid;
      gap: 12px;
    }
    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .detail-item {
      background: #fafafa;
      border-radius: 10px;
      padding: 14px;
    }
    .detail-item-label {
      font-size: 12px;
      color: #999;
      margin-bottom: 4px;
    }
    .detail-item-value {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .detail-item-value.positive {
      color: #ff4d4f;
    }
    .detail-item-value.negative {
      color: #52c41a;
    }
    .detail-item-value.warning {
      color: #faad14;
    }

    /* 免疫组化结果列表 */
    .ihc-section {
      margin-top: 16px;
    }
    .ihc-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .ihc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
    }
    .ihc-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: #fafafa;
      border-radius: 8px;
      font-size: 13px;
    }
    .ihc-item-name {
      color: #666;
      font-weight: 500;
    }
    .ihc-item-value {
      font-weight: 700;
    }
    .ihc-item-value.high {
      color: #ff4d4f;
    }
    .ihc-item-value.moderate {
      color: #faad14;
    }
    .ihc-item-value.low {
      color: #52c41a;
    }

    /* 建议 */
    .suggestions {
      margin-top: 20px;
      padding: 16px;
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }
    .suggestions-title {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .suggestion-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 13px;
      color: #555;
      line-height: 1.6;
      margin-bottom: 6px;
    }
    .suggestion-item:last-child {
      margin-bottom: 0;
    }
    .suggestion-icon {
      flex-shrink: 0;
      margin-top: 2px;
    }

    @media (max-width: 600px) {
      .gauge-section {
        flex-direction: column;
        text-align: center;
      }
      .detail-grid {
        grid-template-columns: 1fr;
      }
      .ihc-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private get ki67Value(): number | null {
    const ki67 = this.pathologyReport?.ihcResults?.find(
      item => item.name.toUpperCase() === 'KI-67' || item.name.toUpperCase() === 'KI67'
    );
    return ki67?.numericValue ?? null;
  }

  private get ki67Grade(): GradeInfo | null {
    const value = this.ki67Value;
    if (value === null) return null;
    if (value < 10) return KI67_GRADES[0];
    if (value <= 30) return KI67_GRADES[1];
    if (value <= 60) return KI67_GRADES[2];
    return KI67_GRADES[3];
  }

  private getGaugeColor(): string {
    return this.ki67Grade?.color || '#ccc';
  }

  private getGaugeOffset(): number {
    const value = this.ki67Value;
    if (value === null) return 0;
    // 圆弧总长 = 2 * PI * 54 ≈ 339.29
    const circumference = 2 * Math.PI * 54;
    const clampedValue = Math.min(value, 100);
    return circumference - (clampedValue / 100) * circumference;
  }

  private getSuggestions(): Array<{ icon: string; text: string }> {
    const suggestions: Array<{ icon: string; text: string }> = [];
    const report = this.pathologyReport;
    if (!report) return suggestions;

    const grade = this.ki67Grade;
    const ki67 = this.ki67Value;

    // 基于 Ki-67 的建议
    if (ki67 !== null && ki67 > 30) {
      suggestions.push({
        icon: '⚠️',
        text: `Ki-67 为 ${ki67}%，肿瘤增殖活跃，建议加强术后随访频率，前2年每3个月复查一次`
      });
    }
    if (ki67 !== null && ki67 > 60) {
      suggestions.push({
        icon: '🔴',
        text: 'Ki-67 极高，提示肿瘤侵袭性强，建议与主治医师讨论是否需要辅助化疗'
      });
    }
    if (ki67 !== null && ki67 <= 10) {
      suggestions.push({
        icon: '✅',
        text: 'Ki-67 较低，肿瘤增殖活性不高，预后相对较好，但仍需按指南定期随访'
      });
    }

    // 基于分化程度的建议
    if (report.differentiation === 'poor' || report.differentiation === 'undifferentiated') {
      suggestions.push({
        icon: '⚠️',
        text: `${report.differentiation === 'poor' ? '低' : '未'}分化腺癌侵袭性强，建议完善基因检测以寻找靶向治疗机会`
      });
    }

    // 基于神经侵犯的建议
    if (report.perineuralInvasion) {
      suggestions.push({
        icon: '⚠️',
        text: '存在神经侵犯，可能增加局部复发风险，建议术后辅助治疗并密切随访'
      });
    }

    // 基于脉管侵犯的建议
    if (report.vascularInvasion) {
      suggestions.push({
        icon: '⚠️',
        text: '存在脉管侵犯，提示远处转移风险增加，建议术后定期影像学检查'
      });
    }

    // 基于切缘的建议
    if (report.marginStatus === 'R1') {
      suggestions.push({
        icon: '🔴',
        text: '切缘阳性（R1），建议术后辅助放化疗以降低局部复发风险'
      });
    } else if (report.marginStatus === 'R0') {
      suggestions.push({
        icon: '✅',
        text: '切缘阴性（R0），根治性切除完整，但仍需按指南进行辅助治疗和随访'
      });
    }

    // P53 突变
    const p53 = report.ihcResults?.find(
      item => item.name.toUpperCase() === 'P53'
    );
    if (p53 && p53.numericValue && p53.numericValue > 50) {
      suggestions.push({
        icon: '🧬',
        text: 'P53 高表达（突变型），可能与肿瘤进展相关，建议关注免疫治疗机会'
      });
    }

    return suggestions;
  }

  private getDifferentiationLabel(diff: string): string {
    const labels: Record<string, string> = {
      'well': '高分化',
      'moderate': '中分化',
      'poor': '低分化',
      'undifferentiated': '未分化'
    };
    return labels[diff] || diff;
  }

  private getMarginStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'R0': 'R0 - 切缘阴性',
      'R1': 'R1 - 镜下切缘阳性',
      'R2': 'R2 - 肉眼切缘阳性',
      'pending': '待评估'
    };
    return labels[status] || status;
  }

  private getIHCColorClass(item: IHCItem): string {
    if (item.name.toUpperCase() === 'KI-67' || item.name.toUpperCase() === 'KI67') {
      if (item.numericValue !== undefined) {
        if (item.numericValue > 60) return 'high';
        if (item.numericValue > 30) return 'moderate';
        return 'low';
      }
    }
    if (item.name.toUpperCase() === 'P53' && item.numericValue !== undefined) {
      if (item.numericValue > 50) return 'high';
      if (item.numericValue > 20) return 'moderate';
      return 'low';
    }
    return '';
  }

  private toggleDetail() {
    this.showDetail = !this.showDetail;
  }

  render() {
    if (!this.pathologyReport) {
      return html`
        <div class="assessment-card">
          <div class="card-header">
            <div class="card-title">
              <div class="card-title-icon">🔬</div>
              Ki-67 肿瘤增殖评估
            </div>
          </div>
          <div class="no-data">
            <div class="no-data-icon">📋</div>
            <div class="no-data-text">暂无病理报告数据</div>
            <div style="font-size: 12px; color: #bbb;">录入病理报告后可查看 Ki-67 增殖评估</div>
          </div>
        </div>
      `;
    }

    const grade = this.ki67Grade;
    const ki67 = this.ki67Value;
    const report = this.pathologyReport;
    const suggestions = this.getSuggestions();
    const circumference = 2 * Math.PI * 54;

    return html`
      <div class="assessment-card">
        <div class="card-header">
          <div class="card-title">
            <div class="card-title-icon">🔬</div>
            Ki-67 肿瘤增殖评估
          </div>
          ${report.reportDate ? html`
            <div class="report-date">报告日期: ${report.reportDate}</div>
          ` : ''}
        </div>

        ${ki67 !== null && grade ? html`
          <!-- 主仪表盘 -->
          <div class="gauge-section">
            <div class="gauge-container">
              <svg class="gauge-svg" viewBox="0 0 120 120">
                <circle class="gauge-bg" cx="60" cy="60" r="54" />
                <circle
                  class="gauge-fill"
                  cx="60" cy="60" r="54"
                  stroke="${grade.color}"
                  stroke-dasharray="${circumference}"
                  stroke-dashoffset="${this.getGaugeOffset()}"
                />
              </svg>
              <div class="gauge-center">
                <div class="gauge-value" style="color: ${grade.color}">${ki67}</div>
                <div class="gauge-unit">%</div>
              </div>
            </div>
            <div class="gauge-info">
              <div class="grade-badge" style="background: ${grade.bgColor}; color: ${grade.color}">
                <span class="grade-dot" style="background: ${grade.color}"></span>
                ${grade.label}
              </div>
              <div class="grade-description">${grade.description}</div>
              <div class="risk-tag" style="background: ${grade.bgColor}; color: ${grade.color}">
                ${grade.riskLevel === '高风险' ? '🔴' : grade.riskLevel === '中高风险' ? '🟠' : grade.riskLevel === '中低风险' ? '🟡' : '🟢'}
                ${grade.riskLevel}
              </div>
            </div>
          </div>

          <!-- 分级条 -->
          <div class="grade-bar">
            ${KI67_GRADES.map(g => html`
              <div
                class="grade-bar-segment ${g.grade === grade.grade ? 'active' : ''}"
                style="background: ${g.color}; opacity: ${g.grade === grade.grade ? 1 : 0.25}"
              ></div>
            `)}
          </div>
          <div class="grade-bar-labels">
            ${KI67_GRADES.map(g => html`
              <div class="grade-bar-label" style="${g.grade === grade.grade ? `color: ${g.color}; font-weight: 600` : ''}">${g.range}</div>
            `)}
          </div>
        ` : html`
          <div class="no-data" style="padding: 20px;">
            <div class="no-data-icon">📊</div>
            <div class="no-data-text">病理报告中未包含 Ki-67 数据</div>
          </div>
        `}

        <!-- 详细信息 -->
        <div class="detail-section">
          <button class="detail-toggle ${this.showDetail ? 'open' : ''}" @click="${this.toggleDetail}">
            <span>病理报告详情</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          ${this.showDetail ? html`
            <div class="detail-content">
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-item-label">组织学类型</div>
                  <div class="detail-item-value">${report.histologicalType || '未记录'}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">分化程度</div>
                  <div class="detail-item-value ${report.differentiation === 'poor' || report.differentiation === 'undifferentiated' ? 'warning' : ''}">
                    ${this.getDifferentiationLabel(report.differentiation)}
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">脉管侵犯</div>
                  <div class="detail-item-value ${report.vascularInvasion ? 'positive' : 'negative'}">
                    ${report.vascularInvasion ? '阳性 ⚠️' : '阴性 ✅'}
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">神经侵犯</div>
                  <div class="detail-item-value ${report.perineuralInvasion ? 'positive' : 'negative'}">
                    ${report.perineuralInvasion ? '阳性 ⚠️' : '阴性 ✅'}
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">切缘状态</div>
                  <div class="detail-item-value ${report.marginStatus === 'R1' || report.marginStatus === 'R2' ? 'positive' : report.marginStatus === 'R0' ? 'negative' : ''}">
                    ${this.getMarginStatusLabel(report.marginStatus)}
                  </div>
                </div>
                ${report.tnmStage ? html`
                  <div class="detail-item">
                    <div class="detail-item-label">TNM 分期</div>
                    <div class="detail-item-value">${report.tnmStage}</div>
                  </div>
                ` : ''}
                ${report.bismuthType ? html`
                  <div class="detail-item">
                    <div class="detail-item-label">Bismuth 分型</div>
                    <div class="detail-item-value">${report.bismuthType}</div>
                  </div>
                ` : ''}
                ${report.lymphNodeStatus ? html`
                  <div class="detail-item">
                    <div class="detail-item-label">淋巴结状态</div>
                    <div class="detail-item-value ${report.lymphNodeStatus.includes('N1') || report.lymphNodeStatus.includes('N2') ? 'positive' : 'negative'}">
                      ${report.lymphNodeStatus}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- 免疫组化结果 -->
              ${report.ihcResults && report.ihcResults.length > 0 ? html`
                <div class="ihc-section">
                  <div class="ihc-title">
                    <span>🧪</span> 免疫组化结果
                  </div>
                  <div class="ihc-grid">
                    ${report.ihcResults.map(item => html`
                      <div class="ihc-item">
                        <span class="ihc-item-name">${item.name}</span>
                        <span class="ihc-item-value ${this.getIHCColorClass(item)}">${item.value}</span>
                      </div>
                    `)}
                  </div>
                </div>
              ` : ''}

              <!-- 基因检测结果 -->
              ${report.geneTestResults && report.geneTestResults.length > 0 ? html`
                <div class="ihc-section">
                  <div class="ihc-title">
                    <span>🧬</span> 基因检测结果
                  </div>
                  <div class="ihc-grid">
                    ${report.geneTestResults.map(item => html`
                      <div class="ihc-item">
                        <span class="ihc-item-name">${item.geneName}</span>
                        <span class="ihc-item-value ${item.result === '阳性' ? 'high' : item.result === '阴性' ? 'low' : ''}">${item.result}</span>
                      </div>
                    `)}
                  </div>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>

        <!-- 建议 -->
        ${suggestions.length > 0 ? html`
          <div class="suggestions">
            <div class="suggestions-title">
              <span>💡</span> 个性化建议
            </div>
            ${suggestions.map(s => html`
              <div class="suggestion-item">
                <span class="suggestion-icon">${s.icon}</span>
                <span>${s.text}</span>
              </div>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ki67-assessment': Ki67Assessment;
  }
}
