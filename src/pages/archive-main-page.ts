import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Disease } from '../types';
import '../components/disease-selector';

@customElement('archive-main-page')
export class ArchiveMainPage extends LitElement {
  @property({ type: Array })
  public archives: Archive[] = [];

  @property({ type: Object })
  public disease: Disease | null = null;

  @property({ type: Object })
  public currentArchive: Archive | null = null;

  @state()
  private showArchiveSwitcher = false;

  @state()
  private showDiseaseSelector = false;

  static styles = css`
    :host {
      display: block;
    }

    .archive-toolbar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: white;
      border-radius: 12px;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      flex-wrap: wrap;
    }

    .archive-switch-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border: 1px solid #d9d9d9;
      background: white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      transition: all 0.2s;
    }
    .archive-switch-btn:hover {
      border-color: #1890ff;
      color: #1890ff;
    }

    .archive-switch-btn .archive-name-text {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .new-archive-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      background: #1890ff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    .new-archive-btn:hover {
      background: #40a9ff;
    }

    .toolbar-spacer {
      flex: 1;
    }

    .archive-count {
      font-size: 12px;
      color: #999;
    }

    /* 档案切换下拉面板 */
    .switcher-overlay {
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
    .switcher-sheet {
      width: 100%;
      background: white;
      border-radius: 20px 20px 0 0;
      padding: 24px;
      animation: slideUp 0.3s ease;
      max-height: 60vh;
      overflow-y: auto;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .switcher-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .switcher-title {
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
    .archive-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .archive-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border: 1px solid #eee;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .archive-item:hover {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .archive-item.active {
      border-color: #1890ff;
      background: #e6f7ff;
    }
    .archive-item-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .archive-item-info {
      flex: 1;
      min-width: 0;
    }
    .archive-item-name {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 2px;
    }
    .archive-item-date {
      font-size: 12px;
      color: #999;
    }
    .archive-item-active-badge {
      font-size: 12px;
      color: #1890ff;
      font-weight: 500;
      flex-shrink: 0;
    }

    /* 空状态 */
    .empty-state {
      text-align: center;
      padding: 60px 24px;
      color: #999;
    }
    .empty-state svg {
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
      opacity: 0.4;
    }
    .empty-state p {
      font-size: 15px;
      margin-bottom: 20px;
    }
    .empty-state .create-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1890ff;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 24px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .empty-state .create-btn:hover {
      background: #40a9ff;
      transform: translateY(-1px);
    }

    @media (max-width: 600px) {
      .archive-toolbar {
        border-radius: 0;
        margin-bottom: 8px;
        padding: 6px 8px;
        gap: 6px;
      }
      .archive-switch-btn,
      .new-archive-btn {
        padding: 6px 12px;
        font-size: 13px;
      }
      .archive-switch-btn .archive-name-text {
        max-width: 80px;
      }
      .archive-count {
        display: none;
      }
      .switcher-sheet {
        padding: 20px;
      }
    }
  `;

  private handleSwitchArchive(): void {
    if (this.archives.length <= 1) return;
    this.showArchiveSwitcher = true;
  }

  private handleCloseSwitcher(): void {
    this.showArchiveSwitcher = false;
  }

  private handleSelectArchive(archive: Archive): void {
    this.showArchiveSwitcher = false;
    this.dispatchEvent(new CustomEvent<Archive>('archive-switch', {
      bubbles: true,
      composed: true,
      detail: archive
    }));
  }

  private handleCreateArchive(): void {
    this.showDiseaseSelector = true;
  }

  private handleDiseaseSelect(e: CustomEvent<Disease>): void {
    const disease = e.detail;
    this.showDiseaseSelector = false;
    if (disease) {
      this.dispatchEvent(new CustomEvent<Disease>('create-archive', {
        bubbles: true,
        composed: true,
        detail: disease
      }));
    }
  }

  private handleDiseaseSelectorClose(): void {
    this.showDiseaseSelector = false;
  }

  private handleOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) {
      this.showArchiveSwitcher = false;
    }
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  render() {
    // 无档案时显示空状态
    if (this.archives.length === 0) {
      return html`
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            <line x1="12" y1="11" x2="12" y2="17"></line>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
          <p>还没有档案，创建第一份档案开始使用</p>
          <button class="create-btn" @click="${this.handleCreateArchive}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            新建档案
          </button>
        </div>
        ${this.showDiseaseSelector ? html`
          <disease-selector
            @disease-select="${this.handleDiseaseSelect}"
            @close="${this.handleDiseaseSelectorClose}"
          ></disease-selector>
        ` : ''}
      `;
    }

    const activeArchive = this.currentArchive || this.archives[0];

    return html`
      <div class="archive-toolbar">
        ${this.archives.length > 1 ? html`
          <button class="archive-switch-btn" @click="${this.handleSwitchArchive}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <span class="archive-name-text">${activeArchive.diseaseName}</span>
          </button>
        ` : html`
          <span style="font-size: 14px; font-weight: 600; color: #333;">${activeArchive.diseaseName}</span>
        `}
        <span class="toolbar-spacer"></span>
        <span class="archive-count">${this.archives.length > 1 ? `共${this.archives.length}个档案` : ''}</span>
        <button class="new-archive-btn" @click="${this.handleCreateArchive}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          新建
        </button>
      </div>

      ${this.showArchiveSwitcher ? html`
        <div class="switcher-overlay" @click="${this.handleOverlayClick}">
          <div class="switcher-sheet">
            <div class="switcher-header">
              <span class="switcher-title">切换档案</span>
              <button class="close-btn" @click="${this.handleCloseSwitcher}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="archive-list">
              ${this.archives.map(archive => html`
                <div
                  class="archive-item ${archive.id === activeArchive.id ? 'active' : ''}"
                  @click="${() => this.handleSelectArchive(archive)}"
                >
                  <div class="archive-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div class="archive-item-info">
                    <div class="archive-item-name">${archive.diseaseName}</div>
                    <div class="archive-item-date">${this.formatDate(archive.createdAt)}</div>
                  </div>
                  ${archive.id === activeArchive.id ? html`
                    <span class="archive-item-active-badge">当前</span>
                  ` : ''}
                </div>
              `)}
            </div>
          </div>
        </div>
      ` : ''}

      ${this.showDiseaseSelector ? html`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleDiseaseSelectorClose}"
        ></disease-selector>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'archive-main-page': ArchiveMainPage;
  }
}
