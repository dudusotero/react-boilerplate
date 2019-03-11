import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  baseURL: 'http://192.168.86.27:5000',
})

api.interceptors.request.use(async (config) => {
  const token = getToken()
  if (token) {
    const headers = { ...config.headers }
    headers.Authorization = `Bearer ${token}`
    return { ...config, headers }
  }
  return config
})

export default api
