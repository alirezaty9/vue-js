import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import test1 from './components/test/test1.vue';
import test2 from './components/test/test2.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/test1', component: test1 }, // our-domain.com/teams => TeamsList
    { path: '/test2', component: test2 },
  ],
  linkActiveClass: 'active test',
  linkExactActiveClass:'exact'
});

const app = createApp(App)

app.use(router);

app.mount('#app');
