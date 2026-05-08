import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Disease } from '../types';
import { backupService, type ImportResult } from '../services/backup-service';

@customElement('archive-list-page')
export class ArchiveListPage extends LitElement {
  @property({ type: Array })
  public archives: Archive[] = [];

  @state()
  private showSelector = false;

  @state()
  private showImportDialog = false;

  @state()
  private importResult: ImportResult | null = null;

  @state()
  private isImporting = false;

  static styles = css`
    :host {
      display: block;
    }
    .header {
      background: white;
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header h1 {
      color: #333;
      font-size: 28px;
      margin-bottom: 8px;
    }
    .header p {
      color: #666;
      font-size: 14px;
    }
    .new-archive-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1890ff;
      color: white;
      border: none;
      padding: 14px 28px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .new-archive-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(24, 144, 255, 0.4);
    }
    .archives-section {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .section-title {
      color: #333;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .archives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }
    .empty-state {
      text-align: center;
      padding: 40px;
      color: #999;
    }
    .empty-state svg {
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }
    .disclaimer-banner {
      background: #fff7e6;
      border: 1px solid #ffd591;
      border-radius: 12px;
      padding: 14px 16px;
      margin-top: 20px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .disclaimer-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    .disclaimer-content {
      flex: 1;
    }
    .disclaimer-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 4px;
    }
    .disclaimer-text {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .privacy-banner {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
      padding: 14px 16px;
      margin-top: 12px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .privacy-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    .privacy-content {
      flex: 1;
    }
    .privacy-title {
      font-size: 14px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 4px;
    }
    .privacy-text {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }

    .backup-section {
      display: flex;
      gap: 12px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .backup-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #f5f5f5;
      color: #666;
      border: 1px solid #d9d9d9;
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    .backup-btn:hover {
      background: #e6f7ff;
      border-color: #1890ff;
      color: #1890ff;
    }
    .backup-btn.export {
      background: #e6f7ff;
      border-color: #1890ff;
      color: #1890ff;
    }
    .backup-btn.export:hover {
      background: #1890ff;
      color: white;
    }

    /* 导入对话框 */
    .dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    }
    .dialog {
      background: white;
      border-radius: 16px;
      padding: 24px;
      width: 90%;
      max-width: 480px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .dialog-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      color: #333;
    }
    .file-input-wrapper {
      border: 2px dashed #d9d9d9;
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      margin-bottom: 16px;
    }
    .file-input-wrapper:hover {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .file-input-wrapper.has-file {
      border-color: #52c41a;
      background: #f6ffed;
    }
    .file-input {
      display: none;
    }
    .file-input-label {
      cursor: pointer;
      color: #666;
    }
    .file-input-label strong {
      color: #1890ff;
    }
    .merge-strategy {
      margin-bottom: 16px;
    }
    .merge-strategy label {
      display: block;
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }
    .merge-strategy select {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      font-size: 14px;
      background: white;
    }
    .dialog-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
    .dialog-btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }
    .dialog-btn.cancel {
      background: #f5f5f5;
      color: #666;
    }
    .dialog-btn.cancel:hover {
      background: #e8e8e8;
    }
    .dialog-btn.confirm {
      background: #1890ff;
      color: white;
    }
    .dialog-btn.confirm:hover {
      background: #40a9ff;
    }
    .dialog-btn.confirm:disabled {
      background: #d9d9d9;
      cursor: not-allowed;
    }
    .import-result {
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .import-result.success {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .import-result.error {
      background: #fff2f0;
      border: 1px solid #ffccc7;
    }
    .import-result-title {
      font-weight: 600;
      margin-bottom: 8px;
    }
    .import-result.success .import-result-title {
      color: #52c41a;
    }
    .import-result.error .import-result-title {
      color: #ff4d4f;
    }
    .import-result-message {
      font-size: 14px;
      color: #666;
    }
    .import-stats {
      display: flex;
      gap: 16px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #d9d9d9;
    }
    .import-stat {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: #666;
    }
    .import-stat-value {
      font-weight: 600;
      color: #1890ff;
    }

    @media (max-width: 600px) {
      .header {
        background: transparent;
        border-radius: 0;
        padding: 16px;
        margin-bottom: 12px;
        box-shadow: none;
      }
      .header h1 {
        font-size: 22px;
      }
      .new-archive-btn {
        padding: 12px 20px;
        font-size: 15px;
      }
      .archives-section {
        background: transparent;
        border-radius: 0;
        padding: 12px;
        box-shadow: none;
      }
      .archives-grid {
        gap: 12px;
      }
      .disclaimer-banner,
      .privacy-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 12px;
        border: none;
      }
      .disclaimer-banner {
        background: #fffbe6;
      }
      .privacy-banner {
        background: #f6ffed;
      }
      .backup-section {
        flex-direction: column;
      }
      .backup-btn {
        width: 100%;
        justify-content: center;
      }
      .dialog {
        width: 95%;
        padding: 20px;
      }
    }
  `;

