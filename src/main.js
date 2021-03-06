import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import '@/icons'
import '@/preset'
import '@/api/preset'
import '@/components/global'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
