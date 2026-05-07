import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getAllArticles, getArticlesByTag, searchArticles } from '../services/article-loader';
import { getCurrentUser, canEditArticles, signOut, onAuthStateChange, type User } from '../services/auth-service';
import type { Article } from '../types';

@customElement('article-list-page')
export class ArticleListPage extends LitElement {
  @state() private articles: Article[] = [];
  @state() private loading = true;
  @state() private error = '';
  @state() private selectedTag: string | null = null;
  @state() private searchKeyword = '';
  @state() private user: User | null = null;
  @state() private canEdit = false;
  @state() private showLoginModal = false;
  @state() private loginEmail = '';
  @state() private loginPassword = '';
  @state() private loginError = '';
  @state() private loginLoading = false;

  private authUnsubscribe?: () => void;

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
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
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
    .user-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .user-info {
      color: white;
      font-size: 14px;
      text-align: right;
    }
    .user-role {
      font-size: 12px;
      color: rgba(255,255,255,0.7);
    }
    .login-btn, .logout-btn {
      padding: 8px 16px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .login-btn:hover, .logout-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .search-section {
      display: flex;
      gap: 12px;
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
    .write-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .modal-overlay {
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
    .modal {
      background: white;
      border-radius: 16px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .modal-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #333;
    }
    .form-group {
      margin-bottom: 16px;
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
      box-sizing: border-box;
    }
    .form-input:focus {
      border-color: #667eea;
    }
    .modal-error {
      background: #fff2f0;
      border: 1px solid #ffccc7;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
      color: #cf1322;
      font-size: 14px;
    }
    .modal-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
    .modal-btn {
      flex: 1;
      padding: 12px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .modal-btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
    }
    .modal-btn-primary:hover:not(:disabled) {
      opacity: 0.9;
    }
    .modal-btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .modal-btn-secondary {
      background: #f5f5f5;
      color: #666;
      border: none;
    }
    .modal-btn-secondary:hover {
      background: #e8e8e8;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    this.loadArticles();
    this.checkUserPermissions();
    
    // 监听登录状态变化
    const { data } = onAuthStateChange((user) => {
      this.user = user;
      this.checkUserPermissions();
    });
    this.authUnsubscribe = data.subscription.unsubscribe;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.authUnsubscribe?.();
  }

  async checkUserPermissions() {
    const user = await getCurrentUser();
    this.user = user;
    this.canEdit = await canEditArticles();
  }

  async loadArticles() {
    this.loading = true;
    this.error = '';
    try {
      // 从本地加载文章列表
      this.articles = getAllArticles();
    } catch (err) {
      this.error = '加载文章失败';
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
    if (!this.canEdit) {
      this.showLoginModal = true;
      return;
    }
    this.dispatchEvent(new CustomEvent('write-article', {
      bubbles: true,
      composed: true
    }));
  }

  private async handleLogin(): Promise<void> {
    if (!this.loginEmail.trim() || !this.loginPassword.trim()) {
      this.loginError = '请输入邮箱和密码';
      return;
    }

    this.loginLoading = true;
    this.loginError = '';

    try {
      const { signInWithEmail } = await import('../services/auth-service');
      await signInWithEmail(this.loginEmail.trim(), this.loginPassword.trim());
      
      // 检查权限
      const canEdit = await canEditArticles();
      if (!canEdit) {
        this.loginError = '您没有编辑文章的权限';
        await signOut();
        this.loginLoading = false;
        return;
      }

      this.showLoginModal = false;
      this.loginEmail = '';
      this.loginPassword = '';
      await this.checkUserPermissions();
    } catch (err: any) {
      this.loginError = err.message || '登录失败';
    } finally {
      this.loginLoading = false;
    }
  }

  private async handleLogout(): Promise<void> {
    try {
      const { signOut } = await import('../services/auth-service');
      await signOut();
      this.user = null;
      this.canEdit = false;
    } catch (err) {
      console.error('退出失败:', err);
    }
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

  private getRoleLabel(role: string): string {
    const labels: Record<string, string> = {
      admin: '管理员',
      editor: '编辑',
      user: '用户'
    };
    return labels[role] || role;
  }

  render() {
    const tags = this.getAllTags();

    return html`
      <div class="header">
        <div class="header-top">
          <div>
            <h1>📚 文章中心</h1>
            <p>阅读专业指南，评估治疗方案</p>
          </div>
          <div class="user-section">
            ${this.user ? html`
              <div class="user-info">
                <div>${this.user.email}</div>
                <div class="user-role">${this.getRoleLabel(this.user.role)}</div>
              </div>
              <button class="logout-btn" @click="${this.handleLogout}">退出</button>
            ` : html`
              <button class="login-btn" @click="${() => this.showLoginModal = true}">登录</button>
            `}
          </div>
        </div>
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

      <button 
        class="write-btn" 
        @click="${this.handleWriteArticle}" 
        title="${this.canEdit ? '写文章' : '需要登录才能写文章'}"
        ?disabled="${!this.canEdit && !this.user}"
      >
        ✏️
      </button>

      ${this.showLoginModal ? html`
        <div class="modal-overlay" @click="${(e: Event) => {
          if (e.target === e.currentTarget) this.showLoginModal = false;
        }}">
          <div class="modal">
            <div class="modal-title">🔐 管理员登录</div>
            
            ${this.loginError ? html`
              <div class="modal-error">${this.loginError}</div>
            ` : ''}
            
            <div class="form-group">
              <label class="form-label">邮箱</label>
              <input
                type="email"
                class="form-input"
                placeholder="输入邮箱"
                .value="${this.loginEmail}"
                @input="${(e: Event) => { this.loginEmail = (e.target as HTMLInputElement).value; }}"
                @keydown="${(e: KeyboardEvent) => { if (e.key === 'Enter') this.handleLogin(); }}"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">密码</label>
              <input
                type="password"
                class="form-input"
                placeholder="输入密码"
                .value="${this.loginPassword}"
                @input="${(e: Event) => { this.loginPassword = (e.target as HTMLInputElement).value; }}"
                @keydown="${(e: KeyboardEvent) => { if (e.key === 'Enter') this.handleLogin(); }}"
              />
            </div>
            
            <div class="modal-actions">
              <button 
                class="modal-btn modal-btn-secondary" 
                @click="${() => this.showLoginModal = false}"
              >
                取消
              </button>
              <button 
                class="modal-btn modal-btn-primary" 
                @click="${this.handleLogin}"
                ?disabled="${this.loginLoading}"
              >
                ${this.loginLoading ? '登录中...' : '登录'}
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
    'article-list-page': ArticleListPage;
  }
}
