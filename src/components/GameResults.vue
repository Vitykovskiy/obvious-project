<template>
  <div class="content-container">
    <navigation-panel title="Результаты игры" />
    <div class="players-results-container">
      <div v-for="(player, index) in players" class="player-result">
        <player-avatar
          class="player-avatar"
          :id="`player-${index}`"
          :key="index"
          :player-avatar="player.playerAvatar"
          :player-color="player.playerColor"
        />
        <p>{{ player.playerScore }}</p>
      </div>
    </div>
    <div class="footer-panel">
      <div class="left-part">
        <menu-button white icon="telegram" />
        <span>Нам очень важно ваше мнение об игре. Будем рады любой обратной связи!</span>
      </div>
      <div class="right-part">
        <menu-button class="menu-button" title="На главный экран" />
      </div>
    </div>
  </div>

  <teleport to="#player-5">
    <img src="/src/assets/icons//crown.png" class="crown" />
  </teleport>
</template>

<script setup lang="ts">
import PlayerAvatar from './interfaces/PlayerAvatar.vue'
import NavigationPanel from './interfaces/NavigationPanel.vue'
import MenuButton from './interfaces/MenuButton.vue'

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
</script>

<style scoped>
.players-results-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.player-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2em;
}

.player-result p {
  font-size: 2.5em;
  font-weight: 700;
  margin-top: 0.2em;
}

.player-avatar {
  position: relative;
}

.footer-panel {
  display: flex;
}

.left-part,
.right-part {
  flex: 1;
  display: flex;
  align-items: center;
}

.left-part span {
  padding: 0 0.6em;
  font-weight: 500;
  font-size: 1.5em;
}

.right-part .menu-button {
  width: 100%;
}

.crown {
  position: absolute;
  width: 5em;
  top: -2em;
  left: -1.8em;
  transform: rotate(-39.88deg);
}
</style>
