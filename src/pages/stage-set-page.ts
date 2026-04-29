import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('stage-set-page')
export class StageSetPage extends LitElement {
  @property({ type: String })
  public currentStage = '';

  @state()
  private stage = '';

  willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('currentStage')) {
      this.stage = this.currentStage;
    }
  }

  static styles = css`
    :host {
      display: block;
    }
    .page-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .page-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #eee;
    }
    .back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: #e0e0e0;
    }
    .page-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    .stage-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }
    .stage-option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border: 2px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .stage-option:hover {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .stage-option.selected {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .stage-radio {
      width: 20px;
      height: 20px;
      border: 2px solid #ddd;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .stage-option.selected .stage-radio {
      border-color: #1890ff;
      background: #1890ff;
    }
    .stage-radio-inner {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .stage-option.selected .stage-radio-inner {
      opacity: 1;
    }
    .stage-text {
      flex: 1;
    }
    .stage-name {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .stage-desc {
      font-size: 13px;
      color: #666;
    }
    .custom-input {
      margin-top: 16px;
    }
    .custom-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      margin-bottom: 8px;
    }
    .custom-text-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #eee;
      border-radius: 10px;
      font-size: 16px;
      color: #333;
      outline: none;
      transition: border-color 0.2s;
    }
    .custom-text-input:focus {
      border-color: #1890ff;
    }
    .page-footer {
      display: flex;
      gap: 12px;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid #eee;
    }
    .save-btn {
      flex: 1;
      background: #1890ff;
      color: white;
      border: none;
      padding: 14px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .save-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(24, 144, 255, 0.4);
    }
    .skip-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 14px 24px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }
    .skip-btn:hover {
      background: #e8e8e8;
    }
  `;

  private stageOptions = [
    { id: 'suspected', name: '疑似确诊', desc: '检查中，尚未明确诊断' },
    { id: 'excluded', name: '排除诊断', desc: '排除癌症可能，结束治疗' },
    { id: 'diagnosed', name: '确诊治疗', desc: '明确诊断，制定治疗方案' }
  ];

  private handleSelect(stageId: string): void {
    const option = this.stageOptions.find(s => s.id === stageId);
    if (option) {
      this.stage = option.name;
    }
  }

  private handleCustomInput(e: Event): void {
    this.stage = (e.target as HTMLInputElement).value;
  }

  private handleSave(): void {
    this.dispatchEvent(new CustomEvent<string>('save', {
      bubbles: true,
      composed: true,
      detail: this.stage
    }));
  }

  private handleBack(): void {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
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
          <span class="page-title">设置病程阶段</span>
        </div>

        <div class="stage-options">
          ${this.stageOptions.map(option => html`
            <div
              class="stage-option ${this.stage === option.name ? 'selected' : ''}"
              @click="${() => this.handleSelect(option.id)}"
            >
              <div class="stage-radio">
                <div class="stage-radio-inner"></div>
              </div>
              <div class="stage-text">
                <div class="stage-name">${option.name}</div>
                <div class="stage-desc">${option.desc}</div>
              </div>
            </div>
          `)}
        </div>

        <div class="custom-input">
          <label class="custom-label">或输入自定义阶段</label>
          <input
            type="text"
            class="custom-text-input"
            placeholder="例如：第二次化疗后"
            .value="${this.stage}"
            @input="${this.handleCustomInput}"
          >
        </div>

        <div class="page-footer">
          <button class="skip-btn" @click="${this.handleBack}">跳过</button>
          <button class="save-btn" @click="${this.handleSave}">保存阶段</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stage-set-page': StageSetPage;
  }
}