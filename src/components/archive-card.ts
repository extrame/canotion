import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Archive } from '../types';

@customElement('archive-card')
export class ArchiveCard extends LitElement {
  @property({ type: Object })
  public archive: Archive | null = null;

  static styles = css`
    :host {
      display: block;
    }
    .card {
      background: #1890ff;
      border-radius: 16px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.2s;
      color: white;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(24, 144, 255, 0.4);
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    .disease-icon {
      width: 48px;
      height: 48px;
      background: rgba(255,255,255,0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .disease-icon svg {
      width: 24px;
      height: 24px;
    }
    .card-title {
      font-size: 20px;
      font-weight: 600;
    }
    .card-date {
      font-size: 12px;
      opacity: 0.8;
      margin-top: 4px;
    }
    .card-stats {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-top: 12px;
      border-top: 1px solid rgba(255,255,255,0.2);
    }
    .stat-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      opacity: 0.9;
    }
    .stat-item svg {
      width: 16px;
      height: 16px;
    }
    .stage-badge {
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    @media (max-width: 600px) {
      .card {
        border-radius: 12px;
        padding: 16px;
      }
      .disease-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .disease-icon svg {
        width: 20px;
        height: 20px;
      }
      .card-title {
        font-size: 17px;
      }
      .card-date {
        font-size: 11px;
      }
      .card-stats {
        padding-top: 10px;
      }
      .stat-item {
        font-size: 12px;
      }
      .stage-badge {
        font-size: 11px;
        padding: 3px 10px;
      }
    }
  `;

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  private handleClick(): void {
    if (this.archive) {
      window.location.hash = `#/archive/${this.archive.id}`;
    }
  }

  render() {
    if (!this.archive) return html``;

    const isExamination = this.archive.currentStage === 'examination';

    return html`
      <div class="card" @click="${this.handleClick}">
        <div class="card-header">
          <div class="disease-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>
            <div class="card-title">${this.archive.diseaseName}</div>
            <div class="card-date">创建于 ${this.formatDate(this.archive.createdAt)}</div>
          </div>
        </div>
        <div class="card-stats">
          <div class="stage-badge">
            ${isExamination ? '检查阶段' : '治疗阶段'}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'archive-card': ArchiveCard;
  }
}