import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    sidebarOpen: window.innerWidth > 768,
    darkMode: localStorage.getItem('darkMode') === 'true',
  }),
  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      localStorage.setItem('sidebarOpen', String(this.sidebarOpen))
    },
    closeSidebar() {
      if (window.innerWidth <= 768) {
        this.sidebarOpen = false
        localStorage.setItem('sidebarOpen', 'false')
      }
    },
    setSidebarByScreen() {
      this.sidebarOpen = window.innerWidth > 768
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', String(this.darkMode))
      document.documentElement.classList.toggle('dark', this.darkMode)
    },
    initTheme() {
      this.darkMode = localStorage.getItem('darkMode') === 'true'
      document.documentElement.classList.toggle('dark', this.darkMode)
    },
  },
})
