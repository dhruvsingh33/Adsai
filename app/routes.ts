export const routes = {
  home: '/',
  dashboard: '/dashboard',
  campaigns: '/dashboard/campaigns',
  analytics: '/dashboard/analytics',
  settings: '/dashboard/settings',
  create: '/dashboard/create',
} as const

export type Route = typeof routes[keyof typeof routes] 