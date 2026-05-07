import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getPublishedArticles, getArticlesByTag, searchArticles } from '../supabase';
import type { Article } from '../types';

@customElement('article-list-page')
export class ArticleListPage extends LitElement {
  @state() private articles: Article[] = [];
  @state() private loading = true;
  @state() private error = '';
  @state() private selectedTag: string | null = null;
  @state() private searchKeyword = '';

  static styles = css`
    :host {
      display: block;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header h1 {
      color: white;
      font-size: 28px;
      margin-bottom: 8px;
    }
    .header p {
      color: rgba(255,255,255,0.8);
      font-size: 14px;
    }
    .search-section {
      display: flex;
      gap: 12px;
      margin-top: 20px;
    }
    .search-input {
      flex: 1;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
    }
    .search-btn {
      padding: 12px 24px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .search-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .articles-section {
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
    .tags-filter {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .tag-btn {
      padding: 6px 14px;
      border: 1px solid #e8e8e8;
      background: white;
      border-radius: 20px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;
      color: #666;
    }
    .tag-btn:hover {
      border-color: #667eea;
      color: #667eea;
    }
    .tag-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }
    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    .article-card {
      background: #fafafa;
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid transparent;
    }
    .article-card:hover {
      background: white;
      border-color: #667eea;
      box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
      transform: translateY(-2px);
    }
    .article-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .article-summary {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .article-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      color: #999;
    }
    .article-tags {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .article-tag {
      padding: 2px 8px;
      background: #f0f0f0;
      border-radius: 4px;
      font-size: 11px;
      color: #666;
    }
    .loading {
      text-align: center;
      padding: 60px 20px;
      color: #999;
    }
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #999;
    }
    .empty-icon {
      font-size: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }
    .error {
      text-align: center;
      padding: 40px 20px;
      color: #e74c3c;
    }
    .retry-btn {
      margin-top: 16px;
      padding: 10px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .write-btn {
      position: fixed;
      right: 24px;
      bottom: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .write-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 24px rgba(102, 126, 234, 0.5);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadArticles();
  }

  async loadArticles() {
    this.loading = true;
    this.error = '';
    try {
      this.articles = await getPublishedArticles();
    } catch (err) {
      this.error = '加载文章失败，请检查网络连接';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  async handleSearch() {
    if (!this.searchKeyword.trim()) {
      this.loadArticles();
      return;
    }
    this.loading = true;
    this.error = '';
    try {
      this.articles = await searchArticles(this.searchKeyword.trim());
      this.selectedTag = null;
    } catch (err) {
      this.error = '搜索失败，请重试';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  async handleTagClick(tag: string) {
    if (this.selectedTag === tag) {
      this.selectedTag = null;
      this.loadArticles();
      return;
    }
    this.selectedTag = tag;
    this.loading = true;
    this.error = '';
    try {
      this.articles = await getArticlesByTag(tag);
    } catch (err) {
      this.error = '加载文章失败';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  private handleArticleClick(article: Article): void {
    this.dispatchEvent(new CustomEvent<Article>('article-click', {
      bubbles: true,
      composed: true,
      detail: article
    }));
  }

  private handleWriteArticle(): void {
    this.dispatchEvent(new CustomEvent('write-article', {
      bubbles: true,
      composed: true
    }));
  }

  private getAllTags(): string[] {
    const tags = new Set<string>();
    this.articles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
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
    const tags = this.getAllTags();

    return html`
      <div class="header">
        <h1>📚 文章中心</h1>
        <p>阅读专业指南，评估治疗方案</p>
        <div class="search-section">
          <input
            type="text"
            class="search-input"
            placeholder="搜索文章标题或摘要..."
            .value="${this.searchKeyword}"
            @input="${(e: Event) => { this.searchKeyword = (e.target as HTMLInputElement).value; }}"
            @keydown="${(e: KeyboardEvent) => { if (e.key === 'Enter') this.handleSearch(); }}"
          />
          <button class="search-btn" @click="${this.handleSearch}">搜索</button>
        </div>
      </div>

      <div class="articles-section">
        <div class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          ${this.selectedTag ? `标签: ${this.selectedTag}` : '全部文章'}
        </div>

        ${tags.length > 0 ? html`
          <div class="tags-filter">
            <button
              class="tag-btn ${!this.selectedTag ? 'active' : ''}"
              @click="${() => { this.selectedTag = null; this.loadArticles(); }}"
            >
              全部
            </button>
            ${tags.map(tag => html`
              <button
                class="tag-btn ${this.selectedTag === tag ? 'active' : ''}"
                @click="${() => this.handleTagClick(tag)}"
              >
                ${tag}
              </button>
            `)}
          </div>
        ` : ''}

        ${this.loading ? html`
          <div class="loading">
            <div class="empty-icon">⏳</div>
            <p>加载中...</p>
          </div>
        ` : this.error ? html`
          <div class="error">
            <p>${this.error}</p>
            <button class="retry-btn" @click="${this.loadArticles}">重试</button>
          </div>
        ` : this.articles.length === 0 ? html`
          <div class="empty-state">
            <div class="empty-icon">📝</div>
            <p>暂无文章</p>
          </div>
        ` : html`
          <div class="articles-grid">
            ${this.articles.map(article => html`
              <div class="article-card" @click="${() => this.handleArticleClick(article)}">
                <div class="article-title">${article.title}</div>
                <div class="article-summary">${article.summary}</div>
                <div class="article-meta">
                  <span>📅 ${this.formatDate(article.published_at || article.createdAt)}</span>
                  ${article.tags && article.tags.length > 0 ? html`
                    <div class="article-tags">
                      ${article.tags.slice(0, 3).map(tag => html`
                        <span class="article-tag">${tag}</span>
                      `)}
                    </div>
                  ` : ''}
                </div>
              </div>
            `)}
          </div>
        `}
      </div>

      <button class="write-btn" @click="${this.handleWriteArticle}" title="写文章">
        ✏️
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-list-page': ArticleListPage;
  }
}
