// Supabase 认证功能已移除，项目使用本地模式
// 此文件保留空函数以避免导入错误

export type UserRole = 'admin' | 'editor' | 'user'

export interface User {
  id: string
  email: string
  role: UserRole
}

/**
 * 获取当前登录用户
 */
export async function getCurrentUser(): Promise<User | null> {
  // 本地模式，无用户系统
  return null
}

/**
 * 检查是否是管理员
 */
export async function isAdmin(): Promise<boolean> {
  return false
}

/**
 * 检查是否可以编辑文章
 */
export async function canEditArticles(): Promise<boolean> {
  return false
}

/**
 * 邮箱密码登录
 */
export async function signInWithEmail(email: string, password: string) {
  throw new Error('登录功能已禁用')
}

/**
 * 注册新用户
 */
export async function signUpWithEmail(email: string, password: string) {
  throw new Error('注册功能已禁用')
}

/**
 * 退出登录
 */
export async function signOut() {
  // 本地模式，无需操作
}

/**
 * 监听登录状态变化
 */
export function onAuthStateChange(callback: (user: User | null) => void) {
  // 本地模式，直接返回 null
  callback(null)
  return { data: { subscription: { unsubscribe: () => {} } } }
}
