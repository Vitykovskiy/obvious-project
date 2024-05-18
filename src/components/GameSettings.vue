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
          <menu-button white circle icon="minus" @click="decreasePointsToWinCount" />
          <span>{{ pointsToWin }}</span>
          <menu-button white circle icon="plus" @click="increasePointsToWinCount" />
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
import { useStore } from 'vuex'
import {
  DEFAULT_PLAYERS_COUNT,
  DEFAULT_POINTS_TO_WIN,
  MAX_PLAYERS,
  MAX_POINTS_TO_WIN,
  MIN_PLAYERS,
  MIN_POINTS_TO_WIN
} from '@/services/constants'

const maxPlayersCount = ref(DEFAULT_PLAYERS_COUNT)
const pointsToWin = ref(DEFAULT_POINTS_TO_WIN)
const store = useStore()

function increaseMaxPlayersCount() {
  if (maxPlayersCount.value === MAX_PLAYERS) return
  maxPlayersCount.value++
}

function decreaseMaxPlayersCount() {
  if (maxPlayersCount.value === MIN_PLAYERS) return
  maxPlayersCount.value--
}

function increasePointsToWinCount() {
  if (pointsToWin.value === MAX_POINTS_TO_WIN) return
  pointsToWin.value++
}

function decreasePointsToWinCount() {
  if (pointsToWin.value === MIN_POINTS_TO_WIN) return
  pointsToWin.value--
}

const navigationButtons = [
  {
    icon: 'return',
    callback: () => router.go(-1)
  }
]

async function createGame() {
  try {
    store.commit('game/SET_IS_USER_GAME_OWNER', true)
    await store.dispatch('game/createPlayer', { avatar: 'lama' })
    await store.dispatch('game/createGame', {
      creator: store.state.game.player.id,
      deck: store.state.game.deck.id,
      members_num: maxPlayersCount.value,
      points_to_win: pointsToWin.value
    })
    await store.dispatch('game/connect')

    router.push('avatar-presentation')
  } catch (err) {
    console.log('Game not created:', err)
  }
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
import { DEFAULT_PLAYERS_COUNT, DEFAULT_POINTS_TO_WIN, MAX_PLAYERS, MIN_PLAYERS, MAX_POINTS_TO_WIN,
MIN_POINTS_TO_WIN } from '@/services/constants' import { DEFAULT_PLAYERS_COUNT,
DEFAULT_POINTS_TO_WIN, MAX_PLAYERS, MIN_PLAYERS, MAX_POINTS_TO_WIN, MIN_POINTS_TO_WIN } from
'@/services/constants', DEFAULT_POINTS_TO_WIN, MAX_PLAYERS, MAX_POINTS_TO_WIN, MIN_PLAYERS,
MIN_POINTS_TO_WIN
