import Vue from 'vue'
import Router from 'vue-router'
import { constantRoutes } from './raws'
import Layout from '@/layout'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/index',
      component: Layout,
      meta: {
        title: '首页',
        icon: 'dashboard',
        breadcrumb: true,
      },
      hidden: false,
      children: [
        ...constantRoutes
      ]
    }
  ]
})

const router = createRouter()

router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else if (to.path === '/') {
    window.location.href = location.origin + '/index'
    document.title = this.$route.meta.title;
  }
  next()
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
