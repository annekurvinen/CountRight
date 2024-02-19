import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
// import './custom.scss';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createPinia } from 'pinia'

createApp(App).use(router).use(pinia).mount('#app');
