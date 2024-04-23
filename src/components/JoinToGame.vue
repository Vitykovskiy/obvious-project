<template>
  <div class="content-container">
    <navigation-panel></navigation-panel>
    <div class="join-game-panel">
      <input v-model="gameId" placeholder="Введите ID комнаты" />
      <button @click="joinGame">Присоединиться</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationPanel from '@/components/interface/NavigationPanel.vue'

const gameId = ref('')

function joinGame(): void {
  console.log('Вы присоединились к игре', gameId.value)
}
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.join-game-panel {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}

.setting button {
  margin: 0 10px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  color: white;
  font-size: 24px;
}
</style>
