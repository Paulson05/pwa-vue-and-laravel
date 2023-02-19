import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { createPinia } from 'pinia'
// import axiosPlugin from './plugins/axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../src/assets/css/style.css';
import '../src/assets/js/script.js';
import '../src/assets/styles/buttons.css';
import '../src/assets/styles/utilities.css';
import '../src/assets/styles/animation.css';

import PrimeVue from 'primevue/config';
//import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; // icons
import '../src/assets/theme.css';



import ConfirmationService from 'primevue/confirmationservice';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

// app.use(createPinia()) 
app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.component('InputText', InputText)

// app.use(axiosPlugin, {
//     baseUrl: 'http://3.223.44.96/api/',
// })

app.mount('#app');
