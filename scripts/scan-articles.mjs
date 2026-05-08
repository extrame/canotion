#!/usr/bin/env node
// 扫描 docs/articles 目录下的所有 md 文件，生成文章索引
// 使用方式: node scripts/scan-articles.mjs

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontmatterRegex);

  if (!match) return null;

  const frontmatterText = match[1];
  const frontmatter = {};

  let currentKey = null;
  let currentValue = '';
  let inArray = false;
  let arrayItems = [];
  let inObject = false;
  let objectDepth = 0;

  const lines = frontmatterText.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const indent = line.match(/^(\s*)/)[1].length;

    if (indent === 0) {
      if (currentKey) {
        frontmatter[currentKey] = inArray ? arrayItems : (currentValue.trim() || '');
      }

      if (line.includes(':')) {
        const colonIndex = line.indexOf(':');
        currentKey = line.slice(0, colonIndex).trim();
        currentValue = line.slice(colonIndex + 1).trim();

        if (currentValue === '' || currentValue === '[]') {
          inArray = false;
          arrayItems = [];
          if (currentValue === '[]') {
            frontmatter[currentKey] = [];
            currentKey = null;
          }
        } else if (currentValue.startsWith('[')) {
          const arrayStr = currentValue;
          if (!arrayStr.endsWith(']')) {
            inArray = true;
            arrayItems = [];
            const match = arrayStr.match(/\[(.*)\]/s);
            if (match) {
              try {
                arrayItems = JSON.parse(arrayStr);
              } catch {
                arrayItems = match[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
              }
            }
          }
        } else {
          frontmatter[currentKey] = currentValue.replace(/^["']|["']$/g, '');
          currentKey = null;
        }
      }
    } else if (inArray && indent > 0 && line.trim().startsWith('-')) {
      const itemStr = line.replace(/^\s*-\s*/, '').trim();
      if (itemStr.startsWith('{')) {
        inObject = true;
        objectDepth = 1;
        arrayItems.push(itemStr.replace(/^[{,]\s*/, ''));
      } else {
        arrayItems.push(itemStr.replace(/^["']|["']$/g, ''));
      }
    } else if (inArray && line.trim() === '') {
      continue;
    }
  }

  if (currentKey) {
    frontmatter[currentKey] = inArray ? arrayItems : currentValue.trim();
  }

  return frontmatter;
}

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function generateArticleIndex(articlesDir) {
  const files = readdirSync(articlesDir).filter(f => f.endsWith('.md'));

  const indexEntries = files.map(filename => {
    const slug = filename.replace('.md', '');
    const content = readFileSync(join(articlesDir, filename), 'utf-8');
    const fm = parseFrontmatter(content);

    if (!fm) {
      console.warn(`⚠️ ${filename} 缺少 frontmatter，跳过`);
      return null;
    }

    const id = fm.id || slug;
    const title = fm.title || slug;
    const summary = fm.summary || '';
    const author = fm.author || '';
    const tags = Array.isArray(fm.tags) ? fm.tags : [];
    const publishedAt = fm.publishedAt || fm.date || new Date().toISOString().split('T')[0];

    let components = [];
    if (Array.isArray(fm.components)) {
      components = fm.components.map(c => ({
        id: c.id || `${toCamelCase(slug)}-matcher`,
        type: c.type,
        title: c.title || '',
        config: c.config || {}
      }));
    }

    return {
      id,
      slug,
      title,
      summary,
      author,
      tags,
      components,
      publishedAt
    };
  }).filter(Boolean);

  return indexEntries;
}

function generateArticleLoader(indexEntries) {
  const imports = indexEntries.map((entry, i) =>
    `  {\n    id: '${entry.id}',\n    slug: '${entry.slug}',\n    title: '${entry.title.replace(/'/g, "\\'")}',\n    summary: '${entry.summary.replace(/'/g, "\\'")}',\n    author: '${entry.author.replace(/'/g, "\\'")}',\n    tags: ${JSON.stringify(entry.tags)},\n    components: ${JSON.stringify(entry.components)},\n    publishedAt: '${entry.publishedAt}'\n  }`
  ).join(',\n');

  return `// 文章索引配置 - 由 scripts/scan-articles.mjs 自动生成
// 生成时间: ${new Date().toISOString()}

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
${imports}
];`;
}

const articlesDir = join(__dirname, '..', 'docs', 'articles');
const outputPath = join(__dirname, '..', 'src', 'services', 'article-index-generated.ts');

console.log('📚 扫描文章目录:', articlesDir);

try {
  const indexEntries = generateArticleIndex(articlesDir);
  console.log(`✅ 扫描到 ${indexEntries.length} 篇文章`);

  indexEntries.forEach(entry => {
    console.log(`   - ${entry.title} (${entry.slug})`);
  });

  const generatedCode = generateArticleLoader(indexEntries);
  writeFileSync(outputPath, generatedCode, 'utf-8');
  console.log(`\n✅ 已生成文章索引: ${outputPath}`);
  console.log('\n💡 请将以下内容复制到 article-loader.ts 的 articleIndex 数组中:');
  console.log('   import { articleIndex } from "./article-index-generated";');
} catch (error) {
  console.error('❌ 扫描失败:', error.message);
  process.exit(1);
}
