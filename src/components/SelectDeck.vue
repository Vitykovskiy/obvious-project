<template>
  <div class="content-container">
    <navigation-panel title="Выберите колоду" :buttons="navigationButtons" />
    <div class="decks-container">
      <div v-for="deck in decks" :key="deck.id" class="deck">
        <deck-component :name="deck.name" />
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
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import type { Deck } from '@/services/interfaces'

const decks = ref<Deck[]>([])
const store = useStore()

onMounted(async () => {
  await store.dispatch('game/getDecks')
  decks.value = store.state.game.deckList
})

function selectDeck(deck: Deck) {
  store.commit('game/SET_DECK', deck)
  router.push('game-settings')
}

const navigationButtons = [
  {
    icon: 'return',
    callback: () => router.go(-1)
  }
]
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
