import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "index",
    component: () => import("../views/layouts/Layout.vue"),
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("../views/Index.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/recentepisodes",
        name: "recent-episodes",
        component: () => import("../views/RecentEpisodes.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