  private handleCreateArchive(): void {
    this.showSelector = true;
  }

  private handleDiseaseSelect(e: CustomEvent<Disease | null>): void {
    const disease = e.detail;
    this.showSelector = false;
    if (disease) {
      this.dispatchEvent(new CustomEvent<Disease>('create-archive', {
        bubbles: true,
        composed: true,
        detail: disease
      }));
    }
  }

  private handleSelectorClose(): void {
    this.showSelector = false;
  }

  private handleExport(): void {
    backupService.exportAll();
  }

  private handleImportClick(): void {
    this.showImportDialog = true;
    this.importResult = null;
  }

  private handleImportDialogClose(): void {
    this.showImportDialog = false;
    this.importResult = null;
  }

  private async handleFileSelect(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.isImporting = true;
    const select = this.shadowRoot?.querySelector('.merge-strategy select') as HTMLSelectElement;
    const mergeStrategy = (select?.value || 'merge') as 'replace' | 'merge' | 'skip-existing';

    const result = await backupService.importFromFile(file, { mergeStrategy });
    this.importResult = result;
    this.isImporting = false;

    if (result.success) {
      // 触发刷新事件，通知父组件重新加载数据
      this.dispatchEvent(new CustomEvent('data-imported', {
        bubbles: true,
        composed: true,
        detail: result
      }));
    }

    // 清空文件输入
    input.value = '';
  }

  private handleDragOver(e: DragEvent): void {
    e.preventDefault();
    const wrapper = e.currentTarget as HTMLElement;
    wrapper.classList.add('drag-over');
  }

  private handleDragLeave(e: DragEvent): void {
    e.preventDefault();
    const wrapper = e.currentTarget as HTMLElement;
    wrapper.classList.remove('drag-over');
  }

  private async handleDrop(e: DragEvent): Promise<void> {
    e.preventDefault();
    const wrapper = e.currentTarget as HTMLElement;
    wrapper.classList.remove('drag-over');

    const file = e.dataTransfer?.files[0];
    if (!file) return;

    if (!file.name.endsWith('.json')) {
      this.importResult = {
        success: false,
        message: '请选择 JSON 格式的备份文件'
      };
      return;
    }

    this.isImporting = true;
    const select = this.shadowRoot?.querySelector('.merge-strategy select') as HTMLSelectElement;
    const mergeStrategy = (select?.value || 'merge') as 'replace' | 'merge' | 'skip-existing';

    const result = await backupService.importFromFile(file, { mergeStrategy });
    this.importResult = result;
    this.isImporting = false;

    if (result.success) {
      this.dispatchEvent(new CustomEvent('data-imported', {
        bubbles: true,
        composed: true,
        detail: result
      }));
    }
  }

