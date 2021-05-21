import NotFound from '@/views/404'

export const constantRoutes = [
  {
    path: 'index',
    name: 'index',
    component: () => import('@/views/dashboard/index'),
    meta: {
      breadcrumb: false,
      activeMenu: '/index'
    },
    // hide menu
    hidden: true
  },
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: {
      title: '菜单一',
      icon: 'dashboard',
      breadcrumb: false
    },
    children: [
      {
        path: '/dash1',
        name: 'Dash1',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '子菜单1',
          icon: 'dashboard',
          breadcrumb: true
        },
        children: []
      }
    ]
  },
  {
    path: 'dash',
    name: 'Dash',
    component: () => import('@/views/dashboard/index'),
    meta: {
      title: '菜单二',
      icon: 'dashboard',
      breadcrumb: true
    },
    children: []
  },
  // 404 page must be placed at the end !!!
  { path: '*', component: NotFound, hidden: true }
]
