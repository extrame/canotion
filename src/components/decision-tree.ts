import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Archive } from '../types';

interface DecisionNode {
  id: string;
  title: string;
  description?: string;
  children?: DecisionNode[];
  condition?: (archive: Archive) => boolean;
  action?: string;
  highlight?: boolean;
}

@customElement('decision-tree')
export class DecisionTree extends LitElement {
  @property({ type: Object }) archive?: Archive;
  @property({ type: String }) type: 'diagnosis' | 'treatment' | 'followup' = 'treatment';
  
  @state() private expandedNodes: Set<string> = new Set();
  @state() private currentPath: string[] = [];

  static styles = css`
    :host {
      display: block;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .header-icon {
      font-size: 24px;
    }
    .header-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .tree-container {
      position: relative;
    }
    .node {
      position: relative;
      margin-bottom: 12px;
    }
    .node-content {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: #f8f9fa;
      border-radius: 10px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s;
    }
    .node-content:hover {
      background: #f0f0f0;
    }
    .node-content.active {
      background: #f0f5ff;
      border-color: #667eea;
    }
    .node-content.completed {
      background: #f6ffed;
      border-color: #52c41a;
    }
    .node-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    .node-text {
      flex: 1;
    }
    .node-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .node-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .node-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 600;
      white-space: nowrap;
    }
    .node-badge.current {
      background: #667eea;
      color: white;
    }
    .node-badge.completed {
      background: #52c41a;
      color: white;
    }
    .node-badge.pending {
      background: #d9d9d9;
      color: #666;
    }
    .expand-icon {
      font-size: 12px;
      color: #999;
      transition: transform 0.2s;
    }
    .expand-icon.expanded {
      transform: rotate(90deg);
    }
    .children {
      margin-left: 28px;
      padding-left: 16px;
      border-left: 2px solid #e8e8e8;
      margin-top: 8px;
    }
    .path-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      margin-bottom: 16px;
      color: white;
    }
    .path-title {
      font-size: 14px;
      font-weight: 600;
    }
    .path-steps {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      opacity: 0.9;
    }
    .path-step {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .path-arrow {
      opacity: 0.6;
    }
    .action-panel {
      margin-top: 16px;
      padding: 16px;
      background: #f0f5ff;
      border-radius: 10px;
      border-left: 4px solid #667eea;
    }
    .action-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .action-content {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    .action-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .action-btn:hover {
      opacity: 0.9;
    }
    .legend {
      display: flex;
      gap: 16px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #e8e8e8;
      font-size: 12px;
      color: #666;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .legend-dot.current {
      background: #667eea;
    }
    .legend-dot.completed {
      background: #52c41a;
    }
    .legend-dot.pending {
      background: #d9d9d9;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.calculateCurrentPath();
  }

  private getDecisionTree(): DecisionNode {
    switch (this.type) {
      case 'diagnosis':
        return this.getDiagnosisTree();
      case 'followup':
        return this.getFollowupTree();
      default:
        return this.getTreatmentTree();
    }
  }

  private getTreatmentTree(): DecisionNode {
    return {
      id: 'root',
      title: '治疗方案选择',
      description: '根据病情评估选择最佳治疗策略',
      children: [
        {
          id: 'resectable',
          title: '可切除肿瘤',
          description: '肿瘤可完全切除，无远处转移',
          condition: (a) => this.isResectable(a),
          children: [
            {
              id: 'surgery-direct',
              title: '直接手术',
              description: '胆红素<51，一般情况良好',
              condition: (a) => this.canDirectSurgery(a),
              action: '预约手术评估'
            },
            {
              id: 'preop-drainage',
              title: '术前引流+手术',
              description: '胆红素51-200，需先引流',
              condition: (a) => this.needsPreopDrainage(a),
              action: '安排PTBD/ENBD'
            }
          ]
        },
        {
          id: 'unresectable',
          title: '不可切除肿瘤',
          description: '肿瘤局部晚期或远处转移',
          condition: (a) => !this.isResectable(a),
          children: [
            {
              id: 'conversion-therapy',
              title: '转化治疗',
              description: '化疗/靶向/免疫治疗，争取手术机会',
              condition: (a) => this.mayBenefitFromConversion(a),
              action: '制定化疗方案'
            },
            {
              id: 'palliative-care',
              title: '姑息治疗',
              description: '以改善生活质量为主',
              condition: (a) => this.needsPalliativeCare(a),
              action: '多学科会诊'
            }
          ]
        }
      ]
    };
  }

  private getDiagnosisTree(): DecisionNode {
    return {
      id: 'root',
      title: '诊断流程',
      description: '从疑似到确诊的标准流程',
      children: [
        {
          id: 'screening',
          title: '初步筛查',
          description: '超声检查 + 肝功能 + 肿瘤标志物',
          children: [
            {
              id: 'imaging',
              title: '影像学检查',
              description: '增强CT + MRI/MRCP',
              action: '预约影像检查'
            },
            {
              id: 'biopsy',
              title: '病理确诊',
              description: 'ERCP/PTC活检或EUS穿刺',
              action: '安排活检'
            }
          ]
        }
      ]
    };
  }

  private getFollowupTree(): DecisionNode {
    return {
      id: 'root',
      title: '术后随访',
      description: '手术后的定期监测方案',
      children: [
        {
          id: 'early-followup',
          title: '早期随访（术后1-2年）',
          description: '每3个月复查一次',
          children: [
            {
              id: 'lab-check',
              title: '实验室检查',
              description: '肝功能、CA19-9、CEA',
              action: '定期验血'
            },
            {
              id: 'imaging-followup',
              title: '影像学复查',
              description: '每6个月CT/MRI',
              action: '预约复查'
            }
          ]
        }
      ]
    };
  }

  private isResectable(archive: Archive): boolean {
    // 根据档案数据判断是否可切除
    const bilirubinRecords = archive.bilirubinRecords || [];
    const latestBilirubin = bilirubinRecords[bilirubinRecords.length - 1]?.total || 0;
    // 简化判断：胆红素不是极高，且没有明确转移证据
    return latestBilirubin < 300;
  }

  private canDirectSurgery(archive: Archive): boolean {
    const bilirubinRecords = archive.bilirubinRecords || [];
    const latestBilirubin = bilirubinRecords[bilirubinRecords.length - 1]?.total || 0;
    return latestBilirubin < 51;
  }

  private needsPreopDrainage(archive: Archive): boolean {
    const bilirubinRecords = archive.bilirubinRecords || [];
    const latestBilirubin = bilirubinRecords[bilirubinRecords.length - 1]?.total || 0;
    return latestBilirubin >= 51 && latestBilirubin < 200;
  }

  private mayBenefitFromConversion(archive: Archive): boolean {
    return archive.currentStage === 'treatment' && !this.isResectable(archive);
  }

  private needsPalliativeCare(archive: Archive): boolean {
    // 晚期患者或一般情况差
    return false; // 简化判断
  }

  private calculateCurrentPath() {
    if (!this.archive) return;
    
    const tree = this.getDecisionTree();
    this.currentPath = this.findPath(tree, this.archive);
    this.expandedNodes = new Set(this.currentPath);
  }

  private findPath(node: DecisionNode, archive: Archive, path: string[] = []): string[] {
    const currentPath = [...path, node.id];
    
    if (!node.children || node.children.length === 0) {
      return currentPath;
    }

    // 找到第一个匹配条件的子节点
    for (const child of node.children) {
      if (!child.condition || child.condition(archive)) {
        return this.findPath(child, archive, currentPath);
      }
    }

    return currentPath;
  }

  private toggleNode(nodeId: string) {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
    this.requestUpdate();
  }

  private getNodeStatus(node: DecisionNode): 'current' | 'completed' | 'pending' {
    const index = this.currentPath.indexOf(node.id);
    if (index === -1) return 'pending';
    if (index === this.currentPath.length - 1) return 'current';
    return 'completed';
  }

  private handleAction(action: string) {
    this.dispatchEvent(new CustomEvent('action-click', {
      bubbles: true,
      composed: true,
      detail: { action }
    }));
  }

  private renderNode(node: DecisionNode, level: number = 0): unknown {
    const status = this.getNodeStatus(node);
    const isExpanded = this.expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const isActive = status === 'current';

    return html`
      <div class="node" style="margin-left: ${level * 20}px">
        <div 
          class="node-content ${status} ${isActive ? 'active' : ''}"
          @click="${() => hasChildren && this.toggleNode(node.id)}"
        >
          <span class="node-icon">
            ${status === 'completed' ? '✅' : 
              status === 'current' ? '📍' : 
              hasChildren ? '📁' : '📄'}
          </span>
          <div class="node-text">
            <div class="node-title">${node.title}</div>
            ${node.description ? html`
              <div class="node-desc">${node.description}</div>
            ` : ''}
          </div>
          <span class="node-badge ${status}">
            ${status === 'current' ? '当前' : 
              status === 'completed' ? '已完成' : '待进行'}
          </span>
          ${hasChildren ? html`
            <span class="expand-icon ${isExpanded ? 'expanded' : ''}">▶</span>
          ` : ''}
        </div>

