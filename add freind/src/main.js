import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import addFreind from './components/addFreind.vue';


const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('add-freind', addFreind);


app.mount('#app');
