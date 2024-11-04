import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PorductView from '@/views/PorductView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/productos/:id?', //pasando la props id de la card
      name: 'productos',
      component: PorductView,
      props: true,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactView,
    },
  ],
})

export default router
