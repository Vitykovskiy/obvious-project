<template>
  <div class="content-container">
    <h1>Очевидно — и точка</h1>
    <h2>Карточная игра с использованием нейросети</h2>
    <div class="menu-container">
      <menu-button title="СОЗДАТЬ ИГРУ" width="100%"></menu-button>
      <menu-button title="ПОДКЛЮЧИТСЯ К ИГРЕ" width="100%"></menu-button>
      <div class="share-panel">
        <menu-button white title="ПОДЕЛИТЬСЯ" icon="share" width="100%"></menu-button>
        <menu-button white icon="telegram"></menu-button>
        <menu-button white icon="discord"></menu-button>
      </div>
    </div>
    <div v-show="allCardsAreLoaded" class="background">
      <div class="card-container left-card-1">
        <img src="@/assets/cards/main_screen_card_1.png" class="card" @load="markAsLoaded" />
      </div>
      <div class="card-container left-card-2">
        <img src="@/assets/cards/main_screen_card_2.png" class="card" @load="markAsLoaded" />
      </div>
      <div class="card-container left-card-3">
        <img src="@/assets/cards/main_screen_card_3.png" class="card" @load="markAsLoaded" />
      </div>
      <div class="card-container right-card-1">
        <img src="@/assets/cards/main_screen_card_4.png" class="card" @load="markAsLoaded" />
      </div>
      <div class="card-container right-card-2">
        <img src="@/assets/cards/main_screen_card_5.png" class="card" @load="markAsLoaded" />
      </div>
      <div class="card-container right-card-3">
        <img src="@/assets/cards/main_screen_card_6.png" class="card" @load="markAsLoaded" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuButton from './interfaces/MenuButton.vue'

const allCardsAreLoaded = ref(false)
const cardsCount = 6
let loadedCards = 0

function markAsLoaded() {
  loadedCards++
  allCardsAreLoaded.value = loadedCards === cardsCount
}
</script>

<style scoped>
.content-container {
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

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.card-container {
  position: absolute;
  border-radius: 2vh;
  overflow: hidden;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  object-fit: contain;
}

.left-card-1 {
  width: 35vh;
  height: 55vh;
  bottom: -1vh;
  left: -5vh;
  z-index: -1;
  transform: rotate(15deg);
  box-shadow: 0px 10px 20px 0px #00000080;
}

.left-card-2 {
  width: 21vh;
  height: 35vh;
  bottom: 35vh;
  left: 0vh;
  z-index: -2;
  transform: rotate(-15deg);
  box-shadow: 0px 10px 20px 0px #00000052;
}

.left-card-2 .card {
  opacity: 0.5;
}

.left-card-3 {
  width: 28vh;
  height: 50vh;
  bottom: -13vh;
  left: 12vh;
  z-index: -2;
  transform: rotate(30deg);
  box-shadow: 0px 10px 20px 0px #00000080;
}

.left-card-3 .card {
  opacity: 0.68;
}

.right-card-1 {
  width: 35vh;
  height: 55vh;
  bottom: -1vh;
  right: -5vh;
  z-index: -1;
  transform: rotate(-15deg);
  box-shadow: 0px 10px 20px 0px #00000080;
}

.right-card-2 {
  width: 21vh;
  height: 35vh;
  bottom: 35vh;
  right: 0vh;
  z-index: -2;
  transform: rotate(15deg);
  box-shadow: 0px 10px 20px 0px #00000052;
}

.right-card-2 .card {
  opacity: 0.5;
}

.right-card-3 {
  width: 28vh;
  height: 50vh;
  bottom: -13vh;
  right: 12vh;
  z-index: -2;
  transform: rotate(-30deg);
  box-shadow: 0px 10px 20px 0px #00000080;
}

.right-card-3 .card {
  opacity: 0.68;
}
</style>
