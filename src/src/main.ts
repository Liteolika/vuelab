import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { rootstore } from "@/store";

createApp(App)
  .use(rootstore)
  .use(router)
  .mount("#app");
