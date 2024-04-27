<template>
  <div class="content-container">
    <div v-if="showMasterMessage" class="master-screen">
      <h2>Поздравляем, вы ведущий!</h2>
      <p>
        Изучите свои карты. Выберете понравившуюся вам картуи придумайте ассоциацию. Ваша карта не
        должна однозначно указывать на ассоциацию
      </p>
      <p>
        Хотя бы один игрок должен выбрать вашу карту. Но если все игроки выберут вашу карту, вы не
        получите очков
      </p>
      <menu-button title="НАЧАТЬ" @click="hideMasterScreen"></menu-button>
    </div>
    <div v-else class="game-screen">
      <div class="own-cards-container">
        <div class="cards-panel">
          <card v-for="(card, index) of cards" :key="index" deck="star-wars" :card="card" />
        </div>
        <p>Ваши карты</p>
      </div>
      <dic class="info-panel"> </dic>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuButton from './interfaces/MenuButton.vue'
import Card from './interfaces/Card.vue'

const showMasterMessage = ref(true)

const cards = ['1', '2', '3', '4', '5']

function hideMasterScreen() {
  showMasterMessage.value = false
}
</script>

<style scoped>
.master-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.master-screen p {
  font-size: 2em;
  font-weight: 400;
}

.master-screen h2 {
  font-size: 3.7em;
  font-weight: 800;
}

.own-cards-container p {
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-size: 2em;
  opacity: 0.3;
}

.cards-panel {
  display: flex;
}
</style>
