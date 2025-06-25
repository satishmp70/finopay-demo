// src/services/api.ts
import axios, { type AxiosError, type AxiosResponse } from 'axios'
import { useUserStore } from '@/stores/user'

interface ApiError {
  message: string
  status: number
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://your-api-domain.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiError>) => {
    const userStore = useUserStore()

    if (error.response?.status === 401) {
      userStore.logout()
      window.location.href = '/login'
    }

    const errorMessage = error.response?.data?.message || 'An error occurred'
    console.error('API Error:', errorMessage)

    return Promise.reject({
      message: errorMessage,
      status: error.response?.status || 500,
    })
  },
)

export default api
