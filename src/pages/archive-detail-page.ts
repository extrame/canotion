import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Disease, BilirubinRecord, DrainageRecord } from '../types';

@customElement('archive-detail-page')
export class ArchiveDetailPage extends LitElement {
  @property({ type: Object })
  public archive: Archive | null = null;

  @property({ type: Object })
  public disease: Disease | null = null;

  @state()
  private localSuspectDocsSaved = false;

  @state()
  private showBilirubinInput = false;

  @state()
  private inputBilirubinDate = '';

  @state()
  private inputBilirubinTotal = '';

  static styles = css`
    :host {
      display: block;
    }
    .archive-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header-top {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }
    .back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .archive-icon {
      width: 56px;
      height: 56px;
      background: rgba(255,255,255,0.2);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .archive-info {
      flex: 1;
      color: white;
    }
    .archive-name {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .archive-date {
      font-size: 14px;
      opacity: 0.8;
    }
    .delete-btn {
      width: 40px;
      height: 40px;
      border: none;
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .delete-btn:hover {
      background: rgba(255,100,100,0.4);
    }
    .guide-section {
      margin-top: 20px;
    }
    .stage-prompt {
      background: linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%);
      border: 2px solid rgba(102,126,234,0.3);
      border-radius: 16px;
      padding: 32px;
      text-align: center;
    }
    .stage-prompt-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin: 0 auto 16px;
    }
    .stage-prompt-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .stage-prompt-desc {
      font-size: 14px;
      color: #666;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .set-stage-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 14px 32px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .set-stage-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    .suspect-section {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
    .suspect-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    .suspect-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .suspect-info {
      flex: 1;
    }
    .suspect-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .suspect-subtitle {
      font-size: 14px;
      color: #ff5722;
      font-weight: 500;
    }
    .suspect-tips {
      background: #fff8e6;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .suspect-tips-title {
      font-size: 14px;
      font-weight: 600;
      color: #d48806;
      margin-bottom: 12px;
    }
    .suspect-tip-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      color: #333;
      line-height: 1.5;
    }
    .suspect-tip-icon {
      color: #ff5722;
      flex-shrink: 0;
    }
    .suspect-department {
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      color: white;
      padding: 16px;
      border-radius: 12px;
      text-align: center;
    }
    .suspect-department-label {
      font-size: 13px;
      opacity: 0.9;
      margin-bottom: 4px;
    }
    .suspect-department-name {
      font-size: 18px;
      font-weight: 600;
    }
    .suspect-action {
      margin-top: 16px;
    }
    .suspect-docs-checkbox {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .suspect-docs-checkbox:hover {
      background: #e8e8e8;
    }
    .suspect-docs-checkbox.checked {
      background: #e6f7ff;
    }
    .suspect-docs-checkbox input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .suspect-docs-text {
      flex: 1;
      font-size: 14px;
      color: #333;
    }
    .suspect-next-btn {
      width: 100%;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      color: white;
      border: none;
      padding: 14px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 12px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .suspect-next-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
    }
    .suspect-next-btn:disabled {
      background: #d9d9d9;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    .bilirubin-input-section {
      background: #fff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      border: 1px solid #e8e8e8;
    }
    .bilirubin-input-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .bilirubin-input-row {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }
    .bilirubin-input-group {
      flex: 1;
    }
    .bilirubin-input-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
    .bilirubin-input-field {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .bilirubin-input-field:focus {
      border-color: #1890ff;
    }
    .bilirubin-save-btn {
      background: #1890ff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
    }
    .bilirubin-save-btn:hover {
      background: #40a9ff;
    }
    .bilirubin-result {
      margin-top: 16px;
      padding: 14px;
      border-radius: 10px;
    }
    .bilirubin-result.safe {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .bilirubin-result.warning {
      background: #fffbe6;
      border: 1px solid #ffe58f;
    }
    .bilirubin-result.danger {
      background: #fff1f0;
      border: 1px solid #ffccc7;
    }
    .bilirubin-result.critical {
      background: #ffccc7;
      border: 1px solid #ff4d4f;
    }
    .bilirubin-result-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .bilirubin-result-icon {
      font-size: 18px;
    }
    .bilirubin-result-level {
      font-size: 14px;
      font-weight: 600;
    }
    .bilirubin-result.safe .bilirubin-result-level {
      color: #52c41a;
    }
    .bilirubin-result.warning .bilirubin-result-level {
      color: #faad14;
    }
    .bilirubin-result.danger .bilirubin-result-level {
      color: #ff7a45;
    }
    .bilirubin-result.critical .bilirubin-result-level {
      color: #ff4d4f;
    }
    .bilirubin-result-value {
      font-size: 13px;
      color: #666;
      margin-bottom: 8px;
    }
    .bilirubin-result-advice {
      font-size: 13px;
      color: #333;
      line-height: 1.6;
    }
  `;

