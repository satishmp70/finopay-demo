import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast)
app.use(FloatingVue)

import { useUiStore } from '@/stores/ui'
const ui = useUiStore()
ui.initTheme?.()

app.mount('#app')
