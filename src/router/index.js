import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admissions from '../views/Admissions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admissions',
      name: 'Admissions',
      component: Admissions,
    },
  ],
})

export default router
