import { createClient } from '@supabase/supabase-js'
import type { Article } from './types'

// Supabase 项目配置（从环境变量读取）
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

// 验证配置
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ 缺少 Supabase 配置！请复制 .env.example 为 .env 并填入您的项目信息。')
}

export const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '')

// ==================== 文章管理服务 ====================

/**
 * 获取已发布的文章列表（前台展示）
 */
export async function getPublishedArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('获取文章失败:', error)
    throw error
  }

  return (data || []).map(dbArticleToArticle)
}

/**
 * 获取所有文章（后台管理 - 需要认证）
 */
export async function getAllArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('获取文章失败:', error)
    throw error
  }

  return (data || []).map(dbArticleToArticle)
}

/**
 * 根据ID获取文章
 */
export async function getArticleById(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('获取文章失败:', error)
    return null
  }

  return data ? dbArticleToArticle(data) : null
}

/**
 * 根据标签筛选文章
 */
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .contains('tags', [tag])
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('获取文章失败:', error)
    throw error
  }

  return (data || []).map(dbArticleToArticle)
}

/**
 * 创建文章（需要认证）
 */
export async function createArticle(article: Partial<Article> & { is_published?: boolean }): Promise<Article> {
  // 检查用户是否登录
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    throw new Error('请先登录')
  }

  const now = new Date().toISOString()
  const isPublished = article.is_published || false

  const { data, error } = await supabase
    .from('articles')
    .insert({
      title: article.title || '',
      summary: article.summary || '',
      content: article.content || '',
      author: article.author || '',
      cover_image: article.cover_image || '',
      tags: article.tags || [],
      is_published: isPublished,
      published_at: isPublished ? now : null,
      created_at: now,
      updated_at: now
    })
    .select()
    .single()

  if (error) {
    console.error('创建文章失败:', error)
    throw error
  }

  return dbArticleToArticle(data)
}

/**
 * 更新文章（需要认证）
 */
export async function updateArticle(
  id: string,
  article: Partial<Article> & { is_published?: boolean }
): Promise<Article> {
  // 检查用户是否登录
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    throw new Error('请先登录')
  }

  const now = new Date().toISOString()
  const updates: any = {
    ...article,
    updated_at: now
  }

  // 处理发布状态变化
  if (article.is_published !== undefined) {
    updates.is_published = article.is_published
    // 如果是首次发布，设置发布时间
    if (article.is_published && !article.published_at) {
      updates.published_at = now
    }
  }

  const { data, error } = await supabase
    .from('articles')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('更新文章失败:', error)
    throw error
  }

  return dbArticleToArticle(data)
}

/**
 * 删除文章（需要认证）
 */
export async function deleteArticle(id: string): Promise<void> {
  // 检查用户是否登录
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    throw new Error('请先登录')
  }

  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('删除文章失败:', error)
    throw error
  }
}

/**
 * 搜索文章
 */
export async function searchArticles(keyword: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .or(`title.ilike.%${keyword}%,summary.ilike.%${keyword}%`)
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('搜索文章失败:', error)
    throw error
  }

  return (data || []).map(dbArticleToArticle)
}

// ==================== 数据转换 ====================

/**
 * 将数据库格式转换为应用格式
 */
function dbArticleToArticle(dbArticle: any): Article {
  return {
    id: dbArticle.id,
    title: dbArticle.title,
    summary: dbArticle.summary || '',
    content: dbArticle.content,
    author: dbArticle.author || '',
    cover_image: dbArticle.cover_image || '',
    tags: dbArticle.tags || [],
    is_published: dbArticle.is_published,
    published_at: dbArticle.published_at,
    createdAt: dbArticle.created_at,
    updatedAt: dbArticle.updated_at
  }
}
