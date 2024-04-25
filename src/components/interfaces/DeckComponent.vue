<template>
  <div class="deck-container">
    <div class="card-back-container">
      <img :src="`src/assets/decks/${name}/card-back.png`" class="card" />
    </div>
    <div class="card-1-container">
      <img :src="`src/assets/decks/${name}/1.png`" class="card" />
    </div>
    <div class="card-2-container">
      <img :src="`src/assets/decks/${name}/2.png`" class="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.deck-container {
  height: 50vh;
}

.card-back-container,
.card-1-container,
.card-2-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  position: absolute;
  border-radius: 2vh;
  box-shadow: 0px 10px 20px 0px #00000052;
  transform-origin: 60% 85%;
  pointer-events: none;
}

.card-back-container {
  width: 23vh;
  height: 40vh;
  transform: rotate(-15deg);
  z-index: 1;
}

.card-1-container,
.card-2-container {
  width: 20vh;
  height: 33vh;
}

.card-1-container {
  transform: rotate(30deg);
  z-index: 0;
}

.card-2-container {
  transform: rotate(60deg);
  z-index: -1;
}

.card-1-container .card {
  opacity: 0.7;
}

.card-2-container .card {
  opacity: 0.5;
}

.card {
  height: 100%;
  object-fit: contain;
}
</style>
