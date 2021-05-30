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
    path: "/expenses/add",
    name: "add-expense",
    component: () => import("./components/AddExpense.vue"),
  },
  {
    path: "/persons/add",
    name: "add-person",
    component: () => import("./components/AddPerson.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;