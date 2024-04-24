<template>
  <div class="content-container">
    <navigation-panel title="Подключение к комнате" @onReturn="goToBack" />
    <input-field placeholder="Введите ID комнаты" type="number" />
    <span>JOIN GAME</span>
    <background-cards />
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import BackgroundCards from './interfaces/BackgroundCards.vue'
import NavigationPanel from './interfaces/NavigationPanel.vue'
import InputField from './interfaces/InputField.vue'

function goToBack() {
  router.go(-1)
}
</script>

<style scoped></style>
