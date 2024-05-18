<template>
  <div class="content-container">
    <navigation-panel title="Подключение к комнате" :buttons="navigationButtons" />
    <div class="join-game-form">
      <input-field v-model="roomId" placeholder="Введите ID комнаты" />
      <menu-button title="ПОДКЛЮЧИТЬСЯ" :disabled @click="start" />
    </div>
    <background-cards />
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import BackgroundCards from './interfaces/BackgroundCards.vue'
import NavigationPanel from './interfaces/NavigationPanel.vue'
import InputField from './interfaces/InputField.vue'
import MenuButton from './interfaces/MenuButton.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const roomId = ref('')
const disabled = computed(() => !roomId.value)
const navigationButtons = [
  {
    icon: 'return',
    callback: () => router.go(-1)
  }
]

async function start(): Promise<void> {
  try {
    store.commit('game/SET_IS_USER_GAME_OWNER', false)
    await store.dispatch('game/createPlayer', { avatar: 'lama', game: roomId.value })
    await store.dispatch('game/connect')
    router.push('avatar-presentation')
  } catch (err) {
    console.log('Game not created:', err)
  }
}
</script>

<style scoped>
navigation-panel {
  flex-grow: 0;
}

.join-game-form {
  flex-grow: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
}
</style>
