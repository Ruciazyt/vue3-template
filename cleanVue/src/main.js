import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router";
import App from './App.vue'

// createApp(App).mount('#app')
console.log(router)
const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount("#app")
