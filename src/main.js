import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.css'
import './assets/top.css'
import './assets/catstaff.css'
import './assets/contact.css'
import './assets/admin.css'


const app = createApp(App)

app.use(router)

app.mount('#app')