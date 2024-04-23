<template>

  <div class="settings-page">
    <navigation-panel></navigation-panel>
    <div class="setting">
      <span>Максимум игроков</span>
      <button @click="decrementPlayers">-</button>
      <span>{{ maxPlayers }}</span>
      <button @click="incrementPlayers">+</button>
    </div>
    <div class="setting">
      <span>Количество раундов</span>
      <button @click="decrementRounds">-</button>
      <span>{{ numberOfRounds }}</span>
      <button @click="incrementRounds">+</button>
    </div>
    <button class="create-button" @click="createGame">Создать</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationPanel from '@/components/interface/NavigationPanel.vue'

const maxPlayers = ref(4)
const numberOfRounds = ref(5)

const decrementPlayers = () => {
  if (maxPlayers.value > 1) maxPlayers.value--
}

const incrementPlayers = () => {
  maxPlayers.value++
}

const decrementRounds = () => {
  if (numberOfRounds.value > 1) numberOfRounds.value--
}

const incrementRounds = () => {
  numberOfRounds.value++
}

const createGame = () => {
  // Здесь логика для создания игры с заданными настройками
  console.log('Игра создана с игроками:', maxPlayers.value, 'и раундами:', numberOfRounds.value)
}
</script>

<style scoped>
.settings-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
}

.setting {
  display: flex;
  align-items: center;
  margin: 10px;
}

.setting button {
  margin: 0 10px;
  background-color: #4d5db2;
  border: none;
  border-radius: 50%;
  padding: 10px;
  color: white;
  font-size: 24px;
}

.create-button {
  background-color: #ffd700;
  border: none;
  color: #5e4db2;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
}

.create-button:hover {
  background-color: #e0c200;
}
</style>
