import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { Archive, Disease, BilirubinRecord, DrainageRecord, StageSelectResult } from './types';
import './components/disease-selector';
import './components/stage-selector';
import './components/stage-guide';
import './components/archive-card';
import './pages/archive-list-page';
import './pages/archive-detail-page';
import './pages/pathology-detail-page';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state()
  private archives: Archive[] = [];

  @state()
  private currentPage: 'archive-list' | 'archive-detail' | 'pathology-detail' = 'archive-list';

  @state()
  private currentArchive: Archive | null = null;

  @state()
  private showDiseaseSelector = false;

  @state()
  private showStageSelector = false;

  private diseases: Disease[] = [
    {
      id: 'hilar-cholangiocarcinoma',
      name: '肝门胆管癌',
      desc: '发生在肝门部的胆管癌',
      icon: '🫀',
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

  connectedCallback() {
    super.connectedCallback();
    this.archives = this.loadArchives();
    this.setupNavigation();
  }

  private loadArchives(): Archive[] {
    const saved = localStorage.getItem('canotion-archives');
    return saved ? JSON.parse(saved) : [];
  }

  private saveArchives(): void {
    localStorage.setItem('canotion-archives', JSON.stringify(this.archives));
  }

  private setupNavigation(): void {
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.hash);
    });
    this.handleRoute(window.location.hash || '#/');
  }

  private handleRoute(hash: string): void {
    if (hash === '' || hash === '#/' || hash === '#') {
      this.showArchiveList();
    } else if (hash.startsWith('#/archive/')) {
      const archiveId = hash.replace('#/archive/', '');
      this.viewArchive(archiveId);
    } else if (hash === '#/pathology-detail') {
      this.currentPage = 'pathology-detail';
    } else {
      this.showArchiveList();
    }
  }

  private navigateTo(path: string): void {
    window.location.hash = path;
  }

  private showArchiveList(): void {
    this.currentPage = 'archive-list';
    this.currentArchive = null;
  }

  private viewArchive(archiveId: string): void {
    const archive = this.archives.find(a => a.id === archiveId);
    if (archive) {
      this.currentArchive = archive;
      this.currentPage = 'archive-detail';
    } else {
      this.showArchiveList();
    }
  }

  private createArchive(disease: Disease): void {
    const archive: Archive = {
      id: Date.now().toString(),
      diseaseType: disease.id,
      diseaseName: disease.name,
      createdAt: new Date().toISOString(),
      completedExamIds: [],
      completedTreatmentIds: [],
      currentStage: 'examination',
      bilirubinRecords: [],
      drainageRecords: []
    };
    this.archives = [archive, ...this.archives];
    this.saveArchives();
    this.navigateTo(`#/archive/${archive.id}`);
  }

  private updateArchiveStage(result: StageSelectResult): void {
    if (!this.currentArchive) return;
    const archive = this.archives.find(a => a.id === this.currentArchive!.id);
    if (archive) {
      archive.completedExamIds = result.completedExamIds;
      archive.completedTreatmentIds = result.completedTreatmentIds;
      archive.currentStage = result.currentStage;
      this.saveArchives();
      this.currentArchive = { ...archive };
      this.archives = [...this.archives];
    }
  }

  private addBilirubinRecord(record: BilirubinRecord): void {
    if (!this.currentArchive) return;
    const archive = this.archives.find(a => a.id === this.currentArchive!.id);
    if (archive) {
      if (!archive.bilirubinRecords) {
        archive.bilirubinRecords = [];
      }
      const exists = archive.bilirubinRecords.some(r => r.id === record.id);
      if (exists) return;
      archive.bilirubinRecords = [record, ...archive.bilirubinRecords];
      this.saveArchives();
      this.currentArchive = { ...archive };
      this.archives = [...this.archives];
    }
  }

  private addDrainageRecord(record: DrainageRecord): void {
    if (!this.currentArchive) return;
    const archive = this.archives.find(a => a.id === this.currentArchive!.id);
    if (archive) {
      if (!archive.drainageRecords) {
        archive.drainageRecords = [];
      }
      const exists = archive.drainageRecords.some(r => r.id === record.id);
      if (exists) return;
      archive.drainageRecords = [record, ...archive.drainageRecords];
      this.saveArchives();
      this.currentArchive = { ...archive };
      this.archives = [...this.archives];
    }
  }

  private updatePortalVeinThrombus(hasPortalVeinTumorThrombus: boolean): void {
    if (!this.currentArchive) return;
    const archive = this.archives.find(a => a.id === this.currentArchive!.id);
    if (archive) {
      archive.hasPortalVeinTumorThrombus = hasPortalVeinTumorThrombus;
      this.saveArchives();
      this.currentArchive = { ...archive };
      this.archives = [...this.archives];
    }
  }

  private deleteArchive(archiveId: string): void {
    this.archives = this.archives.filter(a => a.id !== archiveId);
    this.saveArchives();
    this.showArchiveList();
  }

  private handleCreateArchive(): void {
    this.showDiseaseSelector = true;
  }

  private handleDiseaseSelect(e: CustomEvent<Disease>): void {
    const disease = e.detail;
    this.showDiseaseSelector = false;
    if (disease) {
      this.createArchive(disease);
    }
  }

  private handleDiseaseSelectorClose(): void {
    this.showDiseaseSelector = false;
  }

  private handleDeleteArchive(): void {
    if (this.currentArchive) {
      if (confirm('确定要删除这个档案吗？此操作无法撤销。')) {
        this.deleteArchive(this.currentArchive.id);
      }
    }
  }

  private handleBack(): void {
    this.navigateTo('#/');
  }

  private handleEditStage(): void {
    this.showStageSelector = true;
  }

  private handleStageSelect(e: CustomEvent<StageSelectResult>): void {
    this.showStageSelector = false;
    if (e.detail) {
      this.updateArchiveStage(e.detail);
    }
  }

  private handleStageSelectorClose(): void {
    this.showStageSelector = false;
  }

  private handleAddBilirubin(e: CustomEvent<BilirubinRecord>): void {
    this.addBilirubinRecord(e.detail);
  }

  private handleAddDrainage(e: CustomEvent<DrainageRecord>): void {
    this.addDrainageRecord(e.detail);
  }

  private handleUpdatePortalVeinThrombus(e: CustomEvent<{ hasPortalVeinTumorThrombus: boolean }>): void {
    this.updatePortalVeinThrombus(e.detail.hasPortalVeinTumorThrombus);
  }

  private getDiseaseForArchive(): Disease | null {
    if (!this.currentArchive) return null;
    return this.diseases.find(d => d.id === this.currentArchive!.diseaseType) || null;
  }

  render() {
    const disease = this.getDiseaseForArchive();

    return html`
      ${this.currentPage === 'archive-list' ? html`
        <archive-list-page
          .archives="${this.archives}"
          @create-archive="${this.handleCreateArchive}"
        ></archive-list-page>
      ` : ''}
      ${this.currentPage === 'archive-detail' && this.currentArchive && disease ? html`
        <archive-detail-page
          .archive="${this.currentArchive}"
          .disease="${disease}"
          @delete-archive="${this.handleDeleteArchive}"
          @back="${this.handleBack}"
          @edit-stage="${this.handleEditStage}"
          @add-bilirubin="${this.handleAddBilirubin}"
          @add-drainage="${this.handleAddDrainage}"
          @update-portal-vein-thrombus="${this.handleUpdatePortalVeinThrombus}"
        ></archive-detail-page>
      ` : ''}
      ${this.currentPage === 'pathology-detail' ? html`
        <pathology-detail-page></pathology-detail-page>
      ` : ''}

      ${this.showDiseaseSelector ? html`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleDiseaseSelectorClose}"
        ></disease-selector>
      ` : ''}

      ${this.showStageSelector && disease && this.currentArchive ? html`
        <stage-selector
          .disease="${disease}"
          .completedExamIds="${this.currentArchive.completedExamIds || []}"
          .completedTreatmentIds="${this.currentArchive.completedTreatmentIds || []}"
          @stage-select="${this.handleStageSelect}"
          @close="${this.handleStageSelectorClose}"
        ></stage-selector>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}