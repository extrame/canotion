import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import type { BilirubinRecord } from '../types';

Chart.register(annotationPlugin);

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

  @state()
  private editingId: string | null = null;

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
    .data-table tr:hover .row-actions {
      opacity: 1;
    }
    .row-actions {
      opacity: 0;
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      transition: opacity 0.2s;
    }
    .row-actions.show {
      opacity: 1;
    }
    .action-btn {
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }
    .action-btn.edit {
      background: #e6f7ff;
      color: #1890ff;
    }
    .action-btn.edit:hover {
      background: #1890ff;
      color: white;
    }
    .action-btn.delete {
      background: #fff1f0;
      color: #ff4d4f;
    }
    .action-btn.delete:hover {
      background: #ff4d4f;
      color: white;
    }
    .no-data {
      text-align: center;
      padding: 20px;
      color: #999;
      font-size: 14px;
    }
    .estimate-card {
      margin-top: 16px;
      padding: 16px;
      border-radius: 12px;
      background: linear-gradient(135deg, #f6ffed 0%, #e6fff1 100%);
      border: 1px solid #b7eb8f;
    }
    .estimate-card.warning {
      background: linear-gradient(135deg, #fffbe6 0%, #fff7e6 100%);
      border-color: #ffe58f;
    }
    .estimate-card.danger {
      background: linear-gradient(135deg, #fff1f0 0%, #ffe7e6 100%);
      border-color: #ffccc7;
    }
    .estimate-card.success {
      background: linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%);
      border-color: #52c41a;
    }
    .estimate-card.up {
      background: linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%);
      border-color: #ff4d4f;
    }
    .confidence-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      margin-left: 8px;
    }
    .confidence-badge.high {
      background: #52c41a;
      color: white;
    }
    .confidence-badge.medium {
      background: #faad14;
      color: white;
    }
    .confidence-badge.low {
      background: #999;
      color: white;
    }
    .estimate-title {
      font-size: 13px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .estimate-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .estimate-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
    }
    .estimate-label {
      color: #666;
    }
    .estimate-value {
      font-weight: 600;
      color: #333;
    }
    .estimate-value.danger {
      color: #ff4d4f;
    }
    .estimate-value.warning {
      color: #faad14;
    }
    .estimate-value.success {
      color: #52c41a;
    }
    .estimate-message {
      font-size: 12px;
      color: #666;
      margin-top: 8px;
      line-height: 1.5;
    }
  `;

  private getSortedRecords(): BilirubinRecord[] {
    if (!this.records || this.records.length === 0) return [];
    return [...this.records].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  private calculateEstimate(): { daysTo50: number; trend: 'down' | 'up' | 'stable'; currentValue: number; confidence: 'high' | 'medium' | 'low'; message: string } | null {
    const sortedRecords = this.getSortedRecords();
    if (sortedRecords.length < 2) return null;

    const n = sortedRecords.length;
    const dates = sortedRecords.map(r => new Date(r.date).getTime());
    const values = sortedRecords.map(r => r.total);

    const xMin = dates[0];
    const xDays = dates.map(d => (d - xMin) / (1000 * 60 * 60 * 24));
    const lastValue = values[n - 1];
    const lastDateDays = xDays[n - 1];

    if (lastValue <= 50) {
      return { daysTo50: 0, trend: 'down', currentValue: lastValue, confidence: 'high', message: '已达到可治疗水平' };
    }

    // 加权线性回归：近期数据权重更高
    // 权重 = 1 + (i / n) * 2，即第一个点权重1，最后一个点权重3
    let weightedNumerator = 0;
    let weightedDenominator = 0;
    let weightedXMean = 0;
    let weightedYMean = 0;
    let totalWeight = 0;

    for (let i = 0; i < n; i++) {
      const weight = 1 + (i / n) * 2;
      totalWeight += weight;
      weightedXMean += xDays[i] * weight;
      weightedYMean += values[i] * weight;
    }
    weightedXMean /= totalWeight;
    weightedYMean /= totalWeight;

    for (let i = 0; i < n; i++) {
      const weight = 1 + (i / n) * 2;
      const dx = xDays[i] - weightedXMean;
      const dy = values[i] - weightedYMean;
      weightedNumerator += weight * dx * dy;
      weightedDenominator += weight * dx * dx;
    }

    if (weightedDenominator === 0) {
      return { daysTo50: -1, trend: 'stable', currentValue: lastValue, confidence: 'low', message: '数据不足以预测' };
    }

    const slope = weightedNumerator / weightedDenominator; // 每天变化值

    // 计算R²评估拟合质量
    let ssRes = 0;
    let ssTot = 0;
    for (let i = 0; i < n; i++) {
      const predicted = weightedYMean + slope * (xDays[i] - weightedXMean);
      ssRes += Math.pow(values[i] - predicted, 2);
      ssTot += Math.pow(values[i] - weightedYMean, 2);
    }
    const rSquared = ssTot > 0 ? 1 - (ssRes / ssTot) : 0;

    // 计算近期趋势（最近3个点）
    let recentSlope = 0;
    if (n >= 3) {
      const recentDates = xDays.slice(-3);
      const recentValues = values.slice(-3);
      const recentN = 3;
      let recentSumX = 0, recentSumY = 0, recentSumXY = 0, recentSumXX = 0;
      for (let i = 0; i < recentN; i++) {
        recentSumX += recentDates[i];
        recentSumY += recentValues[i];
        recentSumXY += recentDates[i] * recentValues[i];
        recentSumXX += recentDates[i] * recentDates[i];
      }
      const recentDenom = recentN * recentSumXX - recentSumX * recentSumX;
      if (recentDenom !== 0) {
        recentSlope = (recentN * recentSumXY - recentSumX * recentSumY) / recentDenom;
      }
    }

    // 综合斜率：近期斜率权重更高
    const combinedSlope = n >= 3 ? slope * 0.3 + recentSlope * 0.7 : slope;

    // 判断趋势
    let trend: 'down' | 'up' | 'stable' = 'stable';
    if (combinedSlope < -2) trend = 'down';
    else if (combinedSlope > 2) trend = 'up';

    // 判断置信度
    let confidence: 'high' | 'medium' | 'low' = 'low';
    if (n >= 5 && rSquared > 0.7) confidence = 'high';
    else if (n >= 3 && rSquared > 0.5) confidence = 'medium';

    // 计算预测
    let daysTo50: number;
    let message: string;

    if (trend !== 'down' || combinedSlope >= 0) {
      daysTo50 = -1;
      if (trend === 'up') {
        message = `胆红素正在上升 (+${Math.abs(combinedSlope).toFixed(1)} μmol/L/天)，需要关注`;
      } else {
        message = '胆红素变化趋于稳定，难以预估下降时间';
      }
    } else {
      daysTo50 = Math.ceil((lastValue - 50) / Math.abs(combinedSlope));

      if (daysTo50 <= 7) {
        message = `预计约${daysTo50}天可达标，趋势良好`;
      } else if (daysTo50 <= 30) {
        message = `预计约${daysTo50}天可达标，继续保持当前治疗`;
      } else {
        message = `预计需要${daysTo50}天以上，建议与医生讨论治疗方案`;
      }
    }

    return { daysTo50, trend, currentValue: lastValue, confidence, message };
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
          },
          annotation: {
            annotations: {
              zone1: {
                type: 'box',
                yMin: 0,
                yMax: 50,
                backgroundColor: 'rgba(82, 196, 26, 0.1)',
                borderWidth: 0,
                label: {
                  display: true,
                  content: '可治疗',
                  position: 'end',
                  color: '#52c41a',
                  font: { size: 10 }
                }
              },
              zone2: {
                type: 'box',
                yMin: 50,
                yMax: 100,
                backgroundColor: 'rgba(250, 173, 20, 0.1)',
                borderWidth: 0,
                label: {
                  display: true,
                  content: '需评估',
                  position: 'end',
                  color: '#faad14',
                  font: { size: 10 }
                }
              },
              zone3: {
                type: 'box',
                yMin: 100,
                yMax: 400,
                backgroundColor: 'rgba(255, 77, 79, 0.1)',
                borderWidth: 0,
                label: {
                  display: true,
                  content: '待治疗',
                  position: 'end',
                  color: '#ff4d4f',
                  font: { size: 10 }
                }
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 400,
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

  private handleEdit(record: BilirubinRecord): void {
    this.editingId = record.id;
    this.inputDate = record.date;
    this.inputTotal = record.total.toString();
    this.inputDirect = record.direct.toString();
    this.inputIndirect = record.indirect.toString();
    this.showInput = true;
  }

  private handleDelete(record: BilirubinRecord): void {
    if (confirm(`确定要删除 ${new Date(record.date).toLocaleDateString('zh-CN')} 的记录吗？`)) {
      this.dispatchEvent(new CustomEvent('delete-record', {
        bubbles: true,
        composed: true,
        detail: { id: record.id }
      }));
    }
  }

  private handleSave(): void {
    if (!this.inputDate || !this.inputTotal) return;

    const total = parseFloat(this.inputTotal) || 0;
    const direct = parseFloat(this.inputDirect) || 0;
    const indirect = parseFloat(this.inputIndirect) || (total - direct);

    if (this.editingId) {
      this.dispatchEvent(new CustomEvent('update-record', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.editingId,
          date: this.inputDate,
          total,
          direct,
          indirect,
          unit: 'μmol/L'
        }
      }));
    } else {
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
    }

    this.showInput = false;
    this.editingId = null;
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
    const estimate = this.calculateEstimate();

    return html`
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">胆红素指标趋势</span>
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
          ${estimate ? html`
            <div class="estimate-card ${estimate.currentValue <= 50 ? 'success' : estimate.trend === 'up' ? 'up' : estimate.daysTo50 > 0 && estimate.daysTo50 <= 30 ? 'warning' : 'danger'}">
              <div class="estimate-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                到达可治疗水平预估
                <span class="confidence-badge ${estimate.confidence}">
                  ${estimate.confidence === 'high' ? '高置信' : estimate.confidence === 'medium' ? '中置信' : '低置信'}
                </span>
              </div>
              <div class="estimate-content">
                <div class="estimate-row">
                  <span class="estimate-label">当前总胆红素</span>
                  <span class="estimate-value ${estimate.currentValue <= 50 ? 'success' : estimate.currentValue <= 100 ? 'warning' : 'danger'}">${estimate.currentValue.toFixed(1)} μmol/L</span>
                </div>
                <div class="estimate-row">
                  <span class="estimate-label">趋势状态</span>
                  <span class="estimate-value">${estimate.trend === 'down' ? '📉 下降中' : estimate.trend === 'up' ? '📈 上升中 ⚠️' : '➡️ 稳定'}</span>
                </div>
                ${estimate.currentValue > 50 && estimate.daysTo50 > 0 ? html`
                  <div class="estimate-row">
                    <span class="estimate-label">预计到达50的时间</span>
                    <span class="estimate-value ${estimate.daysTo50 <= 30 ? 'warning' : 'danger'}">约 ${estimate.daysTo50} 天</span>
                  </div>
                ` : ''}
              </div>
              <div class="estimate-message">
                ${estimate.message}
              </div>
            </div>
          ` : ''}
          ${this.showTable ? html`
            <div class="data-table">
              <table>
                <thead>
                  <tr>
                    <th>日期</th>
                    <th>总胆红素</th>
                    <th>直接胆红素</th>
                    <th>间接胆红素</th>
                    <th style="width: 100px;">操作</th>
                  </tr>
                </thead>
                <tbody>
                  ${sortedRecords.map(record => html`
                    <tr>
                      <td>${new Date(record.date).toLocaleDateString('zh-CN')}</td>
                      <td>${record.total} μmol/L</td>
                      <td>${record.direct} μmol/L</td>
                      <td>${record.indirect} μmol/L</td>
                      <td>
                        <div class="row-actions show">
                          <button class="action-btn edit" @click="${() => this.handleEdit(record)}">
                            编辑
                          </button>
                          <button class="action-btn delete" @click="${() => this.handleDelete(record)}">
                            删除
                          </button>
                        </div>
                      </td>
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
            <div class="input-title">${this.editingId ? '编辑胆红素指标' : '录入胆红素指标'}</div>
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