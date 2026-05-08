import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive, Article, EmbeddedComponent } from '../types';

interface MatchResult {
  field: string;
  label: string;
  status: 'match' | 'partial' | 'mismatch' | 'info';
  message: string;
  weight: number;
}

interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  title: string;
  content: string;
  action?: string;
}

@customElement('article-archive-matcher')
export class ArticleArchiveMatcher extends LitElement {
  @property({ type: Object }) article!: Article;
  @property({ type: Object }) componentConfig!: EmbeddedComponent;
  @property({ type: Array }) archives: Archive[] = [];
  
  @state() private selectedArchiveId: string = '';
  @state() private matchResults: MatchResult[] = [];
  @state() private recommendations: Recommendation[] = [];
  @state() private overallMatch: number = 0;

  static styles = css`
    :host {
      display: block;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
    }
    .header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .archive-selector {
      margin-bottom: 16px;
    }
    .selector-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }
    .archive-chips {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .archive-chip {
      padding: 8px 16px;
      background: #f5f5f5;
      border: 2px solid transparent;
      border-radius: 20px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .archive-chip:hover {
      background: #e8e8e8;
    }
    .archive-chip.active {
      background: #f0f5ff;
      border-color: #667eea;
      color: #667eea;
    }
    .match-overview {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
      color: white;
    }
    .match-score {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .score-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      font-weight: 700;
    }
    .score-label {
      font-size: 14px;
      opacity: 0.9;
    }
    .score-value {
      font-size: 32px;
      font-weight: 700;
    }
    .match-details {
      margin-top: 16px;
    }
    .match-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .match-item:last-child {
      border-bottom: none;
    }
    .match-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .match-icon.match { color: #52c41a; }
    .match-icon.partial { color: #faad14; }
    .match-icon.mismatch { color: #ff4d4f; }
    .match-text {
      flex: 1;
      font-size: 14px;
    }
    .recommendations {
      margin-top: 16px;
    }
    .rec-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .rec-card {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 12px;
      border-left: 4px solid #667eea;
    }
    .rec-card.high {
      border-left-color: #ff4d4f;
      background: #fff2f0;
    }
    .rec-card.medium {
      border-left-color: #faad14;
      background: #fffbe6;
    }
    .rec-card.low {
      border-left-color: #52c41a;
      background: #f6ffed;
    }
    .rec-card.gene {
      border-left-color: #722ed1;
      background: #f9f0ff;
    }
    .rec-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .rec-priority {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 600;
    }
    .rec-priority.high {
      background: #ffccc7;
      color: #cf1322;
    }
    .rec-priority.medium {
      background: #ffe58f;
      color: #d48806;
    }
    .rec-priority.low {
      background: #b7eb8f;
      color: #389e0d;
    }
    .rec-priority.gene {
      background: #d3adf7;
      color: #722ed1;
    }
    .rec-card-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .rec-content {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .rec-action {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .rec-action:hover {
      opacity: 0.9;
    }
    .no-archive {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }
    .no-archive-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }
    .create-archive-btn {
      margin-top: 16px;
      padding: 10px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.archives.length > 0) {
      this.selectedArchiveId = this.archives[0].id;
      this.calculateMatch();
    }
  }

  private get selectedArchive(): Archive | undefined {
    return this.archives.find(a => a.id === this.selectedArchiveId);
  }

  private calculateMatch() {
    const archive = this.selectedArchive;
    if (!archive) return;

    const results: MatchResult[] = [];
    let totalWeight = 0;
    let matchedWeight = 0;

    const stageMatch = this.matchStage(archive);
    results.push(stageMatch);
    totalWeight += stageMatch.weight;
    if (stageMatch.status === 'match') matchedWeight += stageMatch.weight;

    const bilirubinMatch = this.matchBilirubin(archive);
    results.push(bilirubinMatch);
    totalWeight += bilirubinMatch.weight;
    if (bilirubinMatch.status === 'match' || bilirubinMatch.status === 'info') {
      matchedWeight += bilirubinMatch.weight;
    }

    const treatmentMatch = this.matchTreatmentStage(archive);
    results.push(treatmentMatch);
    totalWeight += treatmentMatch.weight;
    if (treatmentMatch.status === 'match') matchedWeight += treatmentMatch.weight;

    const examMatch = this.matchExaminations(archive);
    results.push(examMatch);
    totalWeight += examMatch.weight;
    if (examMatch.status === 'match') matchedWeight += examMatch.weight;

    const geneMatch = this.matchGenes(archive);
    results.push(geneMatch);
    totalWeight += geneMatch.weight;
    if (geneMatch.status === 'match' || geneMatch.status === 'partial') {
      matchedWeight += geneMatch.weight;
    }

    this.matchResults = results;
    this.overallMatch = Math.round((matchedWeight / totalWeight) * 100);
    this.generateRecommendations(archive, results);
  }

  private matchStage(archive: Archive): MatchResult {
    // 根据文章标题和内容判断适用分期
    const isSurgicalArticle = this.article.title.includes('手术') || 
                               this.article.content.includes('根治性切除');
    const isChemoArticle = this.article.title.includes('化疗') || 
                            this.article.content.includes('系统治疗');
    
    if (isSurgicalArticle && archive.currentStage === 'treatment') {
      return {
        field: 'stage',
        label: '治疗阶段',
        status: 'match',
        message: '您当前处于治疗阶段，本文手术方案适用',
        weight: 30
      };
    }
    
    if (isChemoArticle && archive.currentStage === 'treatment') {
      return {
        field: 'stage',
        label: '治疗阶段',
        status: 'match',
        message: '您当前处于治疗阶段，本文化疗方案适用',
        weight: 30
      };
    }

    return {
      field: 'stage',
      label: '治疗阶段',
      status: 'info',
      message: `当前阶段: ${archive.currentStage === 'examination' ? '检查阶段' : '治疗阶段'}`,
      weight: 30
    };
  }

  private matchBilirubin(archive: Archive): MatchResult {
    const records = archive.bilirubinRecords || [];
    if (records.length === 0) {
      return {
        field: 'bilirubin',
        label: '胆红素水平',
        status: 'info',
        message: '暂无胆红素记录',
        weight: 25
      };
    }

    const latest = records[records.length - 1];
    const total = latest.total;

    if (total > 200) {
      return {
        field: 'bilirubin',
        label: '胆红素水平',
        status: 'mismatch',
        message: `总胆红素 ${total} μmol/L，极高危，需先引流`,
        weight: 25
      };
    } else if (total > 85) {
      return {
        field: 'bilirubin',
        label: '胆红素水平',
        status: 'partial',
        message: `总胆红素 ${total} μmol/L，建议术前引流`,
        weight: 25
      };
    } else if (total > 51) {
      return {
        field: 'bilirubin',
        label: '胆红素水平',
        status: 'match',
        message: `总胆红素 ${total} μmol/L，接近手术标准`,
        weight: 25
      };
    } else {
      return {
        field: 'bilirubin',
        label: '胆红素水平',
        status: 'match',
        message: `总胆红素 ${total} μmol/L，符合手术条件`,
        weight: 25
      };
    }
  }

  private matchTreatmentStage(archive: Archive): MatchResult {
    const completedTreatments = archive.stageSelectResults?.flatMap(
      r => r.completedTreatments || []
    ) || [];

    const hasDrainage = completedTreatments.includes('biliary-drainage');
    const hasSurgery = completedTreatments.includes('surgery');

    if (hasSurgery) {
      return {
        field: 'treatment',
        label: '治疗状态',
        status: 'match',
        message: '已完成手术，可查看术后辅助治疗',
        weight: 25
      };
    } else if (hasDrainage) {
      return {
        field: 'treatment',
        label: '治疗状态',
        status: 'match',
        message: '已完成胆道引流，可考虑手术评估',
        weight: 25
      };
    } else {
      return {
        field: 'treatment',
        label: '治疗状态',
        status: 'info',
        message: '尚未开始主要治疗',
        weight: 25
      };
    }
  }

  private matchExaminations(archive: Archive): MatchResult {
    const completedExams = archive.stageSelectResults?.flatMap(
      r => r.completedExaminations || []
    ) || [];

    const requiredExams = ['ct', 'mri', 'mrcp'];
    const hasRequired = requiredExams.some(e => completedExams.includes(e));

    if (hasRequired) {
      return {
        field: 'examination',
        label: '检查完成度',
        status: 'match',
        message: `已完成 ${completedExams.length} 项检查`,
        weight: 20
      };
    } else {
      return {
        field: 'examination',
        label: '检查完成度',
        status: 'partial',
        message: '建议完成CT/MRI/MRCP检查',
        weight: 20
      };
    }
  }

  private matchGenes(archive: Archive): MatchResult {
    const geneTestResults = archive.pathologyReport?.geneTestResults || [];
    
    if (geneTestResults.length === 0) {
      return {
        field: 'gene',
        label: '基因检测',
        status: 'info',
        message: '暂无基因检测记录，建议进行分子分型检测',
        weight: 25
      };
    }

    const targetGenes = ['HER2', 'FGFR2', 'IDH1', 'BRAF', 'NTRK', 'MSI-H', 'KRAS', 'RET', 'ERBB2'];
    const positiveGenes = geneTestResults
      .filter(g => targetGenes.some(t => g.geneName.toUpperCase().includes(t.toUpperCase())) && g.result === '阳性')
      .map(g => g.geneName);

    if (positiveGenes.length > 0) {
      return {
        field: 'gene',
        label: '基因检测',
        status: 'match',
        message: `检测到可靶向基因突变: ${positiveGenes.join(', ')}`,
        weight: 25
      };
    }

    const allGenes = geneTestResults.map(g => g.geneName).join(', ');
    return {
      field: 'gene',
      label: '基因检测',
      status: 'info',
      message: `已检测基因: ${allGenes}，未发现本文涉及的可靶向突变`,
      weight: 25
    };
  }

  private generateRecommendations(archive: Archive, results: MatchResult[]) {
    const recommendations: Recommendation[] = [];

    const bilirubinResult = results.find(r => r.field === 'bilirubin');
    if (bilirubinResult?.status === 'mismatch') {
      recommendations.push({
        priority: 'high',
        title: '胆红素过高，需先行引流',
        content: '您的胆红素水平超过200μmol/L，属于极高危。根据指南推荐，应先行胆道引流（PTBD或ENBD），将胆红素降至51μmol/L以下再考虑手术。',
        action: '查看引流方案'
      });
    } else if (bilirubinResult?.status === 'partial') {
      recommendations.push({
        priority: 'medium',
        title: '建议术前胆道引流',
        content: '您的胆红素水平在85-200μmol/L之间，建议行术前胆道引流，降低手术风险。',
        action: '了解引流方式'
      });
    }

    const examResult = results.find(r => r.field === 'examination');
    if (examResult?.status === 'partial') {
      recommendations.push({
        priority: 'medium',
        title: '完善术前检查',
        content: '建议完成增强CT、MRI+MRCP检查，以准确评估肿瘤分期和可切除性。',
        action: '查看检查清单'
      });
    }

    const geneResult = results.find(r => r.field === 'gene');
    if (geneResult?.status === 'info' && geneResult.message.includes('暂无')) {
      recommendations.push({
        priority: 'gene',
        title: '建议进行基因检测',
        content: '基因检测可帮助制定精准治疗方案，特别是HER2、FGFR2、IDH1等靶点的检测。',
        action: '了解靶向治疗'
      });
    }

    if (archive.currentStage === 'examination') {
      recommendations.push({
        priority: 'low',
        title: '当前处于检查阶段',
        content: '建议完成所有必要检查后，由MDT团队评估最佳治疗方案。',
        action: '查看检查阶段指南'
      });
    }

    this.recommendations = recommendations;
  }

  private handleArchiveSelect(archiveId: string) {
    this.selectedArchiveId = archiveId;
    this.calculateMatch();
  }

  private handleAction(action: string) {
    this.dispatchEvent(new CustomEvent('action-click', {
      bubbles: true,
      composed: true,
      detail: { action, articleId: this.article.id }
    }));
  }

  render() {
    if (this.archives.length === 0) {
      return html`
        <div class="no-archive">
          <div class="no-archive-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>暂无患者档案</div>
          <div style="font-size: 13px; margin-top: 8px;">创建档案后可查看本文与您的匹配度</div>
          <button class="create-archive-btn" @click="${() => this.handleAction('create-archive')}">
            创建档案
          </button>
        </div>
      `;
    }

    return html`
      <div class="header">
        <span class="header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1890ff" stroke-width="2">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
        </span>
        <span class="header-title">本文与您的档案匹配度</span>
      </div>

