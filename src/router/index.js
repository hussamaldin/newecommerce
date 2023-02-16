import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Slider from "../components/Slider.vue";
const routes = [
  {
    path: "/al",
    name: "home",
    component: Home,
  },
    {
    path: "/sli",
    name: "sli",
    component: Slider,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
