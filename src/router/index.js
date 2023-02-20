import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Slider from "../components/Slider.vue";
import Products from "../components/Products.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,

  },
    {
    path: "/sli",
    name: "sli",
    component: Slider,
  },
  {
    path: "/products/:id",
    name: "Product",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
