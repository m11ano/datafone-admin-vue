import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './app/providers/routerProvider';
import App from './app/App.vue';

import '@/app/styles/index.less';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#root');
