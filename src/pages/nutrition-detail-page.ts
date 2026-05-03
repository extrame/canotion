import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nutrition-detail-page')
export class NutritionDetailPage extends LitElement {
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
    .content-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .content-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    .content-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #fa8c16 0%, #ff7a45 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .content-title-group {
      flex: 1;
    }
    .content-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .content-subtitle {
      font-size: 13px;
      color: #999;
    }
    .warning-banner {
      background: linear-gradient(135deg, #fff2e6 0%, #fff7e6 100%);
      border: 1px solid #ffb977;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 20px;
    }
    .warning-banner-title {
      font-size: 15px;
      font-weight: 600;
      color: #d46b08;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .warning-banner-icon {
      font-size: 20px;
    }
    .warning-banner-content {
      font-size: 14px;
      color: #666;
      line-height: 1.7;
    }
    .key-indicators {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .indicator-card {
      background: #fafafa;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      border: 1px solid #e8e8e8;
    }
    .indicator-card:last-child {
      margin-bottom: 0;
    }
    .indicator-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    .indicator-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .indicator-icon.albumin {
      background: #e6f7ff;
    }
    .indicator-icon.mineral {
      background: #f6ffed;
    }
    .indicator-name {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .indicator-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .indicator-values {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .value-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 500;
    }
    .value-tag.normal {
      background: #f6ffed;
      color: #52c41a;
      border: 1px solid #b7eb8f;
    }
    .value-tag.low {
      background: #fff1f0;
      color: #ff4d4f;
      border: 1px solid #ffccc7;
    }
    .relationship-section {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .relationship-title {
      font-size: 15px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .relationship-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #e6f7e6;
    }
    .relationship-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .relationship-icon {
      font-size: 16px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .relationship-text {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .relationship-text strong {
      color: #52c41a;
    }
    .tips-section {
      background: #fff8e6;
      border: 1px solid #ffe58f;
      border-radius: 12px;
      padding: 16px;
    }
    .tips-title {
      font-size: 15px;
      font-weight: 600;
      color: #d48806;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tip-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
    }
    .tip-item:last-child {
      padding-bottom: 0;
    }
    .tip-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #d48806;
      flex-shrink: 0;
      margin-top: 7px;
    }
    .tip-text {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .important-note {
      margin-top: 20px;
      padding: 16px;
      background: #fff1f0;
      border-radius: 12px;
      border: 1px solid #ffccc7;
    }
    .important-note-title {
      font-size: 14px;
      font-weight: 600;
      color: #ff4d4f;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .important-note-content {
      font-size: 13px;
      color: #666;
      line-height: 1.7;
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
          <span class="page-title">保证营养状态</span>
        </div>

        <div class="content-container">
          <div class="content-header">
            <div class="content-icon">🍎</div>
            <div class="content-title-group">
              <div class="content-title">营养状态准备</div>
              <div class="content-subtitle">化疗前的身体基础条件</div>
            </div>
          </div>

          <div class="warning-banner">
            <div class="warning-banner-title">
              <div class="warning-banner-icon">⚠️</div>
              化疗前重点关注指标
            </div>
            <div class="warning-banner-content">
              化疗期间身体消耗大，对营养状态要求更高。<strong>白蛋白</strong>和<strong>微量元素</strong>是评估营养状态的关键指标，直接影响身体的<strong>恢复能力</strong>和<strong>化疗耐受性</strong>。
            </div>
          </div>

          <div class="key-indicators">
            <div class="section-title">
              <span>🔬</span>
              重点关注指标
            </div>

            <div class="indicator-card">
              <div class="indicator-header">
                <div class="indicator-icon albumin">🥚</div>
                <div class="indicator-name">白蛋白（ALB）</div>
              </div>
              <div class="indicator-desc">
                白蛋白是维持机体正常生理功能的重要蛋白质。化疗期间蛋白质消耗增加，低白蛋白会导致：
                <br>• 身体修复能力下降
                <br>• 化疗耐受性降低
                <br>• 感染风险增加
              </div>
              <div class="indicator-values">
                <span class="value-tag normal">正常值：35-50 g/L</span>
                <span class="value-tag low">⚠️ 低于35需警惕</span>
              </div>
            </div>

            <div class="indicator-card">
              <div class="indicator-header">
                <div class="indicator-icon mineral">⚡</div>
                <div class="indicator-name">微量元素</div>
              </div>
              <div class="indicator-desc">
                微量元素在体内含量虽少，但参与多种重要生理过程。化疗患者常见的微量元素缺乏包括：
                <br>• <strong>锌（Zn）</strong>：参与免疫功能，缺锌会导致伤口愈合慢、免疫力下降
                <br>• <strong>硒（Se）</strong>：抗氧化作用，缺硒会影响化疗效果和身体恢复
                <br>• <strong>镁（Mg）</strong>：参与能量代谢，缺镁会导致乏力、食欲下降
              </div>
              <div class="indicator-values">
                <span class="value-tag normal">锌：11-24 μmol/L</span>
                <span class="value-tag normal">硒：0.6-1.2 μg/mL</span>
                <span class="value-tag normal">镁：0.6-1.2 mmol/L</span>
              </div>
            </div>
          </div>

          <div class="relationship-section">
            <div class="relationship-title">
              <span>📊</span>
              与身体情况及化疗耐受性的关系
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">💪</span>
              <div class="relationship-text">
                <strong>营养状态 → 身体储备</strong><br>
                良好的营养状态意味着身体有充足的蛋白质和微量元素储备，能更好地承受化疗带来的副作用。
              </div>
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">🛡️</span>
              <div class="relationship-text">
                <strong>白蛋白水平 → 免疫力</strong><br>
                白蛋白不仅是营养指标，也与免疫力密切相关。低白蛋白提示身体处于消耗状态，免疫力低下。
              </div>
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">💊</span>
              <div class="relationship-text">
                <strong>微量元素 → 药物代谢</strong><br>
                微量元素参与药物代谢过程。缺乏会影响化疗药物的疗效和毒性反应。
              </div>
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">⚕️</span>
              <div class="relationship-text">
                <strong>综合评估 → 治疗决策</strong><br>
                医生会根据白蛋白和微量元素水平综合评估患者的营养状态和治疗耐受性，必要时先进行营养支持治疗。
              </div>
            </div>
          </div>

          <div class="tips-section">
            <div class="tips-title">
              <span>💡</span>
              营养补充建议
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>优质蛋白摄入</strong>：每天摄入鸡蛋、牛奶、鱼肉、豆腐等优质蛋白，有助于提升白蛋白水平</div>
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>少量多餐</strong>：化疗期间胃口可能较差，建议少量多餐，保证营养摄入</div>
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>补充微量元素</strong>：可适当食用富含锌、硒的食物，如海鲜、坚果等，必要时在医生指导下补充</div>
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>定期监测</strong>：化疗期间定期复查白蛋白和微量元素，及时发现并纠正营养缺乏</div>
            </div>
          </div>

          <div class="important-note">
            <div class="important-note-title">
              <span>⚠️</span>
              门静脉癌栓患者特别提示
            </div>
            <div class="important-note-content">
              若存在门静脉癌栓，饮食需特别注意避免消化道出血风险：
              <br>• 禁止进食硬质食物（坚果、骨头、脆皮等）
              <br>• 严禁过烫食物，温度适宜后再进食
              <br>• 避免过饱，采用少食多餐
              <br>• 选择软烂、易消化的食物
              <br>如有出血风险，请务必与主治医生沟通制定合适的营养方案。
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nutrition-detail-page': NutritionDetailPage;
  }
}