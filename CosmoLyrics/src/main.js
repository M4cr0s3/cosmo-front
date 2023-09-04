import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import './assets/app.css'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')
