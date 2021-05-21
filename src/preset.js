import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, _, next) => {
  document.title = to.meta.title
  if (store.state.breadCrumb.length > 0) {
    let flag = false
    store.state.breadCrumb.map(item => {
      if (item.name === to.meta.title) {
        flag = true
      }
    })
    if (!flag) {
      store.state.breadCrumb.push({ name: to.meta.title, path: to.path })
    }
  } else {
    store.state.breadCrumb.push({ name: to.meta.title, path: to.path })
  }
  next()
})
