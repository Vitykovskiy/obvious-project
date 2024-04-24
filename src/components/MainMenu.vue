<template>
  <div class="main-menu-wrapper">
    <h1>Очевидно — и точка</h1>
    <h2>Карточная игра с использованием нейросети</h2>
    <div class="menu-container">
      <menu-button title="СОЗДАТЬ ИГРУ" width="100%" @click="createGame" />
      <menu-button title="ПОДКЛЮЧИТСЯ К ИГРЕ" width="100%" @click="joinGame" />
      <div class="share-panel">
        <menu-button white title="ПОДЕЛИТЬСЯ" icon="share" width="100%" />
        <menu-button white icon="telegram" />
        <menu-button white icon="discord" />
      </div>
    </div>
    <background-cards />
  </div>
</template>

<script setup lang="ts">
import MenuButton from './interfaces/MenuButton.vue'
import BackgroundCards from './interfaces/BackgroundCards.vue'
import router from '@/router'

function createGame() {
  router.push('create-game')
}

function joinGame() {
  router.push('join-game')
}
</script>

<style scoped>
.main-menu-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: inherit;
}

h1 {
  margin: 0.2em;
  font-weight: 800;
  font-size: 4em;
}

h2 {
  margin-top: 0.2em;
  font-weight: 400;
  opacity: 80%;
  font-size: 2em;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2em;
  width: 100%;
}

.share-panel {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
