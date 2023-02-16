import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'tw-elements';
// import Swiper styles
import "./index.css";
createApp(App).use(store).use(router).mount("#app");
