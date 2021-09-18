import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import Cars from "../views/Cars.vue";
import Details from "../views/Details.vue";
import Notfound from "../views/Notfound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Example of an lazy load component
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/cars",
    name: "Cars",
    component: Cars,
  },
  {
    path: "/cars/:model",
    name: "Details",
    component: Details,
    props: true,
  },
  // Redirect route
  {
    path: "/every-car",
    redirect: "/cars",
  },
  // All catch route, 404
  {
    path: "/:catchAll(.*)",
    name: "CatchAll",
    component: Notfound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
