import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createArticle, updateArticle } from '../supabase';
import type { Article } from '../types';

@customElement('article-editor-page')
export class ArticleEditorPage extends LitElement {
  @property({ type: Object })
  public article: Article | null = null;

  @state() private title: string = '';
  @state() private summary: string = '';
  @state() private content: string = '';
  @state() private author: string = '';
  @state() private tagsInput: string = '';
  @state() private isPublished: boolean = false;
  @state() private saving: boolean = false;
  @state() private error: string = '';

  static styles = css`
    :host {
      display: block;
    }
    .editor-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 24px 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .back-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .header-title {
      color: white;
      font-size: 24px;
      font-weight: 600;
    }
    .header-actions {
      display: flex;
      gap: 12px;
    }
    .save-btn {
      background: white;
      color: #667eea;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .save-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .save-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .publish-btn {
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .publish-btn:hover:not(:disabled) {
      background: rgba(255,255,255,0.3);
    }
    .publish-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .cancel-btn {
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .cancel-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .editor-content {
      background: white;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .form-group {
      margin-bottom: 24px;
    }
    .form-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .form-input:focus {
      border-color: #667eea;
    }
    .form-textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      resize: vertical;
      min-height: 80px;
      font-family: inherit;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .form-textarea:focus {
      border-color: #667eea;
    }
    .content-textarea {
      min-height: 400px;
      font-family: 'Courier New', monospace;
      line-height: 1.6;
    }
    .help-text {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }
    .tag {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      background: #f0f5ff;
      border: 1px solid #667eea;
      border-radius: 16px;
      font-size: 12px;
      color: #667eea;
    }
    .tag-remove {
      cursor: pointer;
      opacity: 0.6;
    }
    .tag-remove:hover {
      opacity: 1;
    }
    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: #f8f9fa;
      border-radius: 8px;
      cursor: pointer;
    }
    .checkbox-group input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    .checkbox-group label {
      cursor: pointer;
      font-size: 14px;
      color: #333;
    }
    .component-hint {
      background: #fff8e6;
      border: 1px solid #ffd591;
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;
    }
    .component-hint-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 8px;
    }
    .component-hint-code {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 12px;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 13px;
      overflow-x: auto;
    }
    .error-message {
      background: #fff2f0;
      border: 1px solid #ffccc7;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 20px;
      color: #cf1322;
      font-size: 14px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.article) {
      this.title = this.article.title;
      this.summary = this.article.summary || '';
      this.content = this.article.content;
      this.author = this.article.author || '';
      this.tagsInput = this.article.tags?.join(', ') || '';
      this.isPublished = this.article.is_published || false;
    }
  }

  private handleBack(): void {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
  }

  private validate(): boolean {
    if (!this.title.trim()) {
      this.error = '请输入文章标题';
      return false;
    }
    if (!this.content.trim()) {
      this.error = '请输入文章内容';
      return false;
    }
    this.error = '';
    return true;
  }

  private async saveArticle(publish: boolean = false): Promise<void> {
    if (!this.validate()) return;

    this.saving = true;
    this.error = '';

    try {
      const tags = this.tagsInput
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0);

      const articleData = {
        title: this.title.trim(),
        summary: this.summary.trim(),
        content: this.content.trim(),
        author: this.author.trim(),
        tags,
        is_published: publish || this.isPublished
      };

      let savedArticle: Article;

      if (this.article) {
        // 更新现有文章
        savedArticle = await updateArticle(this.article.id, articleData);
      } else {
        // 创建新文章
        savedArticle = await createArticle(articleData);
      }

      this.dispatchEvent(new CustomEvent<Article>('save-article', {
        bubbles: true,
        composed: true,
        detail: savedArticle
      }));
    } catch (err: any) {
      this.error = err.message || '保存失败，请重试';
      console.error('保存文章失败:', err);
    } finally {
      this.saving = false;
    }
  }

  private handleSave(): void {
    this.saveArticle(false);
  }

  private handlePublish(): void {
    this.saveArticle(true);
  }

  render() {
    const tags = this.tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    return html`
      <div class="editor-header">
        <div class="header-left">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            取消
          </button>
          <span class="header-title">${this.article ? '编辑文章' : '写文章'}</span>
        </div>
        <div class="header-actions">
          <button class="cancel-btn" @click="${this.handleBack}">取消</button>
          <button class="save-btn" @click="${this.handleSave}" ?disabled="${this.saving}">
            ${this.saving ? '⏳' : '💾'} 保存草稿
          </button>
          <button class="publish-btn" @click="${this.handlePublish}" ?disabled="${this.saving}">
            ${this.saving ? '⏳' : '🚀'} ${this.article?.is_published ? '更新发布' : '立即发布'}
          </button>
        </div>
      </div>

      <div class="editor-content">
        ${this.error ? html`
          <div class="error-message">${this.error}</div>
        ` : ''}

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">标题 *</label>
            <input
              type="text"
              class="form-input"
              placeholder="输入文章标题"
              .value="${this.title}"
              @input="${(e: Event) => { this.title = (e.target as HTMLInputElement).value; }}"
            />
          </div>

          <div class="form-group">
            <label class="form-label">作者</label>
            <input
              type="text"
              class="form-input"
              placeholder="输入作者名称"
              .value="${this.author}"
              @input="${(e: Event) => { this.author = (e.target as HTMLInputElement).value; }}"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">摘要</label>
          <textarea
            class="form-textarea"
            placeholder="输入文章摘要（可选，用于列表展示）"
            .value="${this.summary}"
            @input="${(e: Event) => { this.summary = (e.target as HTMLTextAreaElement).value; }}"
          ></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">标签（用逗号分隔）</label>
          <input
            type="text"
            class="form-input"
            placeholder="如：指南, 治疗, 手术"
            .value="${this.tagsInput}"
            @input="${(e: Event) => { this.tagsInput = (e.target as HTMLInputElement).value; }}"
          />
          ${tags.length > 0 ? html`
            <div class="tags-container">
              ${tags.map(tag => html`
                <span class="tag">
                  ${tag}
                  <span class="tag-remove" @click="${() => {
                    this.tagsInput = this.tagsInput
                      .split(',')
                      .map(t => t.trim())
                      .filter(t => t !== tag)
                      .join(', ');
                  }}">×</span>
                </span>
              `)}
            </div>
          ` : ''}
        </div>

        <div class="form-group">
          <label class="form-label">文章内容（支持 Markdown）*</label>
          <textarea
            class="form-textarea content-textarea"
            placeholder="输入文章内容..."
            .value="${this.content}"
            @input="${(e: Event) => { this.content = (e.target as HTMLTextAreaElement).value; }}"
          ></textarea>
          <div class="help-text">支持标准 Markdown 语法</div>
        </div>

        <div class="form-group">
          <div class="checkbox-group" @click="${() => { this.isPublished = !this.isPublished; }}">
            <input
              type="checkbox"
              .checked="${this.isPublished}"
              @change="${(e: Event) => { this.isPublished = (e.target as HTMLInputElement).checked; }}"
            />
            <label>发布文章（勾选后文章将对所有用户可见）</label>
          </div>
        </div>

        <div class="component-hint">
          <div class="component-hint-title">💡 嵌入交互组件</div>
          <div class="component-hint-code">
            &lt;web-component name="stage-guide"&gt;<br>
            &nbsp;&nbsp;点击此处使用诊疗阶段向导<br>
            &lt;/web-component&gt;
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-editor-page': ArticleEditorPage;
  }
}
