import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import("../views/Home/index.vue");
const Feedbacks = () => import("../views/Feedbacks/index.vue");
const Credencials = () => import("../views/Credencials/index.vue");

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/feedbacks',
      name: 'feedbacks',
      component: Feedbacks,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/credencials',
      name: 'credencials',
      component: Credencials,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ],
})

export default router
