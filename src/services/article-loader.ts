import type { Article, EmbeddedComponent } from '../types';

// 文章索引配置
export interface ArticleIndex {
  id: string;
  slug: string;
  title: string;
  summary: string;
  author: string;
  tags: string[];
  components?: EmbeddedComponent[];
  publishedAt: string;
}

// 文章索引列表
export const articleIndex: ArticleIndex[] = [
  {
    id: 'guide-2025',
    slug: 'guide-2025',
    title: '肝门部胆管癌诊断和治疗指南（2025版）',
    summary: '中国研究型医院学会肝胆胰外科专业委员会和《中华消化外科杂志》编辑委员会组织全国肝门部胆管癌领域专家共同制订的2025版诊疗指南，涵盖诊断、分型分期、可切除性评估、手术方式、系统治疗、随访监测等完整诊疗环节。',
    author: '中国研究型医院学会肝胆胰外科专业委员会',
    tags: ['指南', '2025版', '肝门部胆管癌', '诊疗规范', '手术', '化疗', '靶向治疗', '免疫治疗'],
    components: [
      {
        id: 'matcher-1',
        type: 'archive-matcher',
        title: '本文与您的档案匹配度'
      },
      {
        id: 'tree-1',
        type: 'decision-tree',
        title: '治疗方案决策树',
        config: { treeType: 'treatment' }
      }
    ],
    publishedAt: '2025-01-22'
  },
  {
    id: 'recent-advantages-2026',
    slug: 'recent-advantages-2026',
    title: '胆道癌系统治疗最新进展文献综述 - pCCA相关内容提炼',
    summary: '基于Hussain MM等发表的J Gastrointest Oncol (2026)文献综述，提炼与肝门部胆管癌(pCCA)相关的分子特征、靶向治疗和免疫治疗最新进展。',
    author: 'Hussain MM, et al.',
    tags: ['综述', '2026版', '胆道癌', 'pCCA', '肝门部胆管癌', '靶向治疗', '免疫治疗', 'HER2', 'FGFR2', 'IDH1'],
    components: [
      {
        id: 'matcher-1',
        type: 'archive-matcher',
        title: '本文与您的档案匹配度'
      }
    ],
    publishedAt: '2026-03-15'
  }
];

// 加载 Markdown 文件内容
export async function loadArticleContent(slug: string): Promise<string> {
  try {
    const response = await fetch(`/articles/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load article: ${response.status}`);
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error('Error loading article:', error);
    return '';
  }
}

// 解析 Markdown 中的 frontmatter
export function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterText = match[1];
  const body = match[2];
  
  const frontmatter: Record<string, any> = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      // 尝试解析数组
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          frontmatter[key] = JSON.parse(value);
        } catch {
          frontmatter[key] = value;
        }
      } else {
        frontmatter[key] = value;
      }
    }
  });
  
  return { frontmatter, body };
}

// 获取完整文章数据
export async function getArticle(slug: string): Promise<Article | null> {
  const index = articleIndex.find(a => a.slug === slug);
  if (!index) return null;
  
  const content = await loadArticleContent(slug);
  if (!content) return null;
  
  const { frontmatter, body } = parseFrontmatter(content);
  
  return {
    id: index.id,
    title: frontmatter.title || index.title,
    summary: index.summary,
    content: body,
    author: frontmatter.author || index.author,
    tags: frontmatter.tags || index.tags,
    embeddedComponents: index.components,
    createdAt: frontmatter.date || index.publishedAt,
    updatedAt: frontmatter.updated || index.publishedAt,
    is_published: true,
    published_at: index.publishedAt
  };
}

// 获取所有文章列表
export function getAllArticles(): Article[] {
  return articleIndex.map(index => ({
    id: index.id,
    title: index.title,
    summary: index.summary,
    content: '', // 列表不加载完整内容
    author: index.author,
    tags: index.tags,
    createdAt: index.publishedAt,
    updatedAt: index.publishedAt,
    is_published: true,
    published_at: index.publishedAt
  }));
}

// 搜索文章
export function searchArticles(keyword: string): Article[] {
  const lowerKeyword = keyword.toLowerCase();
  return articleIndex
    .filter(a => 
      a.title.toLowerCase().includes(lowerKeyword) ||
      a.summary.toLowerCase().includes(lowerKeyword) ||
      a.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
    )
    .map(index => ({
      id: index.id,
      title: index.title,
      summary: index.summary,
      content: '',
      author: index.author,
      tags: index.tags,
      createdAt: index.publishedAt,
      updatedAt: index.publishedAt,
      is_published: true,
      published_at: index.publishedAt
    }));
}

// 按标签筛选
export function getArticlesByTag(tag: string): Article[] {
  return articleIndex
    .filter(a => a.tags.includes(tag))
    .map(index => ({
      id: index.id,
      title: index.title,
      summary: index.summary,
      content: '',
      author: index.author,
      tags: index.tags,
      createdAt: index.publishedAt,
      updatedAt: index.publishedAt,
      is_published: true,
      published_at: index.publishedAt
    }));
}
