import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Disease, ExamItem, BilirubinRecord, DrainageRecord } from '../types';
import './bilirubin-chart';
import './drainage-chart';

@customElement('examination-tab')
export class ExaminationTab extends LitElement {
  @property({ type: Object })
  public archive: Archive | null = null;

  @property({ type: Object })
  public disease: Disease | null = null;

  @state()
  private expandedGroups: Set<string> = new Set();

  @state()
  private showPortalVeinThrombusOption = false;

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
    .task-badge {
      display: inline-block;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 6px;
      font-weight: 500;
    }
    .task-badge.required {
      background: #ff4d4f;
      color: white;
    }
    .task-badge.optional {
      background: #52c41a;
      color: white;
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
      color: #ff4d4f;
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
    .portal-vein-section {
      margin-top: 12px;
      padding: 14px;
      background: #fff8e6;
      border-radius: 10px;
      border: 1px solid #ffe58f;
    }
    .portal-vein-title {
      font-size: 13px;
      font-weight: 600;
      color: #d48806;
      margin-bottom: 10px;
    }
    .portal-vein-option {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #333;
    }
    .portal-vein-checkbox {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    .portal-vein-warning {
      margin-top: 10px;
      padding: 10px 12px;
      background: #fff1f0;
      border-radius: 8px;
      border: 1px solid #ffccc7;
      font-size: 12px;
      color: #ff4d4f;
      line-height: 1.5;
    }
    .warning-icon {
      margin-right: 4px;
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

  private hasCTMRI(): boolean {
    if (!this.archive) return false;
    const examIds = this.archive.completedExamIds || [];
    return examIds.includes('ct-mri');
  }

  private handlePortalVeinThrombusChange(e: Event): void {
    const checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(new CustomEvent('update-portal-vein-thrombus', {
      bubbles: true,
      composed: true,
      detail: { hasPortalVeinTumorThrombus: checked }
    }));
  }

  private calculateBilirubinEstimateTime(): string | undefined {
    if (!this.archive || !this.archive.bilirubinRecords || this.archive.bilirubinRecords.length === 0) {
      return undefined;
    }
    const sortedRecords = [...this.archive.bilirubinRecords].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const latestRecord = sortedRecords[0];
    if (latestRecord.total <= 50) {
      return '已达标';
    }
    const BILIRUBIN_TARGET = 50;
    const WEEKLY_DECLINE_RATE = 50;
    const remaining = latestRecord.total - BILIRUBIN_TARGET;
    const weeksNeeded = Math.ceil(remaining / WEEKLY_DECLINE_RATE);
    if (weeksNeeded <= 0) {
      return '已达标';
    }
    if (weeksNeeded === 1) {
      return '约1周';
    }
    return `约${weeksNeeded}周`;
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

  private toggleGroup(groupId: string): void {
    if (this.expandedGroups.has(groupId)) {
      this.expandedGroups.delete(groupId);
    } else {
      this.expandedGroups.add(groupId);
    }
    this.expandedGroups = new Set(this.expandedGroups);
  }

  private getCoreTasksForDisease(diseaseType: string): {
    standalone: Array<{ name: string; desc: string; icon: string; required: boolean; estimateTime?: string }>;
    groups: Array<{
      id: string;
      name: string;
      icon: string;
      estimateTime?: string;
      detailRoute?: string;
      items: Array<{ name: string; desc: string; icon: string; required: boolean }>
    }>;
  } {
    const configs: Record<string, {
      standalone: Array<{ name: string; desc: string; icon: string; required: boolean; estimateTime?: string }>;
      groups: Array<{
        id: string;
        name: string;
        icon: string;
        estimateTime?: string;
        detailRoute?: string;
        items: Array<{ name: string; desc: string; icon: string; required: boolean }>
      }>;
    }> = {
      'hilar-cholangiocarcinoma': {
        standalone: [
          {
            name: '总胆红素降至50以内',
            desc: html`总胆红素需要降至<span class="bilirubin-target">50μmol/L以下</span>才能考虑化疗。
              若总胆红素在<span class="bilirubin-target">100μmol/L以内</span>，建议联系医生评估是否存在可行方案。`,
            icon: '💛',
            required: true,
            estimateTime: this.calculateBilirubinEstimateTime()
          },
          {
            name: '保证营养状态',
            desc: this.archive?.hasPortalVeinTumorThrombus ? html`
              <div style="color: #ff4d4f; font-weight: 600; margin-bottom: 6px;">⚠️ 存在门静脉癌栓，饮食需特别注意！</div>
              <div>第一要务：避免消化道出血！</div>
              <ul style="margin: 8px 0 0 0; padding-left: 18px; line-height: 1.8;">
                <li>禁止进食<span style="color: #ff4d4f; font-weight: 600;">硬质食物</span>（如坚果、骨头、脆皮等）</li>
                <li>禁止<span style="color: #ff4d4f; font-weight: 600;">过饱</span>，建议少食多餐</li>
                <li>严禁<span style="color: #ff4d4f; font-weight: 600;">过烫食物</span>，温度适宜后再进食</li>
                <li>选择软烂、易消化的食物</li>
                <li>化疗前需保证良好营养状态，摄入充足蛋白质</li>
              </ul>
            ` : '化疗前需保证良好的营养状态，摄入充足蛋白质，为后续治疗提供身体支持。',
            icon: '🍎',
            required: true
          }
        ],
        groups: [
          {
            id: 'pathology',
            name: '病理确认',
            icon: '🔬',
            estimateTime: '约2-3周',
            detailRoute: '#/pathology-detail',
            items: [
              {
                name: '基本病理检测',
                desc: '通过组织样本明确肿瘤性质，是制定治疗方案的基础依据。',
                icon: '🔬',
                required: true
              },
              {
                name: '免疫组化染色检测',
                desc: '检测肿瘤标志物表达情况，指导靶向和免疫治疗药物选择。',
                icon: '🧪',
                required: true
              },
              {
                name: '基因检测',
                desc: '检测基因突变情况（如KRAS、TP53等），为靶向治疗提供依据。',
                icon: '🧬',
                required: false
              }
            ]
          }
        ]
      }
    };
    return configs[diseaseType] || { standalone: [], groups: [] };
  }

  render() {
    if (!this.archive || !this.disease) {
      return html``;
    }

    const showBilirubin = this.hasBloodTest();
    const showPTCD = this.hasPTCD();
    const taskConfig = this.getCoreTasksForDisease(this.disease.id);
    const hasAnyTasks = taskConfig.standalone.length > 0 || taskConfig.groups.length > 0;

    return html`
      ${this.disease && hasAnyTasks ? html`
        <div class="core-task-section">
          <div class="core-task-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            核心任务（化疗前提条件）
          </div>

          ${taskConfig.standalone.map(task => html`
            <div class="core-task-item">
              <div class="core-task-icon warning">${task.icon}</div>
              <div class="core-task-content">
                <div class="core-task-name">
                  ${task.name}
                  <span class="task-badge ${task.required ? 'required' : 'optional'}">${task.required ? '必做' : '可选'}</span>
                  ${task.estimateTime ? html`<span class="task-badge" style="background: #faad14; margin-left: 4px;">${task.estimateTime}</span>` : ''}
                </div>
                <div class="core-task-desc">${task.desc}</div>
              </div>
            </div>
          `)}

          ${taskConfig.groups.map(group => html`
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
                    ${group.estimateTime ? html`<span class="task-group-time">${group.estimateTime}</span>` : ''}
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
      ` : ''}

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
              ${exam.id === 'ct-mri' && status === 'completed' ? html`
                <div class="portal-vein-section">
                  <div class="portal-vein-title">CT/MRI报告补充信息</div>
                  <label class="portal-vein-option">
                    <input
                      type="checkbox"
                      class="portal-vein-checkbox"
                      .checked="${this.archive?.hasPortalVeinTumorThrombus === true}"
                      @change="${this.handlePortalVeinThrombusChange}"
                    />
                    存在门静脉癌栓
                  </label>
                </div>
              ` : ''}
            `;
          })}
        </div>
      </div>

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
