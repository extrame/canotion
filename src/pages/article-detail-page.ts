import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { marked } from 'marked';
import type { Article } from '../types';

type ContentPart = {
  type: 'markdown';
  content: string;
} | {
  type: 'component';
  name: string;
  props: Record<string, unknown>;
  inner: string;
};

@customElement('article-detail-page')
export class ArticleDetailPage extends LitElement {
  @property({ type: Object })
  public article: Article | null = null;

  @state()
  private contentParts: ContentPart[] = [];

  @state()
  private activeComponent: { name: string; props: Record<string, unknown> } | null = null;

  static styles = css`
    :host {
      display: block;
    }
    .article-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 20px;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .article-title {
      color: white;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .article-meta {
      color: rgba(255,255,255,0.8);
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .article-tags {
      display: flex;
      gap: 8px;
    }
    .article-tag {
      padding: 4px 12px;
      background: rgba(255,255,255,0.2);
      border-radius: 12px;
      font-size: 12px;
    }
    .article-content {
      background: white;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      font-size: 16px;
      line-height: 1.8;
      color: #333;
    }
    .content-block {
      margin: 16px 0;
    }
    .content-block h1 {
      font-size: 28px;
      font-weight: 700;
      margin: 32px 0 16px;
      color: #1a1a1a;
      border-bottom: 2px solid #667eea;
      padding-bottom: 8px;
    }
    .content-block h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 28px 0 14px;
      color: #1a1a1a;
    }
    .content-block h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 24px 0 12px;
      color: #333;
    }
    .content-block p {
      margin: 16px 0;
    }
    .content-block ul, .content-block ol {
      margin: 16px 0;
      padding-left: 24px;
    }
    .content-block li {
      margin: 8px 0;
    }
    .content-block strong {
      color: #667eea;
    }
    .content-block em {
      color: #666;
    }
    .content-block blockquote {
      background: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 16px 20px;
      margin: 20px 0;
      border-radius: 0 8px 8px 0;
      color: #555;
    }
    .content-block code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      color: #e83e8c;
    }
    .content-block pre {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;
    }
    .content-block pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }
    .content-block table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .content-block th, .content-block td {
      border: 1px solid #e8e8e8;
      padding: 12px;
      text-align: left;
    }
    .content-block th {
      background: #f8f9fa;
      font-weight: 600;
    }
    .content-block a {
      color: #667eea;
      text-decoration: none;
    }
    .content-block a:hover {
      text-decoration: underline;
    }
    .component-embed {
      margin: 24px 0;
      padding: 24px;
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
      border-radius: 16px;
      border: 2px solid #667eea;
    }
    .component-embed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .component-embed-title {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .component-embed-btn {
      padding: 8px 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .component-embed-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    .component-embed-inner {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }
    .component-active-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .component-active-modal {
      background: white;
      border-radius: 16px;
      width: 100%;
      max-width: 800px;
      max-height: 80vh;
      overflow: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .component-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid #e8e8e8;
    }
    .component-modal-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .component-modal-close {
      width: 36px;
      height: 36px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .component-modal-close:hover {
      background: #e8e8e8;
    }
    .component-modal-body {
      padding: 24px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.parseArticleContent();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('article')) {
      this.parseArticleContent();
    }
  }

  private parseArticleContent(): void {
    if (!this.article) {
      this.contentParts = [];
      return;
    }

    const content = this.article.content;
    const componentRegex = /<web-component\s+name="([^"]+)"(?:\s+props='([^']*)')?>([\s\S]*?)<\/web-component>/gi;

    const parts: ContentPart[] = [];
    let lastIndex = 0;
    let match;

    while ((match = componentRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const markdownText = content.slice(lastIndex, match.index).trim();
        if (markdownText) {
          parts.push({ type: 'markdown', content: markdownText });
        }
      }

      const componentName = match[1];
      const componentProps = match[2] ? JSON.parse(match[2]) : {};
      const componentInner = match[3].trim();

      parts.push({
        type: 'component',
        name: componentName,
        props: componentProps,
        inner: componentInner
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      const markdownText = content.slice(lastIndex).trim();
      if (markdownText) {
        parts.push({ type: 'markdown', content: markdownText });
      }
    }

    this.contentParts = parts;
  }

  private handleBack(): void {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
  }

  private handleComponentClick(name: string, props: Record<string, unknown>): void {
    this.activeComponent = { name, props };
  }

  private handleCloseComponent(): void {
    this.activeComponent = null;
  }

  private handleOverlayClick(e: Event): void {
    if ((e.target as HTMLElement).classList.contains('component-active-overlay')) {
      this.handleCloseComponent();
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

  private getComponentTitle(name: string): string {
    const titles: Record<string, string> = {
      'stage-guide': '诊疗阶段向导',
      'bilirubin-chart': '胆红素监测表',
      'drainage-chart': '引流记录表'
    };
    return titles[name] || name;
  }

  private renderComponentEmbed(part: { type: 'component'; name: string; props: Record<string, unknown>; inner: string }) {
    return html`
      <div class="component-embed">
        <div class="component-embed-header">
          <div class="component-embed-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            交互组件: ${this.getComponentTitle(part.name)}
          </div>
          <button
            class="component-embed-btn"
            @click="${() => this.handleComponentClick(part.name, part.props)}"
          >
            使用组件 →
          </button>
        </div>
        ${part.inner ? html`
          <div class="component-embed-inner">${part.inner}</div>
        ` : ''}
      </div>
    `;
  }

  private renderActiveComponent() {
    if (!this.activeComponent) return null;

    const { name } = this.activeComponent;

    if (name === 'stage-guide') {
      return html`
        <stage-guide
          .archive="${null}"
          .disease="${null}"
        ></stage-guide>
      `;
    }

    return html`
      <div style="padding: 40px; text-align: center; color: #666;">
        <p>组件 "${name}" 加载中...</p>
      </div>
    `;
  }

  render() {
    if (!this.article) {
      return html`<div>加载中...</div>`;
    }

    return html`
      <div class="article-header">
        <button class="back-btn" @click="${this.handleBack}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          返回文章列表
        </button>
        <div class="article-title">${this.article.title}</div>
        <div class="article-meta">
          <span>📅 ${this.formatDate(this.article.createdAt)}</span>
          ${this.article.tags && this.article.tags.length > 0 ? html`
            <div class="article-tags">
              ${this.article.tags.map(tag => html`
                <span class="article-tag">${tag}</span>
              `)}
            </div>
          ` : ''}
        </div>
      </div>

      <div class="article-content">
        ${this.contentParts.map(part => part.type === 'markdown'
          ? html`<div class="content-block" .innerHTML="${marked.parse(part.content, { async: false }) as string}"></div>`
          : this.renderComponentEmbed(part)
        )}
      </div>

      ${this.activeComponent ? html`
        <div class="component-active-overlay" @click="${this.handleOverlayClick}">
          <div class="component-active-modal">
            <div class="component-modal-header">
              <span class="component-modal-title">${this.getComponentTitle(this.activeComponent!.name)}</span>
              <button class="component-modal-close" @click="${this.handleCloseComponent}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="component-modal-body">
              ${this.renderActiveComponent()}
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-detail-page': ArticleDetailPage;
  }
}