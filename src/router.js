import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('./pages/Shop.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('./pages/Gallery.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./pages/Contact.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('./pages/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
