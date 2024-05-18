<template>
  <div class="content-container">
    <navigation-panel title="Комната ожидания игроков" :buttons="navigationButtons" />
    <div v-if="isUserOwner" class="info-container">
      Колода карт: <span class="underlined">"{{ deckName }}"</span>
    </div>
    <div class="players-container">
      <template v-for="playerNum in playersSlots" :key="playerNum">
        <player-avatar class="player-avatar" showReadyState :player="players[playerNum - 1]" />
      </template>
    </div>
    <div class="info-container">ID комнаты</div>
    <div class="buttons-panel">
      <div class="left-part">
        <menu-button white :title="roomId" icon="copy" @click="onCopy" />
        <menu-button white icon="invite" @click="onInvite" />
      </div>
      <div class="right-part">
        <menu-button
          v-if="isUserOwner"
          white
          :disabled="!isGameReady"
          title="НАЧАТЬ"
          @click="onStartGame"
        />
        <menu-button
          v-else
          :white="isUserReady"
          :title="isUserReady ? 'НЕ ГОТОВ' : 'ГОТОВ'"
          @click="changeReadyStatus"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationPanel, { type PanelButton } from './interfaces/NavigationPanel.vue'
import MenuButton from './interfaces/MenuButton.vue'
import PlayerAvatar from './interfaces/PlayerAvatar.vue'
import { computed, ref } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'
import type { Player, PlayerInfo } from '@/services/interfaces'
import { colors } from '@/services/constants'

const store = useStore()
const isUserOwner = computed(() => store.state.game.isUserGameOwner)
const isGameReady = computed(() => store.state.game.isReadyToPlay)

const isUserReady = computed(() => store.state.game.player.status === 'RD')

const deckName = computed(() =>
  store.state.game.isUserGameOwner ? store.state.game.deck?.name : ''
)
const roomId = computed(() => {
  const gameId = store.state.game.game.id
  if (gameId) {
    return gameId.toString()
  }
  throw new Error('Game was not created')
})

const players = computed<PlayerInfo[]>(() => {
  const playersList = store.state.game.playersList
  return playersList.map((player: Player, index: number) => {
    return {
      avatar: player.avatar,
      color: colors[index],
      isReady: player.status === 'RD',
      score: player.points
    }
  })
})

const playersSlots = computed<number>(() => store.state.game.game?.members_num ?? players.length)
const buttons: PanelButton[] = [
  {
    icon: 'log-out',
    callback: () => console.log('log-out')
  }
]
const navigationButtons = computed<PanelButton[]>(() => {
  const baseButtons = [...buttons]
  if (isUserOwner.value) {
    baseButtons.push({
      icon: 'information',
      callback: () => console.log('information')
    })
  }
  return baseButtons
})

function changeReadyStatus() {
  store.dispatch('game/changePlayerReadyStatus')
}

function onStartGame() {
  router.push('game-room')
}

function onCopy() {
  console.log('onCopy')
}

function onInvite() {
  console.log('onInvite')
}
</script>

<style scoped>
.info-container {
  width: 100%;
  font-size: 2.2em;
  font-weight: 500;
}

.underlined {
  text-decoration: underline;
}

.players-container {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
}

.player-avatar {
  margin: 1em;
}

.buttons-panel {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-part,
.right-part {
  display: flex;
}
</style>
