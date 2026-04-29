import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Disease, BilirubinRecord, DrainageRecord } from '../types';
import './examination-tab';
import './treatment-tab';

@customElement('stage-guide')
export class StageGuide extends LitElement {
  @property({ type: Object })
  public archive: Archive | null = null;

  @property({ type: Object })
  public disease: Disease | null = null;

  @state()
  private activeTab: 'examination' | 'treatment' = 'examination';

  static styles = css`
    :host {
      display: block;
    }
    .guide-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .stage-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    .stage-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .stage-icon.examination {
      background: #1890ff;
    }
    .stage-icon.treatment {
      background: #52c41a;
    }
    .stage-info {
      flex: 1;
    }
    .stage-label {
      font-size: 13px;
      color: #999;
      margin-bottom: 4px;
    }
    .stage-name {
      font-size: 22px;
      font-weight: 700;
      color: #333;
    }
    .tab-container {
      margin-top: 20px;
    }
    .tab-header {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 12px;
    }
    .tab-btn {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: transparent;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      color: #666;
    }
    .tab-btn:hover {
      background: #f5f5f5;
    }
    .tab-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .tab-btn.examination.active {
      background: #1890ff;
    }
    .tab-btn.treatment.active {
      background: #52c41a;
    }
    .tab-content {
      min-height: 200px;
    }
    .empty-state {
      text-align: center;
      padding: 20px;
      color: #999;
    }
    .edit-btn {
      width: 100%;
      background: white;
      color: #1890ff;
      border: 2px solid #1890ff;
      padding: 12px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 16px;
      transition: all 0.2s;
    }
    .edit-btn:hover {
      background: #f0f9ff;
    }
  `;

  private handleTabClick(tab: 'examination' | 'treatment'): void {
    this.activeTab = tab;
  }

  private handleEdit(): void {
    this.dispatchEvent(new CustomEvent('edit-stage', { bubbles: true, composed: true }));
  }

  private handleAddBilirubin(e: CustomEvent<BilirubinRecord>): void {
    this.dispatchEvent(new CustomEvent<BilirubinRecord>('add-bilirubin', {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  }

  private handleAddDrainage(e: CustomEvent<DrainageRecord>): void {
    this.dispatchEvent(new CustomEvent<DrainageRecord>('add-drainage', {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  }

  private handleUpdatePortalVeinThrombus(e: CustomEvent<{ hasPortalVeinTumorThrombus: boolean }>): void {
    this.dispatchEvent(new CustomEvent<{ hasPortalVeinTumorThrombus: boolean }>('update-portal-vein-thrombus', {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  }

  render() {
    if (!this.archive || !this.disease) {
      return html`<div class="empty-state">加载中...</div>`;
    }

    const isExamination = this.archive.currentStage !== 'treatment';

    return html`
      <div class="guide-card">
        <div class="stage-header">
          <div class="stage-icon ${this.archive.currentStage}">
            ${isExamination ? '🔍' : '💊'}
          </div>
          <div class="stage-info">
            <div class="stage-label">当前阶段</div>
            <div class="stage-name">${isExamination ? '检查/等待治疗阶段' : '治疗阶段'}</div>
          </div>
        </div>

        <div class="tab-container">
          <div class="tab-header">
            <button
              class="tab-btn examination ${this.activeTab === 'examination' ? 'active' : ''}"
              @click="${() => this.handleTabClick('examination')}"
            >
              🔍 检查/等待治疗阶段
            </button>
            <button
              class="tab-btn treatment ${this.activeTab === 'treatment' ? 'active' : ''}"
              @click="${() => this.handleTabClick('treatment')}"
            >
              💊 治疗阶段
            </button>
          </div>
          <div class="tab-content">
            ${this.activeTab === 'examination' ? html`
              <examination-tab
                .archive="${this.archive}"
                .disease="${this.disease}"
                @add-bilirubin="${this.handleAddBilirubin}"
                @add-drainage="${this.handleAddDrainage}"
                @update-portal-vein-thrombus="${this.handleUpdatePortalVeinThrombus}"
              ></examination-tab>
            ` : html`
              <treatment-tab
                .archive="${this.archive}"
                .disease="${this.disease}"
                @add-bilirubin="${this.handleAddBilirubin}"
              ></treatment-tab>
            `}
          </div>
        </div>

        <button class="edit-btn" @click="${this.handleEdit}">
          更新检查/治疗进度
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stage-guide': StageGuide;
  }
}
