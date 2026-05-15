import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { Disease } from '../types';

@customElement('disease-selector')
export class DiseaseSelector extends LitElement {
  @state()
  private show = false;

  private diseases: Disease[] = [
    {
      id: 'hilar-cholangiocarcinoma',
      name: '肝门胆管癌',
      desc: '发生在肝门部的胆管癌',
      icon: '',
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
    }
    .selector-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: flex-end;
      z-index: 1000;
    }
    .selector-sheet {
      width: 100%;
      background: white;
      border-radius: 20px 20px 0 0;
      padding: 24px;
      animation: slideUp 0.3s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .selector-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .selector-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .disease-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .disclaimer-banner {
      background: #fff7e6;
      border: 1px solid #ffd591;
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 16px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .disclaimer-icon {
      flex-shrink: 0;
    }
    .disclaimer-content {
      flex: 1;
    }
    .disclaimer-title {
      font-size: 13px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 4px;
    }
    .disclaimer-text {
      font-size: 12px;
      color: #666;
      line-height: 1.5;
    }
    .privacy-banner {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 16px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .privacy-icon {
      flex-shrink: 0;
    }
    .privacy-content {
      flex: 1;
    }
    .privacy-title {
      font-size: 13px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 4px;
    }
    .privacy-text {
      font-size: 12px;
      color: #666;
      line-height: 1.5;
    }
    .disease-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border: 1px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .disease-item:hover {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .disease-item.selected {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .disease-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: #1890ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .disease-info {
      flex: 1;
    }
    .disease-name {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .disease-desc {
      font-size: 13px;
      color: #999;
    }
    .check-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #1890ff;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .disease-item.selected .check-icon {
      opacity: 1;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.show = true;
  }

  private handleSelect(disease: Disease): void {
    this.dispatchEvent(new CustomEvent<Disease>('disease-select', {
      bubbles: true,
      composed: true,
      detail: disease
    }));
  }

  private handleClose(): void {
    this.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }

  private handleOverlayClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) {
      this.handleClose();
    }
  }

  render() {
    return html`
      <div class="selector-overlay" @click="${this.handleOverlayClick}">
        <div class="selector-sheet">
          <div class="selector-header">
            <span class="selector-title">选择病种</span>
            <button class="close-btn" @click="${this.handleClose}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="disclaimer-banner">
            <div class="disclaimer-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fa8c16" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div class="disclaimer-content">
              <div class="disclaimer-title">免责声明</div>
              <div class="disclaimer-text">
                本项目是我在陪伴母亲治疗肝门胆管癌过程中开发的。所有数据来源于个人诊疗经历和公开资料，<strong>不构成专业医疗意见</strong>。请务必以主治医生的建议为准，本工具仅供参考辅助，甄别使用。
              </div>
            </div>
          </div>
          <div class="privacy-banner">
            <div class="privacy-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div class="privacy-content">
              <div class="privacy-title">隐私保护说明</div>
              <div class="privacy-text">
                <strong>您的隐私数据仅存储在本地浏览器中</strong>，不会上传到任何服务器。请放心使用，但请注意清除浏览器数据会导致档案丢失，建议定期备份重要数据。
              </div>
            </div>
          </div>
          <div class="disease-list">
            ${this.diseases.map(d => html`
              <div class="disease-item" @click="${() => this.handleSelect(d)}">
                <div class="disease-icon">${d.icon}</div>
                <div class="disease-info">
                  <div class="disease-name">${d.name}</div>
                  <div class="disease-desc">${d.desc}</div>
                </div>
                <div class="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'disease-selector': DiseaseSelector;
  }
}