      <div class="archive-selector">
        <div class="selector-label">选择档案：</div>
        <div class="archive-chips">
          ${this.archives.map(archive => html`
            <div 
              class="archive-chip ${this.selectedArchiveId === archive.id ? 'active' : ''}"
              @click="${() => this.handleArchiveSelect(archive.id)}"
            >
              ${archive.diseaseName}
            </div>
          `)}
        </div>
      </div>

      <div class="match-overview">
        <div class="match-score">
          <div class="score-circle">${this.overallMatch}%</div>
          <div>
            <div class="score-label">整体匹配度</div>
            <div class="score-value">${this.overallMatch >= 70 ? '高度适用' : this.overallMatch >= 40 ? '部分适用' : '参考适用'}</div>
          </div>
        </div>
        
        <div class="match-details">
          ${this.matchResults.map(result => html`
            <div class="match-item">
              <span class="match-icon ${result.status}">
                ${result.status === 'match' ? html`
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ` : result.status === 'partial' ? html`
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                ` : result.status === 'mismatch' ? html`
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ` : html`
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                `}
              </span>
              <span class="match-text">${result.message}</span>
            </div>
          `)}
        </div>
      </div>

      ${this.recommendations.length > 0 ? html`
        <div class="recommendations">
          <div class="rec-title">个性化建议</div>
          ${this.recommendations.map(rec => html`
            <div class="rec-card ${rec.priority === 'gene' ? 'gene' : rec.priority}">
              <div class="rec-header">
                <span class="rec-priority ${rec.priority}">
                  ${rec.priority === 'high' ? '重要' : rec.priority === 'medium' ? '建议' : rec.priority === 'gene' ? '靶向' : '提示'}
                </span>
                <span class="rec-card-title">${rec.title}</span>
              </div>
              <div class="rec-content">${rec.content}</div>
              ${rec.action ? html`
                <span class="rec-action" @click="${() => this.handleAction(rec.action!)}">
                  ${rec.action} →
                </span>
              ` : ''}
            </div>
          `)}
        </div>
      ` : ''}
    `;
  }
}

@customElement('gene-match-hint')
export class GeneMatchHint extends LitElement {
  @property({ type: String }) gene: string = '';
  @property({ type: Array }) archives: Archive[] = [];

  @state() private showModal: boolean = false;
  @state() private selectedResult: string = '';

  static styles = css`
    :host {
      display: inline-block;
    }
    .hint {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: 2px solid transparent;
    }
    .hint:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .hint.positive {
      background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
      color: white;
    }
    .hint.negative {
      background: #f5f5f5;
      color: #666;
      border-color: #d9d9d9;
    }
    .hint.no-data {
      background: #fffbe6;
      color: #d48806;
      border-color: #ffe58f;
    }
    .hint-icon {
      font-size: 14px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal {
      background: white;
      border-radius: 16px;
      padding: 24px;
      width: 320px;
      max-width: 90vw;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .modal-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 16px;
      text-align: center;
    }
    .modal-gene {
      font-size: 24px;
      font-weight: 700;
      color: #667eea;
      text-align: center;
      margin-bottom: 20px;
    }
    .modal-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .modal-option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
      border: 2px solid #e8e8e8;
    }
    .modal-option:hover {
      border-color: #667eea;
      background: #f6f8ff;
    }
    .modal-option.positive {
      border-color: #52c41a;
    }
    .modal-option.positive.selected {
      background: #f6ffed;
      border-color: #52c41a;
    }
    .modal-option.negative {
      border-color: #ff4d4f;
    }
    .modal-option.negative.selected {
      background: #fff2f0;
      border-color: #ff4d4f;
    }
    .modal-option.skip {
      border-color: #d9d9d9;
    }
    .modal-option.skip.selected {
      background: #f5f5f5;
      border-color: #999;
    }
    .option-icon {
      font-size: 24px;
    }
    .option-text {
      flex: 1;
    }
    .option-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .option-desc {
      font-size: 12px;
      color: #666;
      margin-top: 2px;
    }
    .modal-close {
      margin-top: 16px;
      width: 100%;
      padding: 12px;
      background: #f5f5f5;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
    .modal-close:hover {
      background: #e8e8e8;
    }
  `;

  private checkGeneMatch(): { status: 'positive' | 'negative' | 'no-data'; text: string; found: boolean } {
    if (this.archives.length === 0) {
      return { status: 'no-data', text: '点击设置基因状态', found: false };
    }

    const geneTestResults = this.archives[0]?.pathologyReport?.geneTestResults || [];
    if (geneTestResults.length === 0) {
      return { status: 'no-data', text: '点击设置基因状态', found: false };
    }

    const upperGene = this.gene.toUpperCase();
    const found = geneTestResults.find(g =>
      g.geneName.toUpperCase().includes(upperGene)
    );

    if (!found) {
      return { status: 'no-data', text: '点击设置基因状态', found: false };
    }

    if (found.result === '阳性') {
      return { status: 'positive', text: `✓ ${this.gene}阳性 - 适合靶向药`, found: true };
    } else {
      return { status: 'negative', text: `✗ ${this.gene}${found.result} - 不适合`, found: true };
    }
  }

  private handleHintClick() {
    this.selectedResult = '';
    this.showModal = true;
  }

  private handleOptionSelect(result: string) {
    this.selectedResult = result;
  }

  private handleConfirm() {
    if (!this.selectedResult) return;

    this.dispatchEvent(new CustomEvent('gene-status-change', {
      bubbles: true,
      composed: true,
      detail: {
        gene: this.gene,
        result: this.selectedResult
      }
    }));

    this.showModal = false;
  }

  private handleSkip() {
    this.showModal = false;
  }

  render() {
    const { status, text } = this.checkGeneMatch();

    return html`
      <span class="hint ${status}" @click="${this.handleHintClick}">
        <span class="hint-icon">
          ${status === 'positive' ? '🎯' : status === 'negative' ? '✗' : '?'}
        </span>
        ${text}
      </span>

      ${this.showModal ? html`
        <div class="modal-overlay" @click="${this.handleSkip}">
          <div class="modal" @click="${(e: Event) => e.stopPropagation()}">
            <div class="modal-title">设置您的基因状态</div>
            <div class="modal-gene">${this.gene}</div>
            <div class="modal-options">
              <div
                class="modal-option positive ${this.selectedResult === '阳性' ? 'selected' : ''}"
                @click="${() => this.handleOptionSelect('阳性')}"
              >
                <span class="option-icon">🎯</span>
                <div class="option-text">
                  <div class="option-title">阳性</div>
                  <div class="option-desc">适合使用 ${this.gene} 靶向药物</div>
                </div>
              </div>
              <div
                class="modal-option negative ${this.selectedResult === '阴性' ? 'selected' : ''}"
                @click="${() => this.handleOptionSelect('阴性')}"
              >
                <span class="option-icon">✗</span>
                <div class="option-text">
                  <div class="option-title">阴性</div>
                  <div class="option-desc">不适合使用 ${this.gene} 靶向药物</div>
                </div>
              </div>
              <div
                class="modal-option skip ${this.selectedResult === '未检测' ? 'selected' : ''}"
                @click="${() => this.handleOptionSelect('未检测')}"
              >
                <span class="option-icon">—</span>
                <div class="option-text">
                  <div class="option-title">未检测/未知</div>
                  <div class="option-desc">暂不设置，提醒检测</div>
                </div>
              </div>
            </div>
            <button
              class="modal-close"
              @click="${this.handleConfirm}"
              ?disabled="${!this.selectedResult}"
              style="${!this.selectedResult ? 'opacity:0.5;cursor:not-allowed' : ''}"
            >
              确认
            </button>
          </div>
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-archive-matcher': ArticleArchiveMatcher;
  }
}
