import axios from 'axios'

export const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

export default [
  service
]
