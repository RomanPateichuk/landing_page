import { createApp } from "vue";
import root from "./App.vue";
import store from "./store";




const app = createApp(root, {});
app.use(store).mount("#app");