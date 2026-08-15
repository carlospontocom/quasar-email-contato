import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import App from './App.vue';
import router from './router';

// Quasar icons and styles
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    notify: {},
  },
});

app.use(router);
app.mount('#app');
