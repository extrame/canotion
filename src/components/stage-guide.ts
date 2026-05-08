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

  @state()
  private expandedGroups: Set<string> = new Set();

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
    .cross-stage-section {
      margin-bottom: 20px;
    }
    .cross-stage-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cross-stage-icon {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .cross-stage-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .task-group {
      background: white;
      border-radius: 10px;
      margin-bottom: 8px;
      border: 1px solid #e8e8e8;
      overflow: hidden;
    }
    .task-group:last-child {
      margin-bottom: 0;
    }
    .task-group-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      cursor: pointer;
      background: #fafafa;
      transition: background 0.2s;
    }
    .task-group-header:hover {
      background: #f0f0f0;
    }
    .task-group-icon {
      font-size: 16px;
    }
    .task-group-content {
      flex: 1;
    }
    .task-group-name {
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
    .task-group-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
    }
    .task-group-time {
      font-size: 12px;
      color: #fa8c16;
      font-weight: 500;
    }
    .task-group-detail {
      font-size: 12px;
      color: #1890ff;
      cursor: pointer;
      text-decoration: none;
    }
    .task-group-detail:hover {
      text-decoration: underline;
    }
    .task-group-toggle {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
    .task-group-toggle.expanded {
      transform: rotate(90deg);
    }
    .task-group-items {
      padding: 8px 14px 12px 44px;
    }
    .task-sub-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid #f0f0f0;
    }
    .task-sub-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .task-sub-icon {
      font-size: 14px;
      margin-top: 2px;
    }
    .task-sub-content {
      flex: 1;
    }
    .task-sub-name {
      font-weight: 500;
      font-size: 13px;
      color: #333;
      margin-bottom: 2px;
    }
    .task-sub-desc {
      font-size: 12px;
      color: #666;
      line-height: 1.4;
    }
    .task-badge {
      display: inline-block;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 6px;
      font-weight: 500;
    }
    .task-badge.required {
      background: #fa8c16;
      color: white;
    }
    .task-badge.optional {
      background: #52c41a;
      color: white;
    }

    @media (max-width: 600px) {
      .guide-card {
        border-radius: 0;
        padding: 16px;
        box-shadow: none;
      }
      .stage-header {
        gap: 12px;
        margin-bottom: 16px;
      }
      .stage-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        font-size: 24px;
      }
      .stage-name {
        font-size: 18px;
      }
      .tab-container {
        margin-top: 16px;
      }
      .tab-header {
        gap: 6px;
        padding-bottom: 10px;
      }
      .tab-btn {
        padding: 10px 12px;
        font-size: 13px;
        border-radius: 8px;
      }
      .cross-stage-section {
        margin-bottom: 16px;
      }
      .cross-stage-title {
        font-size: 13px;
        margin-bottom: 10px;
      }
      .task-group {
        border-radius: 8px;
        border: none;
        background: #fafafa;
      }
      .task-group-header {
        padding: 10px 12px;
      }
      .task-group-name {
        font-size: 13px;
      }
      .task-group-items {
        padding: 6px 12px 10px 40px;
      }
      .task-sub-item {
        padding: 6px 0;
      }
      .task-sub-name {
        font-size: 12px;
      }
      .task-sub-desc {
        font-size: 11px;
      }
      .edit-btn {
        border-radius: 8px;
        margin-top: 12px;
      }
    }
  `;

  private handleTabClick(tab: 'examination' | 'treatment'): void {
    this.activeTab = tab;
  }

  private toggleGroup(groupId: string): void {
    if (this.expandedGroups.has(groupId)) {
      this.expandedGroups.delete(groupId);
    } else {
      this.expandedGroups.add(groupId);
    }
    this.expandedGroups = new Set(this.expandedGroups);
  }

  private getCrossStageTasks(): Array<{
    id: string;
    name: string;
    icon: string;
    detailRoute?: string;
    items: Array<{ name: string; desc: string; icon: string; required: boolean }>
  }> {
    return [
      {
        id: 'nutrition',
        name: '保证营养状态',
        icon: '🍎',
        detailRoute: '#/nutrition-detail',
        items: [
          {
            name: '白蛋白（ALB）',
            desc: '白蛋白是反映营养状态的关键指标，正常值35-50 g/L，低于35g/L需加强营养支持。直接影响身体恢复能力和化疗耐受性。',
            icon: '🥚',
            required: true
          },
          {
            name: '微量元素',
            desc: '锌、硒、镁等微量元素参与多种生理过程。缺锌导致免疫力下降、伤口愈合慢；缺硒影响化疗效果和身体恢复。',
            icon: '⚡',
            required: true
          }
        ]
      },
      {
        id: 'complications',
        name: '小心并发症',
        icon: '⚠️',
        items: [
          {
            name: '门静脉癌栓',
            desc: '门静脉癌栓是胆管癌常见并发症，会导致门静脉压力升高、脾功能亢进、消化道出血风险增加。',
            icon: '🔴',
            required: true
          },
          {
            name: '梗阻性黄疸',
            desc: '肿瘤阻塞胆管导致胆红素升高，需密切监测胆红素变化，必要时进行胆道引流。',
            icon: '💛',
            required: true
          },
          {
            name: '胆道感染',
            desc: '胆道梗阻易导致胆管炎，表现为发热、腹痛、黄疸加重。出现发热需及时就医。',
            icon: '🤒',
            required: true
          }
        ]
      }
    ];
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

        <div class="cross-stage-section">
          <div class="cross-stage-title">
            <div class="cross-stage-icon" style="background: #fff2e6;">⚡</div>
            跨阶段核心任务（贯穿全程）
          </div>
          <div class="cross-stage-list">
            ${this.getCrossStageTasks().map(group => html`
              <div class="task-group">
                <div class="task-group-header" @click="${() => this.toggleGroup(group.id)}">
                  <div class="task-group-toggle ${this.expandedGroups.has(group.id) ? 'expanded' : ''}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                  <div class="task-group-icon">${group.icon}</div>
                  <div class="task-group-content">
                    <div class="task-group-name">${group.name}</div>
                    <div class="task-group-meta">
                      ${group.detailRoute ? html`
                        <span class="task-group-detail" @click="${(e: Event) => { e.stopPropagation(); window.location.hash = group.detailRoute; }}">
                          查看详情 →
                        </span>
                      ` : ''}
                    </div>
                  </div>
                </div>
                ${this.expandedGroups.has(group.id) ? html`
                  <div class="task-group-items">
                    ${group.items.map(item => html`
                      <div class="task-sub-item">
                        <div class="task-sub-icon">${item.icon}</div>
                        <div class="task-sub-content">
                          <div class="task-sub-name">
                            ${item.name}
                            <span class="task-badge ${item.required ? 'required' : 'optional'}">${item.required ? '必做' : '可选'}</span>
                          </div>
                          <div class="task-sub-desc">${item.desc}</div>
                        </div>
                      </div>
                    `)}
                  </div>
                ` : ''}
              </div>
            `)}
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
