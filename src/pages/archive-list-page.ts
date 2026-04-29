import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Disease } from '../types';

@customElement('archive-list-page')
export class ArchiveListPage extends LitElement {
  @property({ type: Array })
  public archives: Archive[] = [];

  @state()
  private showSelector = false;

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

  render() {
    return html`
      <div class="header">
        <h1>🩺 癌症患者周期向导</h1>
        <p>根据公开资料，提供诊疗阶段提示</p>
        <button class="new-archive-btn" @click="${this.handleCreateArchive}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          新建档案
        </button>
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'archive-list-page': ArchiveListPage;
  }
}