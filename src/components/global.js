import Vue from 'vue'
const path = require('path')

const componentConfig = require.context('./global', false, /\.vue$/)

componentConfig.keys().forEach(modulePath => {
  const componentName = path.basename(modulePath, '.vue')
  const componentValue = componentConfig(modulePath).default || componentConfig(modulePath)
  Vue.component(componentName, componentValue)
})
