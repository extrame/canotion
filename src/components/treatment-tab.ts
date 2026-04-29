import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Archive, Disease, TreatmentItem, BilirubinRecord } from '../types';
import './bilirubin-chart';

@customElement('treatment-tab')
export class TreatmentTab extends LitElement {
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
  `;

  private hasBloodTest(): boolean {
    if (!this.archive) return false;
    const examIds = this.archive.completedExamIds || [];
    return examIds.includes('blood-test');
  }

  private getTreatmentStatus(treatmentId: string): 'completed' | 'current' | 'next' | 'pending' {
    if (!this.archive) return 'pending';
    const treatmentIds = this.archive.completedTreatmentIds || [];
    if (treatmentIds.includes(treatmentId)) return 'completed';
    if (!this.disease) return 'pending';
    const treatmentIndex = this.disease.treatmentItems.findIndex(t => t.id === treatmentId);
    if (treatmentIds.length === 0) {
      return treatmentIndex === 0 ? 'current' : 'pending';
    }
    const lastCompletedIndex = Math.max(
      ...treatmentIds.map(id => this.disease!.treatmentItems.findIndex(t => t.id === id))
    );
    if (treatmentIndex <= lastCompletedIndex) return 'completed';
    if (treatmentIndex === lastCompletedIndex + 1) return 'next';
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

  render() {
    if (!this.archive || !this.disease) {
      return html``;
    }

    const showBilirubin = this.hasBloodTest();

    return html`
      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon current">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          治疗项目进度
        </div>
        <div class="guide-list">
          ${this.disease.treatmentItems.map(treatment => {
            const status = this.getTreatmentStatus(treatment.id);
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
                    ${treatment.name}
                    ${status === 'completed' ? html`<span class="completed-badge">已完成</span>` : ''}
                  </div>
                  <div class="item-desc">${treatment.desc}</div>
                </div>
              </div>
            `;
          })}
        </div>
      </div>

      ${showBilirubin ? html`
        <div class="bilirubin-section">
          <bilirubin-chart
            .records="${this.archive.bilirubinRecords || []}"
            @add-record="${this.handleAddBilirubinRecord}"
          ></bilirubin-chart>
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
          治疗期间注意事项
        </div>
        <div class="guide-list">
          <div class="guide-item next">
            <div class="item-check next">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">定期复查</div>
              <div class="item-desc">治疗结束后需定期进行肿瘤标志物和影像学复查</div>
            </div>
          </div>
          <div class="guide-item pending">
            <div class="item-check pending">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">营养支持</div>
              <div class="item-desc">注意补充蛋白质，保持良好的营养状态</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'treatment-tab': TreatmentTab;
  }
}
