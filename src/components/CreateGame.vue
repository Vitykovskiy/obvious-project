<template>
  <div class="content-container">
    <navigation-panel title="Настройте игру" :buttons="navigationButtons" />
    <div class="settings-panel">
      <div class="settings-row">
        <span>Максимум игроков</span>
        <div class="numberic-input">
          <menu-button white icon="minus" @click="decreaseMaxPlayersCount" />
          <span>{{ maxPlayersCount }}</span>
          <menu-button white icon="plus" @click="increaseMaxPlayersCount" />
        </div>
      </div>
      <div class="settings-row">
        <span>Количество раундов</span>
        <div class="numberic-input">
          <menu-button white icon="minus" @click="decreaseRoundsCount" />
          <span>{{ roundsCount }}</span>
          <menu-button white icon="plus" @click="increaseRoundsCount" />
        </div>
      </div>
    </div>
    <div class="confirm-buttons">
      <menu-button title="СОЗДАТЬ" width="50%" @click="createGame" />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import MenuButton from './interfaces/MenuButton.vue'
import NavigationPanel from './interfaces/NavigationPanel.vue'
import { ref } from 'vue'

const maxPlayersCount = ref(2)
const roundsCount = ref(1)

function increaseMaxPlayersCount() {
  if (maxPlayersCount.value === 8) return
  maxPlayersCount.value++
}

function decreaseMaxPlayersCount() {
  if (maxPlayersCount.value === 2) return
  maxPlayersCount.value--
}

function increaseRoundsCount() {
  if (roundsCount.value === 50) return
  roundsCount.value++
}

function decreaseRoundsCount() {
  if (roundsCount.value === 1) return
  roundsCount.value--
}

const navigationButtons = [
  {
    icon: 'return',
    callback: () => router.go(-1)
  }
]

function createGame() {
  router.push('choose-deck')
}
</script>

<style scoped>
.settings-panel {
  margin: 2em 0;
  width: 80%;
}

.settings-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
}

.settings-row span {
  font-weight: 500;
  font-size: 2.5em;
}

.numberic-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.numberic-input span {
  width: 1em;
  text-align: center;
  font-weight: 800;
  font-size: 3.3em;
  margin: 0 0.5em;
}

.confirm-buttons {
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 3em;
}
</style>
