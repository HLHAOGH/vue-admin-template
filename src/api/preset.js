import { Message } from 'element-ui'
// import store from '@/store'
import service from '@/api'

service.forEach(ins => {
  ins.defaults.timeout = 20000
  ins.defaults.validateStatus = (status) =>
    (status >= 200 && status < 300) || status === 304
  ins.interceptors.request.use(
    (config) => config,
    (error) => {
      Message.error(error.message || '请求：未知错误')
      return Promise.reject(error)
    }
  )
  ins.interceptors.response.use(
    (res) => {
      const vres = res.data
      vres.config = res.config
      vres.headers = res.headers
      vres.code = typeof vres.code === 'number' ? +vres.code : vres.code
      if (vres.code === undefined || vres.code === 0 || (vres.code >= 200 && vres.code < 300)) {
        return vres
      } else if (vres.code === 302) {
        // toLogin('登录态已过期，请先登录');
      } else {
        Message.error(`${vres.code}: ${vres.message}` || '响应：未知错误')
      }
      return Promise.reject(vres)
    },
    (error) => {
      const {
        response,
        message
      } = error
      const msg = response ? `${response.status}: ${response.statusText}` : (message || '响应：未知错误')
      Message.error(msg)
      return Promise.reject(error)
    }
  )
})

