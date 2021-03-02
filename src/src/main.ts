import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { rootstore } from "@/store";

import init from "./initializer";

init().then(() => {

  createApp(App)
    .use(rootstore)
    .use(router)
    .mount("#app");

});



