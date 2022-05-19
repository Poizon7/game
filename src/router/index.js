import { createRouter, createWebHistory } from "vue-router";
import GameView from "../views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: GameView,
    },
    {
      path: "/rules",
      name: "rulse",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RuleView.vue"),
    },
  ],
});

export default router;
