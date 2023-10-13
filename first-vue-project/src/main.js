import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// globally declare filter
app.config.globalProperties.$filters = {
  snippet(val) {
    if (!val || typeof val !== "string") return "";
    return val.slice(0, 40);
  },
};

app.mount("#app");
