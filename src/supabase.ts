// Supabase 功能已移除，项目使用本地 Markdown 文件模式
// 此文件保留为空以避免导入错误

export const supabase = null;

// 文章管理功能已移至本地文件模式
export async function getPublishedArticles() {
  return [];
}

export async function getAllArticles() {
  return [];
}

export async function getArticleById(id: string) {
  return null;
}

export async function getArticlesByTag(tag: string) {
  return [];
}

export async function createArticle(article: any) {
  throw new Error('文章编辑功能已禁用');
}

export async function updateArticle(id: string, article: any) {
  throw new Error('文章编辑功能已禁用');
}

export async function deleteArticle(id: string) {
  throw new Error('文章编辑功能已禁用');
}

export async function searchArticles(keyword: string) {
  return [];
}
