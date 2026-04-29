import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import type { Disease, ExamItem, TreatmentItem, StageType } from '../types';

export interface StageSelectResult {
  disease: Disease;
  completedExamIds: string[];
  completedTreatmentIds: string[];
  currentStage: StageType;
}

@customElement('stage-selector')
export class StageSelector extends LitElement {
  @property({ type: Object })
  public disease: Disease | null = null;

  @property({ type: Array })
  public completedExamIds: string[] = [];

  @property({ type: Array })
  public completedTreatmentIds: string[] = [];

  @state()
  private selectedExamIds: Set<string> = new Set();

  @state()
  private selectedTreatmentIds: Set<string> = new Set();

  static styles = css`
    :host {
      display: block;
    }
    .selector-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: flex-end;
      z-index: 1000;
    }
    .selector-sheet {
      width: 100%;
      max-height: 90vh;
      background: white;
      border-radius: 20px 20px 0 0;
      padding: 24px;
      overflow-y: auto;
      animation: slideUp 0.3s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .selector-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .selector-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .disease-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #f0f9ff;
      border-radius: 12px;
      margin-bottom: 20px;
    }
    .disease-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: #1890ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .disease-name {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 600;
      color: #666;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 500;
    }
    .exam-badge {
      background: #e6f4ff;
      color: #1890ff;
    }
    .treatment-badge {
      background: #fff1f0;
      color: #ff4d4f;
    }
    .item-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border: 1px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #1890ff;
    }
    .item.selected {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .item-checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid #ddd;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    .item.selected .item-checkbox {
      background: #1890ff;
      border-color: #1890ff;
    }
    .check-icon {
      opacity: 0;
      transition: opacity 0.2s;
    }
    .item.selected .check-icon {
      opacity: 1;
    }
    .item-info {
      flex: 1;
    }
    .item-name {
      font-size: 15px;
      font-weight: 500;
      color: #333;
      margin-bottom: 2px;
    }
    .item-desc {
      font-size: 12px;
      color: #999;
    }
    .confirm-btn {
      width: 100%;
      background: #1890ff;
      color: white;
      border: none;
      padding: 16px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 12px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .confirm-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(24, 144, 255, 0.4);
    }
    .confirm-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    .stage-hint {
      background: #f8f6ff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .stage-hint-text {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }
    .stage-result {
      background: #1890ff;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    .stage-result-label {
      font-size: 13px;
      color: rgba(255,255,255,0.8);
      margin-bottom: 8px;
    }
    .stage-result-text {
      font-size: 24px;
      font-weight: 700;
      color: white;
    }
    .category-divider {
      font-size: 13px;
      color: #999;
      margin: 16px 0 12px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .category-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #eee;
    }
  `;

