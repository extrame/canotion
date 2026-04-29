import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import Chart from 'chart.js/auto';
import type { DrainageRecord } from '../types';

@customElement('drainage-chart')
export class DrainageChart extends LitElement {
  @property({ type: Array })
  public records: DrainageRecord[] = [];

  @state()
  private showInput = false;

  @state()
  private showTable = false;

  @state()
  private inputDate = '';

  @state()
  private inputVolume = '';

  @state()
  private inputColor = '';

  @state()
  private inputNotes = '';

  @query('#drainage-canvas')
  private canvas!: HTMLCanvasElement;

  private chart: Chart | null = null;

  static styles = css`
    :host {
      display: block;
    }
    .chart-container {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .chart-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .chart-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .add-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #52c41a;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .add-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
    }
    .chart-canvas-container {
      position: relative;
      height: 200px;
      width: 100%;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
    }
    .input-form {
      background: #f6ffed;
      border-radius: 12px;
      padding: 16px;
      margin-top: 16px;
    }
    .input-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
    }
    .input-row {
      display: flex;
      gap: 12px;
      margin-bottom: 12px;
    }
    .input-group {
      flex: 1;
    }
    .input-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
    .input-field {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .input-field:focus {
      border-color: #52c41a;
    }
    .input-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }
    .cancel-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
    }
    .save-btn {
      background: #52c41a;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .color-tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      background: #f5f5f5;
      color: #666;
    }
    .table-toggle-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .table-toggle-btn:hover {
      background: #e8e8e8;
    }
    .table-toggle-btn.active {
      background: #f6ffed;
      color: #52c41a;
    }
    .data-table {
      margin-top: 16px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #b7eb8f;
    }
    .data-table table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .data-table th {
      background: #f6ffed;
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 1px solid #b7eb8f;
    }
    .data-table td {
      padding: 12px 16px;
      color: #666;
      border-bottom: 1px solid #f0f0f0;
    }
    .data-table tr:last-child td {
      border-bottom: none;
    }
    .data-table tr:hover td {
      background: #fafafa;
    }
    .no-data {
      text-align: center;
      padding: 20px;
      color: #999;
      font-size: 14px;
    }
    .tips {
      background: #fff1f0;
      border: 1px solid #ffccc7;
      border-radius: 8px;
      padding: 12px;
      margin-top: 12px;
      font-size: 12px;
      color: #666;
    }
    .tips-title {
      font-weight: 600;
      color: #ff4d4f;
      margin-bottom: 4px;
    }
  `;

  private getSortedRecords(): DrainageRecord[] {
    if (!this.records || this.records.length === 0) return [];
    return [...this.records].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  private initChart(): void {
    if (!this.canvas) return;

    const sortedRecords = this.getSortedRecords();
    if (sortedRecords.length === 0) return;

    const labels = sortedRecords.map(r => {
      const date = new Date(r.date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    const chartData = {
      labels,
      datasets: [
        {
          label: '引流量',
          data: sortedRecords.map(r => r.volume),
          borderColor: '#52c41a',
          backgroundColor: 'rgba(82, 196, 26, 0.1)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    };

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.canvas, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              afterLabel: (context) => {
                const record = sortedRecords[context.dataIndex];
                return `颜色: ${record.color || '未记录'}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'ml'
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        }
      }
    });
  }

  private updateChart(): void {
    if (!this.chart) {
      this.initChart();
      return;
    }

    const sortedRecords = this.getSortedRecords();
    if (sortedRecords.length === 0) {
      this.chart.destroy();
      this.chart = null;
      return;
    }

    const labels = sortedRecords.map(r => {
      const date = new Date(r.date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = sortedRecords.map(r => r.volume);
    this.chart.update();
  }

  protected updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('records')) {
      this.updateChart();
    }
  }

  private handleAddClick(): void {
    this.inputDate = new Date().toISOString().split('T')[0];
    this.inputVolume = '';
    this.inputColor = '';
    this.inputNotes = '';
    this.showInput = true;
  }

  private handleCancel(): void {
    this.showInput = false;
  }

  private handleToggleTable(): void {
    this.showTable = !this.showTable;
  }

  private handleSave(): void {
    if (!this.inputDate || !this.inputVolume) return;

    const volume = parseFloat(this.inputVolume) || 0;

    this.dispatchEvent(new CustomEvent('add-record', {
      bubbles: true,
      composed: true,
      detail: {
        id: Date.now().toString(),
        date: this.inputDate,
        volume,
        color: this.inputColor || '金黄色',
        notes: this.inputNotes
      }
    }));

    this.showInput = false;
  }

  public connectedCallback(): void {
    super.connectedCallback();
    setTimeout(() => this.initChart(), 0);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  render() {
    const hasRecords = this.records && this.records.length > 0;
    const sortedRecords = this.getSortedRecords();

    return html`
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">💧 PTCD引流量记录</span>
          <div style="display: flex; gap: 8px;">
            ${hasRecords ? html`
              <button class="table-toggle-btn ${this.showTable ? 'active' : ''}" @click="${this.handleToggleTable}">
                ${this.showTable ? '收起数据' : '查看数据'}
              </button>
            ` : ''}
            <button class="add-btn" @click="${this.handleAddClick}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              录入
            </button>
          </div>
        </div>

        ${hasRecords ? html`
          <div class="chart-canvas-container">
            <canvas id="drainage-canvas"></canvas>
          </div>
          ${this.showTable ? html`
            <div class="data-table">
              <table>
                <thead>
                  <tr>
                    <th>日期</th>
                    <th>引流量</th>
                    <th>颜色</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  ${sortedRecords.map(record => html`
                    <tr>
                      <td>${new Date(record.date).toLocaleDateString('zh-CN')}</td>
                      <td>${record.volume} ml</td>
                      <td><span class="color-tag">${record.color}</span></td>
                      <td>${record.notes || '-'}</td>
                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          ` : ''}
        ` : html`
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity: 0.5; margin-bottom: 12px;">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
            <p>暂无引流量记录</p>
            <p style="font-size: 12px; margin-top: 4px;">点击上方按钮录入每日引流量</p>
          </div>
        `}

        <div class="tips">
          <div class="tips-title">💡 记录提示</div>
          <div>• 建议每日固定时间记录引流量（如早上8点）</div>
          <div>• 正常PTCD引流量约为200-400ml/天</div>
          <div>• 引流量突然减少或增多时请及时联系医生</div>
        </div>

        ${this.showInput ? html`
          <div class="input-form">
            <div class="input-title">录入引流量</div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">日期</div>
                <input type="date" class="input-field" .value="${this.inputDate}" @input="${(e: Event) => this.inputDate = (e.target as HTMLInputElement).value}">
              </div>
              <div class="input-group">
                <div class="input-label">引流量 (ml)</div>
                <input type="number" class="input-field" placeholder="如：250" .value="${this.inputVolume}" @input="${(e: Event) => this.inputVolume = (e.target as HTMLInputElement).value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">颜色</div>
                <input type="text" class="input-field" placeholder="如：金黄色、墨绿色" .value="${this.inputColor}" @input="${(e: Event) => this.inputColor = (e.target as HTMLInputElement).value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">备注（选填）</div>
                <input type="text" class="input-field" placeholder="如：晚上引流量较多" .value="${this.inputNotes}" @input="${(e: Event) => this.inputNotes = (e.target as HTMLInputElement).value}">
              </div>
            </div>
            <div class="input-actions">
              <button class="cancel-btn" @click="${this.handleCancel}">取消</button>
              <button class="save-btn" @click="${this.handleSave}">保存</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'drainage-chart': DrainageChart;
  }
}
