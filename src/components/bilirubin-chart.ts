import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import Chart from 'chart.js/auto';
import type { BilirubinRecord } from '../types';

@customElement('bilirubin-chart')
export class BilirubinChart extends LitElement {
  @property({ type: Array })
  public records: BilirubinRecord[] = [];

  @state()
  private showInput = false;

  @state()
  private showTable = false;

  @state()
  private inputDate = '';

  @state()
  private inputTotal = '';

  @state()
  private inputDirect = '';

  @state()
  private inputIndirect = '';

  @query('#bilirubin-canvas')
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
      background: #1890ff;
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
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
    }
    .chart-canvas-container {
      position: relative;
      height: 250px;
      width: 100%;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
    }
    .input-form {
      background: #f8f6ff;
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
      border-color: #1890ff;
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
      background: #1890ff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .legend {
      display: flex;
      gap: 16px;
      margin-top: 12px;
      justify-content: center;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #666;
    }
    .legend-color {
      width: 12px;
      height: 3px;
      border-radius: 2px;
    }
    .legend-color.total {
      background: #ff4d4f;
    }
    .legend-color.direct {
      background: #52c41a;
    }
    .legend-color.indirect {
      background: #1890ff;
    }
    .normal-range {
      font-size: 11px;
      color: #999;
      text-align: center;
      margin-top: 8px;
    }
    .table-toggle-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      cursor: pointer;
      margin-top: 12px;
      transition: all 0.2s;
    }
    .table-toggle-btn:hover {
      background: #e8e8e8;
    }
    .table-toggle-btn.active {
      background: #e6f7ff;
      color: #1890ff;
    }
    .data-table {
      margin-top: 16px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #f0f0f0;
    }
    .data-table table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .data-table th {
      background: #fafafa;
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
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
  `;

  private getSortedRecords(): BilirubinRecord[] {
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
          label: '总胆红素',
          data: sortedRecords.map(r => r.total),
          borderColor: '#ff4d4f',
          backgroundColor: 'rgba(255, 77, 79, 0.1)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: '直接胆红素',
          data: sortedRecords.map(r => r.direct),
          borderColor: '#52c41a',
          backgroundColor: 'rgba(82, 196, 26, 0.1)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: '间接胆红素',
          data: sortedRecords.map(r => r.indirect),
          borderColor: '#1890ff',
          backgroundColor: 'rgba(24, 144, 255, 0.1)',
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
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'μmol/L'
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
    this.chart.data.datasets[0].data = sortedRecords.map(r => r.total);
    this.chart.data.datasets[1].data = sortedRecords.map(r => r.direct);
    this.chart.data.datasets[2].data = sortedRecords.map(r => r.indirect);
    this.chart.update();
  }

  protected updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('records')) {
      this.updateChart();
    }
  }

  private handleAddClick(): void {
    this.inputDate = new Date().toISOString().split('T')[0];
    this.inputTotal = '';
    this.inputDirect = '';
    this.inputIndirect = '';
    this.showInput = true;
  }

  private handleCancel(): void {
    this.showInput = false;
  }

  private handleToggleTable(): void {
    this.showTable = !this.showTable;
  }

  private handleSave(): void {
    if (!this.inputDate || !this.inputTotal) return;

    const total = parseFloat(this.inputTotal) || 0;
    const direct = parseFloat(this.inputDirect) || 0;
    const indirect = parseFloat(this.inputIndirect) || (total - direct);

    this.dispatchEvent(new CustomEvent('add-record', {
      bubbles: true,
      composed: true,
      detail: {
        id: Date.now().toString(),
        date: this.inputDate,
        total,
        direct,
        indirect,
        unit: 'μmol/L'
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
          <span class="chart-title">📊 胆红素指标趋势</span>
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
            <canvas id="bilirubin-canvas"></canvas>
          </div>
          <div class="legend">
            <div class="legend-item">
              <div class="legend-color total"></div>
              总胆红素
            </div>
            <div class="legend-item">
              <div class="legend-color direct"></div>
              直接胆红素
            </div>
            <div class="legend-item">
              <div class="legend-color indirect"></div>
              间接胆红素
            </div>
          </div>
          <div class="normal-range">
            正常范围：总胆红素 5.1-19.0 μmol/L | 直接胆红素 0-6.8 μmol/L
          </div>
          ${this.showTable ? html`
            <div class="data-table">
              <table>
                <thead>
                  <tr>
                    <th>日期</th>
                    <th>总胆红素</th>
                    <th>直接胆红素</th>
                    <th>间接胆红素</th>
                  </tr>
                </thead>
                <tbody>
                  ${sortedRecords.map(record => html`
                    <tr>
                      <td>${new Date(record.date).toLocaleDateString('zh-CN')}</td>
                      <td>${record.total} μmol/L</td>
                      <td>${record.direct} μmol/L</td>
                      <td>${record.indirect} μmol/L</td>
                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          ` : ''}
        ` : html`
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity: 0.5; margin-bottom: 12px;">
              <path d="M3 3v18h18"></path>
              <path d="M18 17l-5-5-4 4-4-4"></path>
            </svg>
            <p>暂无胆红素记录</p>
            <p style="font-size: 12px; margin-top: 4px;">点击上方按钮录入第一次数据</p>
          </div>
        `}

        ${this.showInput ? html`
          <div class="input-form">
            <div class="input-title">录入胆红素指标</div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">日期</div>
                <input type="date" class="input-field" .value="${this.inputDate}" @input="${(e: Event) => this.inputDate = (e.target as HTMLInputElement).value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">总胆红素 (μmol/L)</div>
                <input type="number" class="input-field" placeholder="如：25.5" .value="${this.inputTotal}" @input="${(e: Event) => this.inputTotal = (e.target as HTMLInputElement).value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">直接胆红素 (μmol/L)</div>
                <input type="number" class="input-field" placeholder="选填，自动计算间接" .value="${this.inputDirect}" @input="${(e: Event) => this.inputDirect = (e.target as HTMLInputElement).value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">间接胆红素 (μmol/L)</div>
                <input type="number" class="input-field" placeholder="选填" .value="${this.inputIndirect}" @input="${(e: Event) => this.inputIndirect = (e.target as HTMLInputElement).value}">
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
    'bilirubin-chart': BilirubinChart;
  }
}