import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pathology-detail-page')
export class PathologyDetailPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .page-container {
      padding: 20px;
    }
    .page-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }
    .back-btn {
      width: 40px;
      height: 40px;
      border: none;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: #e8e8e8;
    }
    .page-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    .timeline-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .timeline-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    .timeline-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .timeline-title-group {
      flex: 1;
    }
    .timeline-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .timeline-subtitle {
      font-size: 13px;
      color: #999;
    }
    .total-time {
      background: #fff1f0;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      color: #ff4d4f;
    }
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, #667eea, #52c41a);
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 24px;
    }
    .timeline-item:last-child {
      padding-bottom: 0;
    }
    .timeline-dot {
      position: absolute;
      left: -32px;
      top: 4px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      z-index: 1;
    }
    .timeline-dot.completed {
      background: #52c41a;
      color: white;
    }
    .timeline-dot.current {
      background: #667eea;
      color: white;
      animation: pulse 2s infinite;
    }
    .timeline-dot.pending {
      background: #d9d9d9;
      color: white;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
      50% { box-shadow: 0 0 0 8px rgba(102, 126, 234, 0); }
    }
    .timeline-item.urgent {
      position: relative;
    }
    .timeline-item.urgent::before {
      content: '';
      position: absolute;
      left: -8px;
      right: -8px;
      top: -4px;
      bottom: -4px;
      background: linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%);
      border-radius: 16px;
      z-index: 0;
      animation: urgentPulse 2s infinite;
    }
    @keyframes urgentPulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    .timeline-item.urgent .timeline-content {
      position: relative;
      z-index: 1;
      background: white;
      border: 2px solid #ff4d4f;
    }
    .timeline-item.urgent .timeline-item-name {
      color: #ff4d4f;
    }
    .timeline-item.required {
      position: relative;
    }
    .timeline-item.required::before {
      content: '';
      position: absolute;
      left: -8px;
      right: -8px;
      top: -4px;
      bottom: -4px;
      background: linear-gradient(135deg, #fff2e6 0%, #ffd591 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.required .timeline-content {
      position: relative;
      z-index: 1;
      background: white;
      border: 2px solid #fa8c16;
    }
    .timeline-item.required .timeline-item-name {
      color: #d46b08;
    }
    .required-banner {
      background: #fa8c16;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .required-banner svg {
      flex-shrink: 0;
    }
    .timeline-item.gene-test {
      position: relative;
    }
    .timeline-item.gene-test::before {
      content: '';
      position: absolute;
      left: -8px;
      right: -8px;
      top: -4px;
      bottom: -4px;
      background: linear-gradient(135deg, #f6ffed 0%, #b7eb8f 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.gene-test .timeline-content {
      position: relative;
      z-index: 1;
      background: white;
      border: 2px solid #52c41a;
    }
    .timeline-item.gene-test .timeline-item-name {
      color: #52c41a;
    }
    .gene-banner {
      background: #52c41a;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .gene-banner svg {
      flex-shrink: 0;
    }
    .urgent-banner {
      background: #ff4d4f;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .urgent-banner svg {
      flex-shrink: 0;
    }
    .timeline-content {
      background: #fafafa;
      border-radius: 12px;
      padding: 16px;
    }
    .timeline-item-name {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .timeline-item-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .timeline-item-time {
      display: inline-block;
      font-size: 12px;
      color: #999;
      margin-top: 8px;
      padding: 4px 10px;
      background: white;
      border-radius: 12px;
    }
    .bifurcation-section {
      margin-top: 24px;
      background: #fff7e6;
      border: 1px solid #ffd591;
      border-radius: 12px;
      padding: 16px;
    }
    .bifurcation-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .bifurcation-icon {
      width: 24px;
      height: 24px;
      background: #ffd591;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .bifurcation-paths {
      display: flex;
      gap: 12px;
    }
    .bifurcation-path {
      flex: 1;
      padding: 12px;
      border-radius: 8px;
      background: white;
    }
    .path-result {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .path-result.excluded {
      color: #52c41a;
    }
    .path-result.cancer {
      color: #ff4d4f;
    }
    .path-action {
      font-size: 12px;
      color: #666;
      line-height: 1.4;
    }
    .path-action strong {
      color: #ff4d4f;
    }
    .note-section {
      margin-top: 24px;
      padding: 16px;
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
    }
    .note-title {
      font-size: 14px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .note-content {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .gene-test-warning {
      margin-top: 20px;
      background: linear-gradient(135deg, #fff2e6 0%, #fff7e6 100%);
      border: 1px solid #ffb977;
      border-radius: 12px;
      padding: 16px;
    }
    .gene-test-warning-title {
      font-size: 15px;
      font-weight: 600;
      color: #d46b08;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .gene-test-warning-icon {
      font-size: 20px;
    }
    .gene-test-warning-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .warning-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      background: white;
      border-radius: 8px;
    }
    .warning-icon {
      font-size: 18px;
      flex-shrink: 0;
    }
    .warning-text {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .warning-text strong {
      color: #d46b08;
    }
  `;

  private handleBack(): void {
    window.history.back();
  }

  render() {
    return html`
      <div class="page-container">
        <div class="page-header">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span class="page-title">病理确认流程</span>
        </div>

        <div class="timeline-container">
          <div class="timeline-header">
            <div class="timeline-icon">🔬</div>
            <div class="timeline-title-group">
              <div class="timeline-title">病理确认</div>
              <div class="timeline-subtitle">明确肿瘤性质，制定治疗方案的基础依据</div>
            </div>
            <div class="total-time">约2-3周</div>
          </div>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot completed">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">门诊评估</div>
                <div class="timeline-item-desc">医生评估病情，开具检查单，安排入院或穿刺时间</div>
                <div class="timeline-item-time">约1-3天</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot completed">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">入院检查</div>
                <div class="timeline-item-desc">完成必要的血液检查、影像检查等，评估身体状况是否适合穿刺</div>
                <div class="timeline-item-time">约3-7天</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot current">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">穿刺活检</div>
                <div class="timeline-item-desc">在影像引导下进行穿刺，获取组织样本进行病理分析</div>
                <div class="timeline-item-time">约1-2天（住院）</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">病理分析</div>
                <div class="timeline-item-desc">组织样本送检，显微镜下分析细胞形态，明确肿瘤性质</div>
                <div class="timeline-item-time">约5-10天</div>
              </div>
            </div>

            <div class="timeline-item urgent">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">出具报告 ⚡</div>
                <div class="timeline-item-desc">病理报告出炉，明确诊断结果</div>
                <div class="timeline-item-time">1-2天</div>
                <div class="urgent-banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  报告出炉后立刻约门诊，同时送检基因检测！
                </div>
              </div>
            </div>

            <div class="timeline-item required">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">免疫组化染色检测 🔬</div>
                <div class="timeline-item-desc">检测肿瘤标志物表达情况，指导靶向和免疫治疗药物选择</div>
                <div class="timeline-item-time">约5-7天</div>
                <div class="required-banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  必做！标准诊疗指南一线治疗是化疗+免疫，必须尽快完成
                </div>
              </div>
            </div>

            <div class="timeline-item gene-test">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">基因检测 🧬</div>
                <div class="timeline-item-desc">检测基因突变情况（FGFR2、IDH1、MSI/TMB、HER2、NTRK等），为靶向治疗提供依据</div>
                <div class="timeline-item-time">约10-14天</div>
                <div class="gene-banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  可与免疫组化同时进行，不耽误时间
                </div>
              </div>
            </div>
          </div>

          <div class="bifurcation-section">
            <div class="bifurcation-title">
              <div class="bifurcation-icon">⚡</div>
              分叉点：病理报告结果
            </div>
            <div class="bifurcation-paths">
              <div class="bifurcation-path">
                <div class="path-result excluded">排除癌症</div>
                <div class="path-action">病理报告显示为良性病变，可排除癌症可能，结束当前诊疗流程。</div>
              </div>
              <div class="bifurcation-path">
                <div class="path-result cancer">确诊癌症</div>
                <div class="path-action">明确为腺癌或鳞癌等。<br><br>
                  <strong>请立即同时进行：</strong><br>
                  1. 联系医生进行<strong>免疫组化染色检测</strong>（必做）<br>
                  2. 送检<strong>基因检测</strong>（可与免疫组化并行）</div>
              </div>
            </div>
          </div>

          <div class="note-section">
            <div class="note-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              重要提示
            </div>
            <div class="note-content">
              基本病理报告出具后，根据结果分为两条路径：<br><br>
              1. 若排除癌症：恭喜，可结束当前诊疗流程<br><br>
              2. 若确诊癌症：<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• <strong>免疫组化染色检测（必做）</strong>：用于指导化疗+免疫治疗方案选择<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• <strong>基因检测（建议做）</strong>：用于靶向治疗药物选择<br><br>
              <strong>注意：免疫组化和基因检测可以同时送检，请务必在拿到病理报告后第一时间联系您的主治医生。</strong>
            </div>
          </div>

          <div class="gene-test-warning">
            <div class="gene-test-warning-title">
              <div class="gene-test-warning-icon">🧬</div>
              基因检测抽血注意事项
            </div>
            <div class="gene-test-warning-content">
              <div class="warning-item">
                <div class="warning-icon">💉</div>
                <div class="warning-text">
                  <strong>基因检测需要血液抽检</strong><br>
                  为保证检测结果准确性，<strong>抽血前14天内应避免输血</strong>。
                </div>
              </div>
              <div class="warning-item">
                <div class="warning-icon">⚠️</div>
                <div class="warning-text">
                  <strong>门静脉癌栓风险提示</strong><br>
                  若并发门静脉癌栓，出现消化道出血的风险较高。<br>
                  一旦发生输血，基因检测将<strong>推迟至少15天</strong>。
                </div>
              </div>
              <div class="warning-item">
                <div class="warning-icon">📋</div>
                <div class="warning-text">
                  <strong>建议措施</strong><br>
                  请提前与医生沟通，在窗口期内优先安排基因检测抽血。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pathology-detail-page': PathologyDetailPage;
  }
}
