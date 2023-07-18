import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import BlogsView from '../views/BlogsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/blogs', name: 'blogs', component: () => import('../views/BlogView.vue') },
    { path: '/blogs/:id', name: 'id', component: BlogsView }
  ]
})

export default router
