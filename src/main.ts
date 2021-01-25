import 'reflect-metadata'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// @ts-ignore
app.config.devtools = true

app.mount('#app')

