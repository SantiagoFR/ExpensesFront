import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/expenses/balance",
    alias: "/expenses/balance",
    name: "balance",
    component: () => import("./components/Balance.vue"),
  },
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
    path: "/expenses/debts",
    name: "debts",
    component: () => import("./components/Debts.vue"),
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("./components/Friends.vue"),
  },
  {
    path: "/friends/add",
    name: "add-friend",
    component: () => import("./components/AddFriend.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;