  public updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('completedExamIds')) {
      this.selectedExamIds = new Set(this.completedExamIds);
    }
    if (changedProperties.has('completedTreatmentIds')) {
      this.selectedTreatmentIds = new Set(this.completedTreatmentIds);
    }
  }

  private handleExamToggle(examId: string): void {
    if (this.selectedExamIds.has(examId)) {
      this.selectedExamIds.delete(examId);
    } else {
      this.selectedExamIds.add(examId);
    }
    this.selectedExamIds = new Set(this.selectedExamIds);
  }

  private handleTreatmentToggle(treatmentId: string): void {
    if (this.selectedTreatmentIds.has(treatmentId)) {
      this.selectedTreatmentIds.delete(treatmentId);
    } else {
      this.selectedTreatmentIds.add(treatmentId);
    }
    this.selectedTreatmentIds = new Set(this.selectedTreatmentIds);
  }

  private getCurrentStage(): StageType {
    if (!this.disease) return 'examination';
    if (this.completedTreatmentIds.size > 0) return 'treatment';
    return 'examination';
  }

  private getStageText(): string {
    return this.getCurrentStage() === 'treatment' ? '治疗阶段' : '检查阶段';
  }

  private handleConfirm(): void {
    if (!this.disease) return;
    this.dispatchEvent(new CustomEvent<StageSelectResult>('stage-select', {
      bubbles: true,
      composed: true,
      detail: {
        disease: this.disease,
        completedExamIds: Array.from(this.completedExamIds),
        completedTreatmentIds: Array.from(this.completedTreatmentIds),
        currentStage: this.getCurrentStage()
      }
    }));
  }

  private handleClose(): void {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  private handleOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) {
      this.handleClose();
    }
  }

  private getCategoryName(category: string): string {
    const names: Record<string, string> = {
      blood: '血液检查',
      imaging: '影像学检查',
      pathology: '病理检查',
      surgery: '手术',
      chemo: '化疗',
      radiation: '放疗',
      targeted: '靶向/免疫治疗',
      drainage: '胆道引流'
    };
    return names[category] || category;
  }

  private groupByCategory(items: (ExamItem | TreatmentItem)[]): Record<string, (ExamItem | TreatmentItem)[]> {
    const groups: Record<string, (ExamItem | TreatmentItem)[]> = {};
    for (const item of items) {
      const cat = item.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    }
    return groups;
  }

  render() {
    if (!this.disease) return html``;

    const examGroups = this.groupByCategory(this.disease.examItems);
    const treatmentGroups = this.groupByCategory(this.disease.treatmentItems);
    const hasAnySelection = this.selectedExamIds.size > 0 || this.selectedTreatmentIds.size > 0;

    return html`
      <div class="selector-overlay" @click="${this.handleOverlayClick}">
        <div class="selector-sheet">
          <div class="selector-header">
            <span class="selector-title">选择已完成的项目</span>
            <button class="close-btn" @click="${this.handleClose}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="disease-info">
            <div class="disease-icon">${this.disease.icon}</div>
            <div class="disease-name">${this.disease.name}</div>
          </div>

          ${hasAnySelection ? html`
            <div class="stage-result">
              <div class="stage-result-label">当前阶段</div>
              <div class="stage-result-text">${this.getStageText()}</div>
            </div>
          ` : html`
            <div class="stage-hint">
              <div class="stage-hint-text">
                请选择您已完成的相关检查或治疗项目，系统将根据您的选择判断当前所处阶段并提供相应指引。
              </div>
            </div>
          `}

          <div class="section">
            <div class="section-title">
              <span class="section-badge exam-badge">检查</span>
              已完成的检查项目
            </div>
            ${Object.entries(examGroups).map(([category, items]) => html`
              <div class="category-divider">${this.getCategoryName(category)}</div>
              <div class="item-list">
                ${items.map(item => html`
                  <div
                    class="item ${this.selectedExamIds.has(item.id) ? 'selected' : ''}"
                    @click="${() => this.handleExamToggle(item.id)}"
                  >
                    <div class="item-checkbox">
                      <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div class="item-info">
                      <div class="item-name">${item.name}</div>
                      <div class="item-desc">${item.desc}</div>
                    </div>
                  </div>
                `)}
              </div>
            `)}
          </div>

          <div class="section">
            <div class="section-title">
              <span class="section-badge treatment-badge">治疗</span>
              已完成的治疗项目
            </div>
            ${Object.entries(treatmentGroups).map(([category, items]) => html`
              <div class="category-divider">${this.getCategoryName(category)}</div>
              <div class="item-list">
                ${items.map(item => html`
                  <div
                    class="item ${this.selectedTreatmentIds.has(item.id) ? 'selected' : ''}"
                    @click="${() => this.handleTreatmentToggle(item.id)}"
                  >
                    <div class="item-checkbox">
                      <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div class="item-info">
                      <div class="item-name">${item.name}</div>
                      <div class="item-desc">${item.desc}</div>
                    </div>
                  </div>
                `)}
              </div>
            `)}
          </div>

          <button class="confirm-btn" @click="${this.handleConfirm}">
            确认并查看指引
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stage-selector': StageSelector;
  }
}