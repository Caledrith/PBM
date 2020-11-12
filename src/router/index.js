import { createRouter, createWebHistory } from 'vue-router'
import History from '../components/History.vue'
import Vision from '../components/Vision.vue'
import Home from '../components/Home.vue'

const routerHistory = createWebHistory()

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/vision',
    name: 'Vision',
    component: Vision
  }
];

const router = createRouter({
    history: routerHistory,
    routes: routes
});

export default router
