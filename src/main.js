import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

const app = createApp(App);

// onAuthStateChanged(auth, () => {
const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");
// });
