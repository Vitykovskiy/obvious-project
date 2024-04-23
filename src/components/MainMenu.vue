<template>
  <div class="main-menu">
    <h1>Название игры</h1>
    <p>Описание игры с использованием нейросети</p>

    <button @click="createGame">Создать игру</button>
    <button @click="joinGame">Подключиться к игре</button>
    <button @click="shareGame">Поделиться</button>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

function createGame() {
  console.log("Создать игру");
}

function joinGame() {
  console.log("Подключение к игре");
}

function shareGame() {
  console.log("Вы поделились игрой");
}
</script>

<style scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
}

.main-menu h1 {
  margin-bottom: 10px;
}

.main-menu p {
  margin-bottom: 20px;
}

.main-menu button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #ffd700;
  color: #5e4db2;
  cursor: pointer;
  border-radius: 5px;
}

.main-menu button:hover {
  background-color: #e0c200;
}
</style>
