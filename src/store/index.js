import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const path = require('path')
const requireAll = require.context('./modules', false, /\.js$/)
const modules = requireAll.keys().reduce((modules, modulePath) => {
  const name = path.basename(modulePath, '.js') // key
  modules[name] = requireAll(modulePath).default || requireAll(modulePath) // value
  return modules
}, {})
/*
requireAll is a function, it has three attributes: resolve(), keys(), id;
resolve() resolve a relative path and return a absolute path;
keys() return regexp matched files’s relative path consist of array;
id is module id;
*/

const store = new Vuex.Store({
  state: {
    breadCrumb: []
  },
  mutations: {
    updatebreadCrumb(state, options) {
      state.breadCrumb = options
    }
  },
  modules: modules,
  getters
})

export default store
