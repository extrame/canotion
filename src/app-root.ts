import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { Archive, Disease, BilirubinRecord, StageSelectResult, Article } from './types';
import './components/disease-selector';
import './components/stage-selector';
import './components/stage-guide';
import './components/archive-card';
import './pages/archive-list-page';
import './pages/archive-detail-page';
import './pages/nutrition-detail-page';
import './pages/pathology-detail-page';
import './pages/article-list-page';
import './pages/article-detail-page';
import './pages/article-editor-page';
import { getArticleById } from './supabase';

type AppMode = 'archive' | 'article';
type CurrentPage = 'list' | 'detail' | 'editor';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state()
  private archives: Archive[] = [];



  @state()
  private mode: AppMode = 'archive';

  @state()
  private archivePage: CurrentPage = 'list';

  @state()
  private articlePage: CurrentPage = 'list';

  @state()
  private currentArchive: Archive | null = null;

  @state()
  private currentArticle: Article | null = null;

  @state()
  private currentDetailPage: 'nutrition' | 'pathology' | null = null;

  @state()
  private showDiseaseSelector = false;

  @state()
  private showStageSelector = false;

  private diseases: Disease[] = [
    {
      id: 'hilar-cholangiocarcinoma',
      name: '肝门胆管癌',
      desc: '发生在肝门部的胆管癌',
      icon: '🫀',
      diagnosisKeyItem: 'pathology-biopsy',
      examItems: [
        {
          id: 'blood-test',
          name: '血液检查',
          desc: '肝功能、肿瘤标志物CA19-9等',
          category: 'blood'
        },
        {
          id: 'abdominal-ultrasound',
          name: '腹部超声',
          desc: '初步评估肝胆结构',
          category: 'imaging'
        },
        {
          id: 'ct-mri',
          name: 'CT/MRI检查',
          desc: '详细评估肿瘤位置和范围',
          category: 'imaging'
        },
        {
          id: 'mrcp',
          name: 'MRCP',
          desc: '磁共振胰胆管成像，显示胆道梗阻情况',
          category: 'imaging'
        },
        {
          id: 'ercp',
          name: 'ERCP',
          desc: '逆行胰胆管造影，可同时进行胆道引流',
          category: 'imaging'
        },
        {
          id: 'pathology-biopsy',
          name: '病理活检',
          desc: '获取组织样本进行病理确诊',
          category: 'pathology'
        }
      ],
      treatmentItems: [
        {
          id: 'picc',
          name: 'PICC置管',
          desc: '经外周静脉穿刺中心静脉置管，保护静脉方便化疗输注',
          category: 'preparation'
        },
        {
          id: 'surgery',
          name: '手术治疗',
          desc: '肝门胆管癌根治术',
          category: 'surgery'
        },
        {
          id: 'chemotherapy',
          name: '化疗',
          desc: '辅助化疗或姑息化疗',
          category: 'chemo'
        },
        {
          id: 'radiation',
          name: '放疗',
          desc: '辅助放疗或姑息放疗',
          category: 'radiation'
        },
        {
          id: 'targeted-immune',
          name: '靶向/免疫治疗',
          desc: '根据基因检测结果选择靶向药物或免疫治疗',
          category: 'targeted'
        },
        {
          id: 'biliary-drainage',
          name: '胆道引流',
          desc: 'PTCD或支架置入缓解黄疸',
          category: 'drainage'
        }
      ]
    }
  ];

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f5f7fa;
    }
    .mode-switch {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      background: white;
      border-radius: 30px;
      padding: 4px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      z-index: 1000;
    }
    .mode-btn {
      padding: 10px 28px;
      border: none;
      background: transparent;
      border-radius: 26px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      color: #666;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .mode-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .mode-btn:not(.active):hover {
      background: #f5f5f5;
    }
    .main-content {
      padding-top: 80px;
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 40px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.archives = this.loadArchives();
    this.setupNavigation();
  }

  private loadArchives(): Archive[] {
    const saved = localStorage.getItem('canotion-archives');
    return saved ? JSON.parse(saved) : [];
  }

  private saveArchives(): void {
    localStorage.setItem('canotion-archives', JSON.stringify(this.archives));
  }

  private setupNavigation(): void {
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.hash);
    });
    this.handleRoute(window.location.hash || '#/');
  }

  private handleRoute(hash: string): void {
    if (hash.startsWith('#/article/')) {
      const articleId = hash.replace('#/article/', '');
      this.viewArticle(articleId);
    } else if (hash.startsWith('#/archive/')) {
      const archiveId = hash.replace('#/archive/', '');
      this.viewArchive(archiveId);
    } else if (hash === '#/article-edit') {
      this.showArticleEditor();
    } else if (hash === '#/nutrition-detail') {
      this.showNutritionDetail();
    } else if (hash === '#/pathology-detail') {
      this.showPathologyDetail();
    } else {
      this.showList();
    }
  }

  private showList(): void {
    if (this.mode === 'archive') {
      this.archivePage = 'list';
      this.currentArchive = null;
    } else {
      this.articlePage = 'list';
      this.currentArticle = null;
    }
  }

  private showNutritionDetail(): void {
    this.archivePage = 'detail';
    this.currentDetailPage = 'nutrition';
    this.currentArchive = null;
  }

  private showPathologyDetail(): void {
    this.archivePage = 'detail';
    this.currentDetailPage = 'pathology';
    this.currentArchive = null;
  }

  private viewArchive(archiveId: string): void {
    const archive = this.archives.find(a => a.id === archiveId);
    if (archive) {
      this.mode = 'archive';
      this.currentArchive = archive;
      this.archivePage = 'detail';
    } else {
      this.showList();
    }
  }

  private async viewArticle(articleId: string): Promise<void> {
    const article = await getArticleById(articleId);
    if (article) {
      this.mode = 'article';
      this.currentArticle = article;
      this.articlePage = 'detail';
    } else {
      this.showList();
    }
  }

  private showArticleEditor(article?: Article): void {
    this.currentArticle = article || null;
    this.articlePage = 'editor';
  }

  private navigateTo(path: string): void {
    window.location.hash = path;
  }

  private switchMode(newMode: AppMode): void {
    this.mode = newMode;
    if (newMode === 'archive') {
      this.archivePage = 'list';
      this.currentArchive = null;
    } else {
      this.articlePage = 'list';
      this.currentArticle = null;
    }
    this.navigateTo('#/');
  }

  private createArchive(disease: Disease): void {
    const archive: Archive = {
      id: Date.now().toString(),
      diseaseType: disease.id,
      diseaseName: disease.name,
      createdAt: new Date().toISOString(),
      completedExamIds: [],
      completedTreatmentIds: [],
      currentStage: 'examination',
      bilirubinRecords: []
    };
    this.archives = [archive, ...this.archives];
    this.saveArchives();
    this.navigateTo(`#/archive/${archive.id}`);
  }

  private updateArchiveStage(result: StageSelectResult): void {
    if (!this.currentArchive) return;
    const archive = this.archives.find(a => a.id === this.currentArchive!.id);
    if (archive) {
      archive.completedExamIds = result.completedExamIds;
      archive.completedTreatmentIds = result.completedTreatmentIds;
      archive.currentStage = result.currentStage;
      this.saveArchives();
      this.currentArchive = { ...archive };
      this.archives = [...this.archives];
    }
  }

  private addBilirubinRecord(record: BilirubinRecord): void {
    if (!this.currentArchive) return;
    const archive = this.archives.find(a => a.id === this.currentArchive!.id);
    if (archive) {
      if (!archive.bilirubinRecords) {
        archive.bilirubinRecords = [];
      }
      const exists = archive.bilirubinRecords.some(r => r.id === record.id);
      if (exists) return;
      archive.bilirubinRecords = [record, ...archive.bilirubinRecords];
      this.saveArchives();
      this.currentArchive = { ...archive };
      this.archives = [...this.archives];
    }
  }

  private deleteArchive(archiveId: string): void {
    this.archives = this.archives.filter(a => a.id !== archiveId);
    this.saveArchives();
    this.navigateTo('#/');
  }

  private handleArticleSaved(article: Article): void {
    // 文章已保存到数据库，直接跳转到文章详情页
    this.currentArticle = article;
    this.navigateTo(`#/article/${article.id}`);
  }

  private handleCreateArchive(): void {
    this.showDiseaseSelector = true;
  }

  private handleDiseaseSelect(e: CustomEvent<Disease>): void {
    const disease = e.detail;
    this.showDiseaseSelector = false;
    if (disease) {
      this.createArchive(disease);
    }
  }

  private handleDiseaseSelectorClose(): void {
    this.showDiseaseSelector = false;
  }

  private handleDeleteArchive(): void {
    if (this.currentArchive) {
      if (confirm('确定要删除这个档案吗？此操作无法撤销。')) {
        this.deleteArchive(this.currentArchive.id);
      }
    }
  }

  private handleBack(): void {
    this.navigateTo('#/');
  }

  private handleEditStage(): void {
    this.showStageSelector = true;
  }

  private handleStageSelect(e: CustomEvent<StageSelectResult>): void {
    this.showStageSelector = false;
    if (e.detail) {
      this.updateArchiveStage(e.detail);
    }
  }

  private handleStageSelectorClose(): void {
    this.showStageSelector = false;
  }

  private handleAddBilirubin(e: CustomEvent<BilirubinRecord>): void {
    this.addBilirubinRecord(e.detail);
  }

  private handleArticleClick(e: CustomEvent<Article>): void {
    this.navigateTo(`#/article/${e.detail.id}`);
  }

  private handleWriteArticle(): void {
    this.navigateTo('#/article-edit');
  }

  private handleSaveArticle(e: CustomEvent<Article>): void {
    this.handleArticleSaved(e.detail);
  }

  private handleArticleEditorBack(): void {
    this.navigateTo('#/');
  }

  private handleComponentClick(e: CustomEvent<{ name: string; props: Record<string, unknown> }>): void {
    if (e.detail.name === 'stage-guide') {
      this.navigateTo('#/');
    }
  }

  private getDiseaseForArchive(): Disease | null {
    if (!this.currentArchive) return null;
    return this.diseases.find(d => d.id === this.currentArchive!.diseaseType) || null;
  }

  render() {
    const disease = this.getDiseaseForArchive();

    return html`
      <div class="mode-switch">
        <button
          class="mode-btn ${this.mode === 'archive' ? 'active' : ''}"
          @click="${() => this.switchMode('archive')}"
        >
          🗂️ 我的档案
        </button>
        <button
          class="mode-btn ${this.mode === 'article' ? 'active' : ''}"
          @click="${() => this.switchMode('article')}"
        >
          📚 文章
        </button>
      </div>

      <div class="main-content">
        ${this.mode === 'archive' ? html`
          ${this.archivePage === 'list' ? html`
            <archive-list-page
              .archives="${this.archives}"
              @create-archive="${this.handleCreateArchive}"
            ></archive-list-page>
          ` : ''}
          ${this.archivePage === 'detail' && this.currentArchive && disease ? html`
            <archive-detail-page
              .archive="${this.currentArchive}"
              .disease="${disease}"
              @delete-archive="${this.handleDeleteArchive}"
              @back="${this.handleBack}"
              @edit-stage="${this.handleEditStage}"
              @add-bilirubin="${this.handleAddBilirubin}"
            ></archive-detail-page>
          ` : ''}
          ${this.archivePage === 'detail' && this.currentDetailPage === 'nutrition' ? html`
            <nutrition-detail-page></nutrition-detail-page>
          ` : ''}
          ${this.archivePage === 'detail' && this.currentDetailPage === 'pathology' ? html`
            <pathology-detail-page></pathology-detail-page>
          ` : ''}
        ` : html`
          ${this.articlePage === 'list' ? html`
            <article-list-page
              @article-click="${this.handleArticleClick}"
              @write-article="${this.handleWriteArticle}"
            ></article-list-page>
          ` : ''}
          ${this.articlePage === 'detail' && this.currentArticle ? html`
            <article-detail-page
              .article="${this.currentArticle}"
              @back="${this.handleBack}"
              @component-click="${this.handleComponentClick}"
            ></article-detail-page>
          ` : ''}
          ${this.articlePage === 'editor' ? html`
            <article-editor-page
              .article="${this.currentArticle}"
              @save-article="${this.handleSaveArticle}"
              @back="${this.handleArticleEditorBack}"
            ></article-editor-page>
          ` : ''}
        `}
      </div>

      ${this.showDiseaseSelector ? html`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleDiseaseSelectorClose}"
        ></disease-selector>
      ` : ''}

      ${this.showStageSelector && disease && this.currentArchive ? html`
        <stage-selector
          .disease="${disease}"
          .completedExamIds="${this.currentArchive.completedExamIds || []}"
          .completedTreatmentIds="${this.currentArchive.completedTreatmentIds || []}"
          @stage-select="${this.handleStageSelect}"
          @close="${this.handleStageSelectorClose}"
        ></stage-selector>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}