        ${hasChildren && isExpanded ? html`
          <div class="children">
            ${node.children!.map(child => this.renderNode(child, level + 1))}
          </div>
        ` : ''}
      </div>
    `;
  }

  render() {
    const tree = this.getDecisionTree();
    const currentNode = this.findCurrentNode(tree);

    return html`
      <div class="header">
        <span class="header-icon">🌳</span>
        <span class="header-title">${tree.title}</span>
      </div>

      ${this.currentPath.length > 0 ? html`
        <div class="path-indicator">
          <span class="path-title">当前路径：</span>
          <div class="path-steps">
            ${this.currentPath.map((nodeId, index) => html`
              <span class="path-step">
                ${index > 0 ? html`<span class="path-arrow">→</span>` : ''}
                ${this.getNodeTitle(tree, nodeId)}
              </span>
            `)}
          </div>
        </div>
      ` : ''}

      <div class="tree-container">
        ${tree.children?.map(child => this.renderNode(child))}
      </div>

      ${currentNode?.action ? html`
        <div class="action-panel">
          <div class="action-title">💡 下一步行动建议</div>
          <div class="action-content">
            根据您当前的情况，建议：${currentNode.title}
          </div>
          <span class="action-btn" @click="${() => this.handleAction(currentNode.action!)}">
            ${currentNode.action} →
          </span>
        </div>
      ` : ''}

      <div class="legend">
        <div class="legend-item">
          <span class="legend-dot current"></span>
          <span>当前阶段</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot completed"></span>
          <span>已完成</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot pending"></span>
          <span>待进行</span>
        </div>
      </div>
    `;
  }

  private findCurrentNode(node: DecisionNode): DecisionNode | null {
    if (node.id === this.currentPath[this.currentPath.length - 1]) {
      return node;
    }
    if (node.children) {
      for (const child of node.children) {
        const found = this.findCurrentNode(child);
        if (found) return found;
      }
    }
    return null;
  }

  private getNodeTitle(node: DecisionNode, nodeId: string): string {
    if (node.id === nodeId) return node.title;
    if (node.children) {
      for (const child of node.children) {
        const title = this.getNodeTitle(child, nodeId);
        if (title) return title;
      }
    }
    return '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'decision-tree': DecisionTree;
  }
}
