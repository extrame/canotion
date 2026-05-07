import { supabase } from '../supabase'

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
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session?.user) return null
  
  // 获取用户角色
  const { data: roleData } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', session.user.id)
    .single()
  
  return {
    id: session.user.id,
    email: session.user.email!,
    role: roleData?.role || 'user'
  }
}

/**
 * 检查是否是管理员
 */
export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.role === 'admin'
}

/**
 * 检查是否可以编辑文章
 */
export async function canEditArticles(): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.role === 'admin' || user?.role === 'editor'
}

/**
 * 邮箱密码登录
 */
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  
  if (error) throw error
  return data
}

/**
 * 注册新用户
 */
export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  
  if (error) throw error
  
  // 新用户默认角色为 'user'
  if (data.user) {
    await supabase.from('user_roles').insert({
      user_id: data.user.id,
      role: 'user'
    })
  }
  
  return data
}

/**
 * 退出登录
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

/**
 * 监听登录状态变化
 */
export function onAuthStateChange(callback: (user: User | null) => void) {
  return supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .single()
      
      callback({
        id: session.user.id,
        email: session.user.email!,
        role: roleData?.role || 'user'
      })
    } else {
      callback(null)
    }
  })
}
