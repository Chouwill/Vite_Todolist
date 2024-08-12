import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../page/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../page/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
