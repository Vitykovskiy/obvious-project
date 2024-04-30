<template>
  <div class="round-results-container">
    <navigation-panel class="navigation-panel" :buttons="navigationButtons" />
    <div id="cards-panel" class="cards-panel">
      <div
        v-for="(card, index) of cards"
        class="card-wrapper"
        :id="`card-wrapper-${index}`"
        :style="
          false
            ? {
                backgroundColor: players[index].playerColor.main,
                border: `0.3em solid ${players[index].playerColor.main}`,
                zIndex: card.id === '3' ? '1' : '0'
              }
            : {}
        "
      >
        <card
          :id="`card-${index}`"
          class="card-item"
          :key="index"
          :is-card-on-table="card.isCardOnTable"
          deck="star-wars"
          :closed="!isCardsShown"
          :card="card.id"
        />
        <p v-if="false && card.id === '3'">Ведущий</p>
      </div>
    </div>
    <div class="info-panel">
      <div class="left-part">
        <!-- <info-container title="Ожидание игроков" :message="`Выбирают еще ${2} игрока`" /> -->
        <info-container
          title="Раунд завершен"
          message="Ознакомьтесь с результатами и жмите “Продолжить”!"
        />
      </div>
      <div class="right-part">
        <!-- <info-container title="Ассоциация" message="Мал да удал" /> -->
        <div class="continue-button-container">
          <menu-button class="continue-button" white title="ПРОДОЛЖИТЬ" @click="onContinue" />
        </div>
      </div>
    </div>
  </div>

  <teleport to="#title-container">
    <div class="players-container" :style="{ opacity: false ? '0.5' : '1' }">
      <player-avatar
        class="player-item"
        v-for="(player, index) in players"
        :key="index"
        :playerColor="player.playerColor"
        :playerAvatar="player.playerAvatar"
        :playerScore="player.playerScore"
        :wait-for-player-turn="player.waitForPlayerTurn"
        show-score
      /></div
  ></teleport>

  <teleport v-if="false" v-for="(player, index) in players" :to="`#card-wrapper-${index}`">
    <div
      class="round-result-player-info"
      :style="{ backgroundColor: player.playerColor.additional }"
    >
      <player-avatar
        class="score-avatar-icon"
        :key="index"
        :playerColor="player.playerColor"
        :playerAvatar="player.playerAvatar"
        small
      />
      <p>+1</p>
    </div></teleport
  >

  <teleport v-if="false" v-for="(card, index) in cards" :to="`#card-${index}`">
    <div class="selected-players-container">
      <player-avatar
        v-for="(player, index) in players"
        class="selected-player"
        :key="index"
        :playerColor="player.playerColor"
        :playerAvatar="player.playerAvatar"
      />
    </div>
  </teleport>

  <teleport v-if="false" to="#cards-panel">
    <div class="overlay"></div>
  </teleport>

  <teleport to="#card-1">
    <div class="your-card-overlay">
      <p>Ваша карта</p>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from './interfaces/Card.vue'
import InfoContainer from './interfaces/InfoContainer.vue'
import NavigationPanel from './interfaces/NavigationPanel.vue'
import PlayerAvatar from './interfaces/PlayerAvatar.vue'
import MenuButton from './interfaces/MenuButton.vue'
import type { PanelButton } from './interfaces/NavigationPanel.vue'
import router from '@/router'

const players = [
  {
    playerColor: { main: '#D16FFF', additional: '#B14BE1' },
    playerAvatar: '/src/assets/avatars/lama.svg',
    playerScore: 11
  },
  {
    playerColor: { main: '#91CEE2', additional: '#64ABC2' },
    playerAvatar: '/src/assets/avatars/sloth.svg',
    waitForPlayerTurn: false,
    playerScore: 5
  },
  {
    playerColor: { main: '#3A73E3', additional: '#2B61CB' },
    playerAvatar: '/src/assets/avatars/frog.svg',
    playerScore: 0
  },
  {
    playerColor: { main: '#D34444', additional: '#B21C25' },
    playerAvatar: '/src/assets/avatars/zebra.svg',
    playerScore: 12
  },
  {
    playerColor: { main: '#56B79C', additional: '#3C997F' },
    playerAvatar: '/src/assets/avatars/elephant.svg',
    playerScore: 7
  },
  {
    playerColor: { main: '#F19648', additional: '#D27A2E' },
    playerAvatar: '/src/assets/avatars/cougar.svg',
    playerScore: 5
  }
]

const navigationButtons: PanelButton[] = [
  {
    icon: 'information',
    callback: () => console.log('information')
  },
  {
    icon: 'log-out',
    callback: () => console.log('log-out')
  },
  {
    icon: 'playing-cards',
    callback: () => console.log('playing-cards')
  }
]

const isCardsShown = ref(true)

const cards = [
  { id: '1', isCardOnTable: true },
  { id: '2', isCardOnTable: true },
  { id: '3', isCardOnTable: true },
  { id: '4', isCardOnTable: true },
  { id: '5', isCardOnTable: true },
  { id: '6', isCardOnTable: true }
]

function onContinue() {
  console.log('onContinue')
  router.push('rate-screen')
}
</script>

<style scoped>
.players-container {
  display: flex;
  flex-grow: 1;
}

.player-item {
  margin: 0 2em;
  width: 6em;
  height: 6em;
}

.round-results-container {
  width: 90%;
  height: 100%;
}

.navigation-panel {
  margin-bottom: 5em;
}

.cards-panel {
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
}

.cards-panel p {
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.7em;
}

.card-wrapper {
  position: relative;
  margin: 1em;
  border-radius: 2vh;
}

.card-wrapper p {
  margin: 0;
  padding: 0;
}

.card-item {
  position: relative;
  width: 24vh;
  height: 38vh;
}

.info-panel {
  margin: 1em 0;
  display: flex;
}

.left-part,
.right-part {
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 1em;
}

.continue-button-container {
  width: 100%;
  display: flex;
  justify-content: end;
}

.continue-button {
  min-width: 70%;
  height: 3em;
}

.round-result-player-info {
  position: absolute;
  padding: 0.5em;
  border-radius: 2.5em;
  top: -3em;
  left: 4em;
}

.round-result-player-info p {
  font-weight: 700;
  font-size: 1.5em;
}

.score-avatar-icon {
  width: 5em;
  height: 5em;
}

.selected-players-container {
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  max-width: 100%;
}

.selected-player {
  width: 20%;
  height: 20%;
  margin: 2.5%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
}

.your-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

.your-card-overlay p {
  font-size: 1.5em;
  font-weight: 400;
}
</style>