  private hasCompletedItems(): boolean {
    if (!this.archive) return false;
    const examIds = this.archive.completedExamIds || [];
    const treatmentIds = this.archive.completedTreatmentIds || [];
    return examIds.length > 0 || treatmentIds.length > 0;
  }

  private getDiseaseIcon(diseaseType: string): string {
    const icons: Record<string, string> = {
      'hilar-cholangiocarcinoma': '🫀'
    };
    return icons[diseaseType] || '📋';
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  private getBilirubinAdvice(total: number): { level: string; class: string; advice: string } {
    if (total < 50) {
      return {
        level: '✅ 达标',
        class: 'safe',
        advice: '胆红素已降至化疗安全范围，可以考虑进行化疗。请继续监测。'
      };
    } else if (total <= 85) {
      return {
        level: '🟡 接近达标',
        class: 'warning',
        advice: '胆红素已接近安全范围（<50 μmol/L），但仍需继续降至50以下才能进行化疗。'
      };
    } else if (total <= 170) {
      return {
        level: '🟠 明显升高',
        class: 'danger',
        advice: '胆红素明显升高，需要密切关注。建议咨询医生考虑进行胆道引流治疗（PTCD/ERCP支架），几乎所有治疗都要求待胆红素降至50 μmol/L以下，请重点关注。'
      };
    } else if (total <= 200) {
      return {
        level: '🔴 重度黄疸',
        class: 'critical',
        advice: '胆红素重度升高（>170 μmol/L）。根据诊疗指南，建议进行术前胆道引流（PTCD或ERCP支架）降低胆红素水平。胆红素需降至50 μmol/L以下才能考虑化疗或手术。'
      };
    } else {
      return {
        level: '🚨 极高危',
        class: 'critical',
        advice: '胆红素极高（>200 μmol/L）！此时不宜直接进行手术或化疗，风险极高。必须先进行PTCD外引流或支架置入内引流，待胆红素显著下降后再评估治疗方案。请立即就医！'
      };
    }
  }

  private handleBack(): void {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
  }

  private handleDelete(): void {
    this.dispatchEvent(new CustomEvent('delete-archive', { bubbles: true, composed: true }));
  }

  private handleEditStage(): void {
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

  private handleUpdateSuspectDocsSaved(e: CustomEvent<{ suspectDocsSaved: boolean }>): void {
    this.dispatchEvent(new CustomEvent<{ suspectDocsSaved: boolean }>('update-suspect-docs-saved', {
      bubbles: true,
      composed: true,
      detail: e.detail
    }));
  }

  private handleDocsSavedChange(e: Event): void {
    const checked = (e.target as HTMLInputElement).checked;
    this.localSuspectDocsSaved = checked;
    this.handleUpdateSuspectDocsSaved(new CustomEvent('update-suspect-docs-saved', {
      bubbles: true,
      composed: true,
      detail: { suspectDocsSaved: checked }
    }));
  }

  private handleConfirmSuspectStage(): void {
    this.dispatchEvent(new CustomEvent('confirm-suspect-stage', {
      bubbles: true,
      composed: true
    }));
  }

  private handleShowBilirubinInput(): void {
    this.showBilirubinInput = !this.showBilirubinInput;
    if (this.showBilirubinInput) {
      this.inputBilirubinDate = new Date().toISOString().split('T')[0];
      this.inputBilirubinTotal = '';
    }
  }

  private handleBilirubinDateChange(e: Event): void {
    this.inputBilirubinDate = (e.target as HTMLInputElement).value;
  }

  private handleBilirubinTotalChange(e: Event): void {
    this.inputBilirubinTotal = (e.target as HTMLInputElement).value;
  }

  private handleSaveBilirubin(): void {
    if (!this.inputBilirubinDate || !this.inputBilirubinTotal) return;
    const total = parseFloat(this.inputBilirubinTotal) || 0;
    if (total <= 0) return;

    const record: BilirubinRecord = {
      id: Date.now().toString(),
      date: this.inputBilirubinDate,
      total,
      direct: 0,
      indirect: 0,
      unit: 'μmol/L'
    };

    this.dispatchEvent(new CustomEvent<BilirubinRecord>('add-bilirubin', {
      bubbles: true,
      composed: true,
      detail: record
    }));

    this.showBilirubinInput = false;
  }

  render() {
    if (!this.archive || !this.disease) {
      return html`<div>加载中...</div>`;
    }

    const hasCompletedItems = this.hasCompletedItems();
    const isSuspectStage = this.archive.currentStage === 'suspect';
    const suspectStageInfo = this.disease.suspectStageInfo;
    const docsSaved = this.localSuspectDocsSaved || this.archive.suspectDocsSaved;

    return html`
      <div class="archive-header">
        <div class="header-top">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="archive-icon">${this.getDiseaseIcon(this.archive.diseaseType)}</div>
          <div class="archive-info">
            <div class="archive-name">${this.archive.diseaseName}</div>
            <div class="archive-date">创建于 ${this.formatDate(this.archive.createdAt)}</div>
          </div>
          <button class="delete-btn" @click="${this.handleDelete}" title="删除档案">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>

      ${isSuspectStage && suspectStageInfo ? html`
        <div class="suspect-section">
          <div class="suspect-header">
            <div class="suspect-icon">⚠️</div>
            <div class="suspect-info">
              <div class="suspect-title">${suspectStageInfo.title}</div>
              <div class="suspect-subtitle">请按照以下提示做好准备</div>
            </div>
          </div>

          <div class="suspect-tips">
            <div class="suspect-tips-title">📋 需要完成的事项</div>
            ${suspectStageInfo.tips.map(tip => html`
              <div class="suspect-tip-item">
                <span class="suspect-tip-icon">•</span>
                <span>${tip}</span>
              </div>
            `)}
          </div>

          <div class="bilirubin-input-section">
            <div class="bilirubin-input-title">
              💉 胆红素指标（第一时间录入）
              <span style="font-size: 12px; color: #ff4d4f; font-weight: normal;">（后续所有治疗都必须在胆红素50以下才能进行）</span>
            </div>

            ${this.showBilirubinInput ? html`
              <div class="bilirubin-input-row">
                <div class="bilirubin-input-group">
                  <div class="bilirubin-input-label">日期</div>
                  <input
                    type="date"
                    class="bilirubin-input-field"
                    .value="${this.inputBilirubinDate}"
                    @input="${this.handleBilirubinDateChange}"
                  />
                </div>
                <div class="bilirubin-input-group">
                  <div class="bilirubin-input-label">总胆红素 (μmol/L)</div>
                  <input
                    type="number"
                    class="bilirubin-input-field"
                    placeholder="如：85"
                    .value="${this.inputBilirubinTotal}"
                    @input="${this.handleBilirubinTotalChange}"
                  />
                </div>
                <button class="bilirubin-save-btn" @click="${this.handleSaveBilirubin}">保存</button>
              </div>
            ` : html`
              <button
                class="suspect-next-btn"
                style="background: #1890ff; margin-top: 0;"
                @click="${this.handleShowBilirubinInput}"
              >
                ${this.archive?.bilirubinRecords && this.archive.bilirubinRecords.length > 0 ? '📊 录入新胆红素数据' : '💉 录入胆红素指标'}
              </button>
            `}

            ${this.archive?.bilirubinRecords && this.archive.bilirubinRecords.length > 0 ? html`
              ${(() => {
                const latest = [...this.archive!.bilirubinRecords].sort((a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
                )[0];
                const advice = this.getBilirubinAdvice(latest.total);
                return html`
                  <div class="bilirubin-result ${advice.class}">
                    <div class="bilirubin-result-header">
                      <span class="bilirubin-result-icon">${latest.total < 50 ? '✅' : latest.total <= 85 ? '🟡' : latest.total <= 170 ? '🟠' : '🔴'}</span>
                      <span class="bilirubin-result-level">${advice.level}</span>
                    </div>
                    <div class="bilirubin-result-value">
                      最新胆红素：${latest.total} μmol/L（${new Date(latest.date).toLocaleDateString('zh-CN')}）
                    </div>
                    <div class="bilirubin-result-advice">${advice.advice}</div>
                  </div>
                `;
              })()}
            ` : ''}
          </div>

          <div class="suspect-department">
            <div class="suspect-department-label">推荐就诊科室</div>
            <div class="suspect-department-name">${suspectStageInfo.recommendDepartment}</div>
          </div>

          <div class="suspect-action">
            <label class="suspect-docs-checkbox ${docsSaved ? 'checked' : ''}">
              <input
                type="checkbox"
                .checked="${docsSaved}"
                @change="${this.handleDocsSavedChange}"
              />
              <span class="suspect-docs-text">我已确认保存好所有资料</span>
            </label>
            <button
              class="suspect-next-btn"
              ?disabled="${!docsSaved}"
              @click="${this.handleConfirmSuspectStage}"
            >
              资料已准备好，前往设置当前阶段
            </button>
          </div>
        </div>
      ` : hasCompletedItems ? html`
        <div class="guide-section">
          <stage-guide
            .archive="${this.archive}"
            .disease="${this.disease}"
            @edit-stage="${this.handleEditStage}"
            @add-bilirubin="${this.handleAddBilirubin}"
            @add-drainage="${this.handleAddDrainage}"
            @update-portal-vein-thrombus="${this.handleUpdatePortalVeinThrombus}"
          ></stage-guide>
        </div>
      ` : html`
        <div class="stage-prompt">
          <div class="stage-prompt-icon">🔍</div>
          <div class="stage-prompt-title">设置诊疗阶段</div>
          <div class="stage-prompt-desc">
            请选择您目前已完成的检查和治疗项目<br>
            系统将根据您的选择判断当前所处阶段
          </div>
          <button class="set-stage-btn" @click="${this.handleEditStage}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            设置阶段
          </button>
        </div>
      `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'archive-detail-page': ArchiveDetailPage;
  }
}