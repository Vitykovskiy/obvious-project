<template>
  <div class="card-container">
    <img :src="cardPath" class="card" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ deck: string; card: string }>()

const cardPath = computed(() => {
  return `src/assets/decks/${props.deck}/${props.card}.png`
})
</script>

<style scoped>
.card-container {
  width: 35vh;
  height: 55vh;
  overflow: hidden;
  margin: 1em;

  background-color: #000000;
  border-radius: 2vh;
  box-shadow: 0px 10px 20px 0px #00000052;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
