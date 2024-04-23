import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./components/MainMenu.vue')
  },
  {
    path: '/create-game',
    component: () => import('./components/CreateGame.vue')
  },
  {
    path: '/join-game',
    component: () => import('./components/JoinGame.vue')
  },
  {
    path: '/choose-deck',
    component: () => import('./components/ChooseDeck.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
