<template>
  <div class="content-container">
    <div class="title">
      <h2>Помогите нам стать лучше</h2>
    </div>
    <div class="rate-row" v-for="(item, index) in ratings" :key="index">
      <div class="row-title">
        <p>{{ item.title }}</p>
      </div>
      <div class="stars-container">
        <star-icon
          v-for="n in 5"
          :key="n"
          :gold="n <= item.rating"
          width="50"
          height="50"
        ></star-icon>
      </div>
    </div>
    <div class="buttons-container">
      <menu-button class="menu-button" title="К РЕЗУЛЬТАМАМ ИГРЫ"></menu-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarIcon from './interfaces/StarIcon.vue'
import MenuButton from './interfaces/MenuButton.vue'
import router from '@/router'

const ratings = [
  { title: 'Визуальная часть игры', rating: 4 },
  { title: 'Геймплей и понятность', rating: 5 },
  { title: 'Вероятность рекомендации', rating: 5 }
]

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
./interfaces/StarIcon.vue
