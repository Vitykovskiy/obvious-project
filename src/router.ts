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
  },
  {
    path: '/avatar-presentation',
    component: () => import('./components/AvatarPresentation.vue')
  },
  {
    path: '/waiting-room',
    component: () => import('./components/WaitingRoom.vue')
  },
  {
    path: '/game-room',
    component: () => import('./components/GameRoom.vue')
  },
  {
    path: '/round-result',
    component: () => import('./components/RoundResult.vue')
  },
  {
    path: '/rate-screen',
    component: () => import('./components/RateScreen.vue')
  },
  {
    path: '/game-results',
    component: () => import('./components/GameResults.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
