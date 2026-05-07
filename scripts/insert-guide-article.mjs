// 将指南文章插入到 Supabase 数据库的脚本
// 使用方式: node scripts/insert-guide-article.mjs

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const SUPABASE_URL = 'https://guioeoxticwrlcwomwsc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QpmXggBCYabyzBvXv0Phlw_O6wZAt7f';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 读取 md 文件
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mdPath = join(__dirname, '..', 'std_2025.md');
const rawContent = readFileSync(mdPath, 'utf-8');

// 将原始文本转为 Markdown 格式
function toMarkdown(text) {
  return text
    .split('\n')
    .map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      
      // 推荐意见行加粗
      if (trimmed.startsWith('推荐意见') || trimmed.startsWith('推荐建议')) {
        return `> **${trimmed}**`;
      }
      
      // 一级标题（一、二、三...）
      if (/^[一二三四五六七八九十]+、/.test(trimmed)) {
        return `## ${trimmed}`;
      }
      
      // 二级标题（（一）（二）...）
      if (/^（[一二三四五六七八九十]+）/.test(trimmed)) {
        return `### ${trimmed}`;
      }
      
      // 数字标题（1. 2. 3. ...）
      if (/^\d+\./.test(trimmed)) {
        return `#### ${trimmed}`;
      }
      
      return trimmed;
    })
    .join('\n');
}

const markdownContent = toMarkdown(rawContent);

// 构建完整的文章内容
const fullContent = `# 肝门部胆管癌诊断和治疗指南（2025版）

> **来源**：中华消化外科杂志, 2025, 24(1): 1-20
> **作者**：中国研究型医院学会肝胆胰外科专业委员会，《中华消化外科杂志》编辑委员会
> **通信作者**：董家鸿、李相成、项灿宏、陈敏
> **DOI**：10.3760/cma.j.cn115610-20250106-00010
> **在线阅读**：https://www.liangyihui.net/doc/143483

---

${markdownContent}

---

**引用格式**：
中国研究型医院学会肝胆胰外科专业委员会,《中华消化外科杂志》编辑委员会.肝门部胆管癌诊断和治疗指南（2025版）[J].中华消化外科杂志,2025,24(1):1-20.`;

async function insertArticle() {
  console.log('正在插入文章到 Supabase...');
  
  const { data, error } = await supabase
    .from('articles')
    .insert({
      title: '肝门部胆管癌诊断和治疗指南（2025版）',
      summary: '中国研究型医院学会肝胆胰外科专业委员会和《中华消化外科杂志》编辑委员会组织全国肝门部胆管癌领域专家共同制订的2025版诊疗指南，涵盖诊断、分型分期、可切除性评估、手术方式、系统治疗、随访监测等完整诊疗环节。',
      content: fullContent,
      author: '中国研究型医院学会肝胆胰外科专业委员会',
      tags: ['指南', '2025版', '肝门部胆管癌', '诊疗规范', '手术', '化疗', '靶向治疗', '免疫治疗'],
      is_published: true,
      published_at: new Date().toISOString()
    })
    .select()
    .single();

  if (error) {
    console.error('插入失败:', error);
    process.exit(1);
  }

  console.log('✅ 文章插入成功！');
  console.log('ID:', data.id);
  console.log('标题:', data.title);
  console.log('标签:', data.tags);
}

insertArticle();
