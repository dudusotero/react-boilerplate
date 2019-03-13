import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  baseURL: 'https://feracode-num.herokuapp.com',
})

api.interceptors.request.use(async (config) => {
  const token = getToken()
  if (token) {
    const headers = { ...config.headers }
    headers.Authorization = `JWT ${token}`
    return { ...config, headers }
  }
  return config
})

export default api
