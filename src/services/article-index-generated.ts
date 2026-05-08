// 文章索引配置 - 由 scripts/scan-articles.mjs 自动生成
// 生成时间: 2026-05-08T08:23:49.256Z

export interface ArticleIndex {
  id: string;
  slug: string;
  title: string;
  summary: string;
  author: string;
  tags: string[];
  components?: import('../types').EmbeddedComponent[];
  publishedAt: string;
}

// 文章索引列表
export const articleIndex: ArticleIndex[] = [
  {
    id: 'guide-2025',
    slug: 'guide-2025',
    title: '肝门部胆管癌诊断和治疗指南（2025版）',
    summary: '',
    author: '中国研究型医院学会肝胆胰外科专业委员会',
    tags: [],
    components: [],
    publishedAt: '2025-01-22'
  },
  {
    id: 'recent-advantages-2026',
    slug: 'recent-advantages-2026',
    title: '胆道癌系统治疗最新进展文献综述 - pCCA相关内容提炼',
    summary: '',
    author: 'Hussain MM, et al.',
    tags: [],
    components: [],
    publishedAt: '2026-03-15'
  }
];