  render() {
    return html`
      <div class="header">
        <h1>癌症患者周期向导</h1>
        <p>根据公开资料，提供诊疗阶段提示</p>
        <button class="new-archive-btn" @click="${this.handleCreateArchive}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          新建档案
        </button>
        <div class="disclaimer-banner">
          <div class="disclaimer-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fa8c16" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div class="disclaimer-content">
            <div class="disclaimer-title">免责声明</div>
            <div class="disclaimer-text">
              本项目是我在陪伴母亲治疗肝门胆管癌过程中开发的。所有数据来源于个人诊疗经历和公开资料，<strong>不构成专业医疗意见</strong>。请务必以主治医生的建议为准，本工具仅供参考辅助，甄别使用。
            </div>
          </div>
        </div>
        <div class="privacy-banner">
          <div class="privacy-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div class="privacy-content">
            <div class="privacy-title">隐私保护说明</div>
            <div class="privacy-text">
              <strong>您的隐私数据仅存储在本地浏览器中</strong>，不会上传到任何服务器。包括：档案信息、胆红素记录、PTCD引流量等所有个人健康数据。请放心使用，但请注意清除浏览器数据会导致档案丢失，建议定期备份重要数据。
            </div>
          </div>
        </div>

        <div class="backup-section">
          <button class="backup-btn export" @click="${this.handleExport}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            导出备份
          </button>
          <button class="backup-btn" @click="${this.handleImportClick}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            导入恢复
          </button>
        </div>
      </div>

      <div class="archives-section">
        <div class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1890ff" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          我的档案
        </div>

        ${this.archives.length === 0 ? html`
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
            <p>还没有档案，点击上方按钮创建第一份档案</p>
          </div>
        ` : html`
          <div class="archives-grid">
            ${this.archives.map(archive => html`
              <archive-card .archive="${archive}"></archive-card>
            `)}
          </div>
        `}
      </div>

      ${this.showSelector ? html`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleSelectorClose}"
        ></disease-selector>
      ` : ''}

      ${this.showImportDialog ? html`
        <div class="dialog-overlay" @click="${this.handleImportDialogClose}">
          <div class="dialog" @click="${(e: Event) => e.stopPropagation()}">
            <div class="dialog-title">导入备份数据</div>

            ${this.importResult ? html`
              <div class="import-result ${this.importResult.success ? 'success' : 'error'}">
                <div class="import-result-title">
                  ${this.importResult.success ? '导入成功' : '导入失败'}
                </div>
                <div class="import-result-message">${this.importResult.message}</div>
                ${this.importResult.success && (this.importResult.importedArchives !== undefined || this.importResult.importedArticles !== undefined) ? html`
                  <div class="import-stats">
                    ${this.importResult.importedArchives !== undefined ? html`
                      <div class="import-stat">
                        <span>档案:</span>
                        <span class="import-stat-value">${this.importResult.importedArchives}</span>
                      </div>
                    ` : ''}
                    ${this.importResult.importedArticles !== undefined ? html`
                      <div class="import-stat">
                        <span>文章:</span>
                        <span class="import-stat-value">${this.importResult.importedArticles}</span>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>
            ` : ''}

            <div class="merge-strategy">
              <label>合并策略</label>
              <select ?disabled="${this.isImporting || !!this.importResult}">
                <option value="merge">智能合并（相同ID覆盖，不同ID追加）</option>
                <option value="skip-existing">跳过已存在（保留现有数据）</option>
                <option value="replace">完全替换（清空现有数据）</option>
              </select>
            </div>

            <div
              class="file-input-wrapper"
              @dragover="${this.handleDragOver}"
              @dragleave="${this.handleDragLeave}"
              @drop="${this.handleDrop}"
            >
              <input
                type="file"
                id="import-file"
                class="file-input"
                accept=".json"
                ?disabled="${this.isImporting}"
                @change="${this.handleFileSelect}"
              >
              <label class="file-input-label" for="import-file">
                ${this.isImporting ? html`
                  <div>⏳ 正在导入...</div>
                ` : html`
                  <div>点击选择或拖拽文件到此处</div>
                  <div style="font-size: 12px; margin-top: 8px; color: #999;">支持 .json 格式的备份文件</div>
                `}
              </label>
            </div>

            <div class="dialog-actions">
              <button class="dialog-btn cancel" @click="${this.handleImportDialogClose}">
                ${this.importResult?.success ? '关闭' : '取消'}
              </button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'archive-list-page': ArchiveListPage;
  }
}