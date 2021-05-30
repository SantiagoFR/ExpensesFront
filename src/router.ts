import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/expenses",
    name: "expenses",
    component: () => import("./components/Expenses.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddExpense.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;