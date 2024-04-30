<template>
  <div class="content-container">
    <div class="title">
      <h2>Помогите нам стать лучше</h2>
    </div>
    <div class="rate-row">
      <div class="row-title">
        <p>Визуальная часть игры</p>
      </div>
      <div class="stars-container">
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50"></star-icon>
      </div>
    </div>
    <div class="rate-row">
      <div class="row-title">
        <p>Геймплей и понятность</p>
      </div>
      <div class="stars-container">
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
      </div>
    </div>
    <div class="rate-row">
      <div class="row-title">
        <p>Вероятность рекомендации</p>
      </div>
      <div class="stars-container">
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
        <star-icon width="50" height="50" gold></star-icon>
      </div>
    </div>
    <div class="buttons-container">
      <menu-button
        class="menu-button"
        title="К РЕЗУЛЬТАТАМ ИГРЫ"
        @click="toGameResults"
      ></menu-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarIcon from './interfaces/svg-icons/StarIcon.vue'
import MenuButton from './interfaces/MenuButton.vue'
import router from '@/router'

function toGameResults() {
  router.push('game-results')
}
</script>

<style scoped>
.title {
  width: 100%;
}

h2 {
  font-weight: 800;
  font-size: 3em;
  color: #ffffff;
}

.rate-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.row-title {
  flex: 1;
}

.row-title p {
  font-weight: 500;
  font-size: 2em;
}

.stars-container {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

.buttons-container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.menu-button {
  padding: 0.7em 1.5em;
}
</style>
