import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');

// const app = createApp(App)
// Global component without importing in App component
// rather have to import in this file
// app.component('Blog', Blog)
// app.mount('#app');
