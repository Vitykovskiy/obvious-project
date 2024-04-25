<template>
  <div class="content-container">
    <navigation-panel title="Выберите колоду" @onReturn="goToBack" />
    <div class="decks-container">
      <div v-for="deck in decks" :key="deck" class="deck">
        <deck-component :name="deck" />
        <menu-button white title="Выбрать" @click="selectDeck(deck)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import MenuButton from './interfaces/MenuButton.vue'
import DeckComponent from './interfaces/DeckComponent.vue'
import NavigationPanel from './interfaces/NavigationPanel.vue'
import { ref } from 'vue'

const decks = ref(['star-wars', 'star-wars', 'star-wars'])

function selectDeck(deck: string) {
  console.log('Selected deck:', deck)
  router.push('avatar-presentation')
}

function goToBack() {
  router.go(-1)
}
</script>

<style scoped>
.decks-container {
  width: 100%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
}

.deck {
  position: relative;
}
</style>
