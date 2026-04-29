import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Note } from '../types';

@customElement('note-editor-page')
export class NoteEditorPage extends LitElement {
  @property({ type: Object })
  public note: Note | null = null;

  @property({ type: String })
  public archiveName = '';

  @state()
  private title = '';

  @state()
  private content = '';

  willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('note') && this.note) {
      this.title = this.note.title || '';
      this.content = this.note.content || '';
    }
  }

  static styles = css`
    :host {
      display: block;
    }
    .editor-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .editor-header {
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
    .archive-badge {
      background: #1890ff;
      color: white;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
    }
    .last-updated {
      margin-left: auto;
      color: #999;
      font-size: 13px;
    }
    .title-input {
      width: 100%;
      border: none;
      font-size: 24px;
      font-weight: 600;
      color: #333;
      padding: 12px 0;
      outline: none;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s;
    }
    .title-input:focus {
      border-bottom-color: #1890ff;
    }
    .title-input::placeholder {
      color: #ccc;
    }
    .content-editor {
      width: 100%;
      min-height: 400px;
      border: none;
      font-size: 16px;
      line-height: 1.8;
      color: #333;
      padding: 16px 0;
      outline: none;
      resize: none;
    }
    .content-editor::placeholder {
      color: #ccc;
    }
    .editor-footer {
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
    .delete-btn {
      background: #fff1f0;
      color: #ff4d4f;
      border: 1px solid #ffccc7;
      padding: 14px 24px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }
    .delete-btn:hover {
      background: #fff2f0;
    }
  `;

  private handleTitleChange(e: Event): void {
    this.title = (e.target as HTMLInputElement).value;
  }

  private handleContentChange(e: Event): void {
    this.content = (e.target as HTMLTextAreaElement).value;
  }

  private handleSave(): void {
    this.dispatchEvent(new CustomEvent<{ title: string; content: string }>('save', {
      bubbles: true,
      composed: true,
      detail: {
        title: this.title,
        content: this.content
      }
    }));
  }

  private handleDelete(): void {
    this.dispatchEvent(new CustomEvent('delete', {
      bubbles: true,
      composed: true
    }));
  }

  private handleBack(): void {
    this.dispatchEvent(new CustomEvent('back', {
      bubbles: true,
      composed: true
    }));
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  render() {
    if (!this.note) {
      return html`<div>加载中...</div>`;
    }

    return html`
      <div class="editor-container">
        <div class="editor-header">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span class="archive-badge">${this.archiveName}</span>
          <span class="last-updated">最后更新: ${this.formatDate(this.note.updatedAt)}</span>
        </div>

        <input
          type="text"
          class="title-input"
          placeholder="输入笔记标题..."
          .value="${this.title}"
          @input="${this.handleTitleChange}"
        >

        <textarea
          class="content-editor"
          placeholder="开始记录..."
          .value="${this.content}"
          @input="${this.handleContentChange}"
        ></textarea>

        <div class="editor-footer">
          <button class="delete-btn" @click="${this.handleDelete}">删除笔记</button>
          <button class="save-btn" @click="${this.handleSave}">保存笔记</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'note-editor-page': NoteEditorPage;
  }
}