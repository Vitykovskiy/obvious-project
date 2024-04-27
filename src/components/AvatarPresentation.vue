<template>
  <div class="content-container">
    <div class="avatar-presentation">
      <img
        class="avatar"
        :style="{ backgroundColor: userColor }"
        src="../assets/avatars/lama.svg"
        :alt="userAvatar.title"
      />
      <div class="avatar-discription">
        <p v-if="userAvatar.title" class="avatar-title">Ваш аватар – {{ userAvatar.title }}!</p>
        <p v-if="userAvatar.info" class="avatar-info">Интересный факт: {{ userAvatar.info }}</p>
      </div>
    </div>
    <menu-button title="ОТЛИЧНО!" @click="goToNextScreen" />
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import MenuButton from './interfaces/MenuButton.vue'
import { ref } from 'vue'

const userAvatar = ref({
  name: 'lama',
  title: 'Лама',
  info: 'Когда лама злится, она может плюнуть в обидчика'
})

const userColor = ref('#d16fff')

function goToNextScreen() {
  router.push('waiting-room')
}
</script>

<style scoped>
.avatar-presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
}

.avatar {
  width: 16.5em;
  border-radius: 50%;
}

.avatar-discription {
  text-align: center;
}

.avatar-title {
  font-weight: 800;
  font-size: 3.3em;
}

.avatar-info {
  font-weight: 400;
  font-size: 1.9em;
}
</style>
