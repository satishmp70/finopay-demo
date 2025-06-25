import { useToast } from 'vue-toastification'
import { defineStore } from 'pinia'
const toast = useToast()

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('token'),
    role: (localStorage.getItem('role') as 'admin' | 'user' | '') || '',
  }),
  actions: {
    login(role: 'admin' | 'user') {
      localStorage.setItem('token', 'mock_token')
      localStorage.setItem('role', role)
      this.isAuthenticated = true
      this.role = role
      toast.success(`Logged in as ${role}`)
    },
    logout() {
      localStorage.clear()
      this.isAuthenticated = false
      this.role = ''
      toast.info('Logged out successfully')
    },
  },
})
