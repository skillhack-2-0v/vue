// В файле src/main.js убедитесь, что стили импортируются корректно
// Проверьте, что импорт стилей находится в начале файла:

import "./assets/main.css"; // Важно: этот импорт должен быть первым

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Aura from "@primevue/themes/aura";
import Ripple from "primevue/ripple";
import "primeicons/primeicons.css";

// Создаем приложение
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    ripple: true,
    options: {
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});
app.use(ToastService);
app.directive("ripple", Ripple);

app.mount("#app");
