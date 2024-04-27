<template>
  <div class="content-container">
    <navigation-panel title="Комната ожидания игроков" :buttons="navigationButtons" />
    <div class="info-container">
      Колода карт: <span class="underlined">"{{ deckName }}"</span>
    </div>
    <div class="players-container">
      <player-avatar
        v-for="(player, index) in players"
        :key="index"
        :isPlayerReady="player.isPlayerReady"
        :playerColor="player.playerColor"
        :playerAvatar="player.playerAvatar"
        :playerScore="player.playerScore"
        :showReadyState="!!player.playerAvatar"
      />
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
          @click="onPlayerReady"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationPanel, { type PanelButton } from './interfaces/NavigationPanel.vue'
import MenuButton from './interfaces/MenuButton.vue'
import PlayerAvatar, { type PlayerInfo } from './interfaces/PlayerAvatar.vue'
import { ref } from 'vue'
import router from '@/router'

const players: PlayerInfo[] = [
  {
    isPlayerReady: true,
    playerColor: '#D16FFF',
    playerAvatar: '/src/assets/avatars/lama.svg',
    playerScore: 0
  },
  {
    isPlayerReady: true,
    playerColor: '#91CEE2',
    playerAvatar: '/src/assets/avatars/sloth.svg',
    playerScore: 0
  },
  {
    isPlayerReady: false,
    playerColor: '#3A73E3',
    playerAvatar: '/src/assets/avatars/frog.svg',
    playerScore: 0
  },
  {
    isPlayerReady: false,
    playerColor: '#D34444',
    playerAvatar: '/src/assets/avatars/zebra.svg',
    playerScore: 0
  },
  {
    isPlayerReady: true,
    playerColor: '#56B79C',
    playerAvatar: '/src/assets/avatars/elephant.svg',
    playerScore: 0
  },
  {
    isPlayerReady: false,
    playerColor: '#F19648',
    playerAvatar: '/src/assets/avatars/cougar.svg',
    playerScore: 0
  },
  {}
]

const isUserReady = ref(false)
const isUserOwner = ref(true)
const isGameReady = ref(true)
const deckName = ref('star-wars')
const roomId = ref('2890 - 3287')

const navigationButtons: PanelButton[] = [
  {
    icon: 'log-out',
    callback: () => console.log('log-out')
  }
]

if (isUserOwner.value) {
  navigationButtons.push({
    icon: 'information',
    callback: () => console.log('information')
  })
}

function onPlayerReady() {
  isUserReady.value = !isUserReady.value
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
