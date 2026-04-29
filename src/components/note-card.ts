import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Note } from '../types';

@customElement('note-card')
export class NoteCard extends LitElement {
  @property({ type: Object })
  public note: Note | null = null;

  static styles = css`
    :host {
      display: block;
    }
    .card {
      background: #fafafa;
      border-radius: 12px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid transparent;
    }
    .card:hover {
      background: white;
      border-color: #1890ff;
      box-shadow: 0 4px 15px rgba(24, 144, 255, 0.15);
      transform: translateY(-2px);
    }
    .card-header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;
    }
    .card-date {
      margin-left: auto;
      color: #bbb;
      font-size: 12px;
    }
    .card-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .card-title.empty {
      color: #ccc;
      font-weight: 400;
    }
    .card-content {
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-content.empty {
      color: #ddd;
    }
  `;

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric'
    });
  }

  private handleClick(): void {
    this.dispatchEvent(new CustomEvent('view-note', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this.note) return html``;

    const title = this.note.title || '无标题';
    const content = this.note.content || '暂无内容';

    return html`
      <div class="card" @click="${this.handleClick}">
        <div class="card-header">
          <span class="card-date">${this.formatDate(this.note.updatedAt)}</span>
        </div>
        <div class="card-title ${!this.note.title ? 'empty' : ''}">${title}</div>
        <div class="card-content ${!this.note.content ? 'empty' : ''}">${content}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'note-card': NoteCard;
  }
}