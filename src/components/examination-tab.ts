import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Archive, Disease, ExamItem, BilirubinRecord, DrainageRecord } from '../types';
import './bilirubin-chart';
import './drainage-chart';

@customElement('examination-tab')
export class ExaminationTab extends LitElement {
  @property({ type: Object })
  public archive: Archive | null = null;

  @property({ type: Object })
  public disease: Disease | null = null;

  static styles = css`
    :host {
      display: block;
    }
    .guide-section {
      margin-bottom: 20px;
    }
    .guide-section:last-child {
      margin-bottom: 0;
    }
    .guide-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .guide-icon {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .guide-icon.current {
      background: #fff1f0;
    }
    .guide-icon.next {
      background: #f6ffed;
    }
    .guide-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .guide-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.6;
    }
    .guide-item.current {
      background: #fff1f0;
      border: 1px solid #ffccc7;
    }
    .guide-item.next {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .guide-item.pending {
      background: #f5f5f5;
      border: 1px solid #e8e8e8;
    }
    .guide-item.completed {
      background: #f8f6ff;
      border: 1px solid #d3c6ff;
    }
    .item-check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .item-check.completed {
      background: #1890ff;
    }
    .item-check.current {
      background: #ff4d4f;
    }
    .item-check.next {
      background: #52c41a;
    }
    .item-check.pending {
      background: #d9d9d9;
    }
    .item-text {
      flex: 1;
      color: #333;
    }
    .item-name {
      font-weight: 500;
      margin-bottom: 2px;
    }
    .item-desc {
      font-size: 12px;
      color: #666;
    }
    .completed-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      background: #1890ff;
      color: white;
      margin-left: 8px;
    }
    .bilirubin-section {
      margin-top: 20px;
    }
    .core-task-section {
      margin-top: 20px;
      padding: 16px;
      background: linear-gradient(135deg, #fff1f0 0%, #fff2f0 100%);
      border-radius: 12px;
      border: 1px solid #ffccc7;
    }
    .core-task-title {
      font-size: 14px;
      font-weight: 600;
      color: #ff4d4f;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .core-task-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #ffe7e6;
    }
    .core-task-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .core-task-icon {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 12px;
    }
    .core-task-icon.warning {
      background: #fff1f0;
      color: #ff4d4f;
    }
    .core-task-icon.tip {
      background: #f6ffed;
      color: #52c41a;
    }
    .core-task-content {
      flex: 1;
    }
    .core-task-name {
      font-weight: 500;
      font-size: 14px;
      color: #333;
      margin-bottom: 2px;
    }
    .core-task-desc {
      font-size: 12px;
      color: #666;
      line-height: 1.5;
    }
    .bilirubin-target {
      color: #ff4d4f;
      font-weight: 600;
    }
  `;

  private hasBloodTest(): boolean {
    if (!this.archive) return false;
    const examIds = this.archive.completedExamIds || [];
    return examIds.includes('blood-test');
  }

  private hasPTCD(): boolean {
    if (!this.archive) return false;
    const treatmentIds = this.archive.completedTreatmentIds || [];
    return treatmentIds.includes('biliary-drainage');
  }

  private getExamStatus(examId: string): 'completed' | 'current' | 'next' | 'pending' {
    if (!this.archive) return 'pending';
    const examIds = this.archive.completedExamIds || [];
    if (examIds.includes(examId)) return 'completed';
    if (!this.disease) return 'pending';
    const examIndex = this.disease.examItems.findIndex(e => e.id === examId);
    if (examIds.length === 0) {
      return examIndex === 0 ? 'current' : 'pending';
    }
    const lastCompletedIndex = Math.max(
      ...examIds.map(id => this.disease!.examItems.findIndex(e => e.id === id))
    );
    if (examIndex <= lastCompletedIndex) return 'completed';
    if (examIndex === lastCompletedIndex + 1) return 'next';
    return 'pending';
  }

  private handleAddBilirubinRecord(e: CustomEvent<BilirubinRecord>): void {
    if (!this.archive) return;
    this.dispatchEvent(new CustomEvent('add-bilirubin', {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  }

  private handleAddDrainageRecord(e: CustomEvent<DrainageRecord>): void {
    if (!this.archive) return;
    this.dispatchEvent(new CustomEvent('add-drainage', {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  }

  private getCoreTasksForDisease(diseaseType: string): Array<{ name: string; desc: string; icon: string }> {
    const coreTasks: Record<string, Array<{ name: string; desc: string; icon: string }>> = {
      'hilar-cholangiocarcinoma': [
        {
          name: '总胆红素降至50以内',
          desc: html`总胆红素需要降至<span class="bilirubin-target">50μmol/L以下</span>才能考虑化疗。
            若总胆红素在<span class="bilirubin-target">100μmol/L以内</span>，建议联系医生评估是否存在可行方案。`,
          icon: '💛'
        },
        {
          name: '保证营养状态',
          desc: '化疗前需保证良好的营养状态，摄入充足蛋白质，为后续治疗提供身体支持。',
          icon: '🍎'
        }
      ]
    };
    return coreTasks[diseaseType] || [];
  }

  render() {
    if (!this.archive || !this.disease) {
      return html``;
    }

    const showBilirubin = this.hasBloodTest();
    const showPTCD = this.hasPTCD();

    return html`
      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon current">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          检查项目进度
        </div>
        <div class="guide-list">
          ${this.disease.examItems.map(exam => {
            const status = this.getExamStatus(exam.id);
            return html`
              <div class="guide-item ${status}">
                <div class="item-check ${status}">
                  ${status === 'completed' ? html`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ` : status === 'current' ? html`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  ` : ''}
                </div>
                <div class="item-text">
                  <div class="item-name">
                    ${exam.name}
                    ${status === 'completed' ? html`<span class="completed-badge">已完成</span>` : ''}
                  </div>
                  <div class="item-desc">${exam.desc}</div>
                </div>
              </div>
            `;
          })}
        </div>
      </div>

      ${showPTCD ? html`
        <div class="bilirubin-section">
          <drainage-chart
            .records="${this.archive.drainageRecords || []}"
            @add-record="${this.handleAddDrainageRecord}"
          ></drainage-chart>
        </div>
      ` : ''}

      ${showBilirubin ? html`
        <div class="bilirubin-section">
          <bilirubin-chart
            .records="${this.archive.bilirubinRecords || []}"
            @add-record="${this.handleAddBilirubinRecord}"
          ></bilirubin-chart>
        </div>
      ` : ''}

      ${this.disease ? html`
        <div class="core-task-section">
          <div class="core-task-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            核心任务（化疗前提条件）
          </div>
          ${this.getCoreTasksForDisease(this.disease.id).map(task => html`
            <div class="core-task-item">
              <div class="core-task-icon warning">${task.icon}</div>
              <div class="core-task-content">
                <div class="core-task-name">${task.name}</div>
                <div class="core-task-desc">${task.desc}</div>
              </div>
            </div>
          `)}
        </div>
      ` : ''}

      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon next">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          下一步提示
        </div>
        <div class="guide-list">
          <div class="guide-item next">
            <div class="item-check next">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">等待病理确诊</div>
              <div class="item-desc">完成病理活检是进入治疗阶段的关键依据</div>
            </div>
          </div>
          <div class="guide-item pending">
            <div class="item-check pending">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">准备治疗方案</div>
              <div class="item-desc">确诊后可与医生讨论手术可能性及综合治疗方案</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'examination-tab': ExaminationTab;
  }
}
