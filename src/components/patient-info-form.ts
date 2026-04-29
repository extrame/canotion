import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { PatientInfo } from '../storage';

@customElement('patient-info-form')
export class PatientInfoForm extends LitElement {
  @property({ type: Object })
  public patientInfo: PatientInfo = {
    name: '',
    age: null,
    gender: '',
    phone: '',
    idNumber: ''
  };

  @state()
  private name = '';

  @state()
  private age: number | null = null;

  @state()
  private gender = '';

  @state()
  private phone = '';

  @state()
  private idNumber = '';

  willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('patientInfo')) {
      this.name = this.patientInfo.name;
      this.age = this.patientInfo.age;
      this.gender = this.patientInfo.gender;
      this.phone = this.patientInfo.phone;
      this.idNumber = this.patientInfo.idNumber;
    }
  }

  static styles = css`
    :host {
      display: block;
    }
    .form-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .form-header {
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
    .form-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      margin-bottom: 8px;
    }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #eee;
      border-radius: 10px;
      font-size: 16px;
      color: #333;
      outline: none;
      transition: border-color 0.2s;
    }
    .form-input:focus {
      border-color: #1890ff;
    }
    .form-input::placeholder {
      color: #ccc;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .gender-select {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #eee;
      border-radius: 10px;
      font-size: 16px;
      color: #333;
      background: white;
      outline: none;
      cursor: pointer;
    }
    .gender-select:focus {
      border-color: #1890ff;
    }
    .form-footer {
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
  `;

  private handleNameChange(e: Event): void {
    this.name = (e.target as HTMLInputElement).value;
  }

  private handleAgeChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.age = value ? parseInt(value, 10) : null;
  }

  private handleGenderChange(e: Event): void {
    this.gender = (e.target as HTMLSelectElement).value;
  }

  private handlePhoneChange(e: Event): void {
    this.phone = (e.target as HTMLInputElement).value;
  }

  private handleIdNumberChange(e: Event): void {
    this.idNumber = (e.target as HTMLInputElement).value;
  }

  private handleSave(): void {
    this.dispatchEvent(new CustomEvent<PatientInfo>('save', {
      bubbles: true,
      composed: true,
      detail: {
        name: this.name,
        age: this.age,
        gender: this.gender,
        phone: this.phone,
        idNumber: this.idNumber
      }
    }));
  }

  private handleBack(): void {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="form-container">
        <div class="form-header">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span class="form-title">个人信息</span>
        </div>

        <div class="form-group">
          <label class="form-label">姓名</label>
          <input
            type="text"
            class="form-input"
            placeholder="请输入姓名"
            .value="${this.name}"
            @input="${this.handleNameChange}"
          >
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">年龄</label>
            <input
              type="number"
              class="form-input"
              placeholder="请输入年龄"
              .value="${this.age ?? ''}"
              @input="${this.handleAgeChange}"
            >
          </div>
          <div class="form-group">
            <label class="form-label">性别</label>
            <select
              class="gender-select"
              .value="${this.gender}"
              @change="${this.handleGenderChange}"
            >
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">联系电话</label>
          <input
            type="tel"
            class="form-input"
            placeholder="请输入联系电话"
            .value="${this.phone}"
            @input="${this.handlePhoneChange}"
          >
        </div>

        <div class="form-group">
          <label class="form-label">身份证号</label>
          <input
            type="text"
            class="form-input"
            placeholder="请输入身份证号"
            .value="${this.idNumber}"
            @input="${this.handleIdNumberChange}"
          >
        </div>

        <div class="form-footer">
          <button class="save-btn" @click="${this.handleSave}">保存信息</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'patient-info-form': PatientInfoForm;
  }
}