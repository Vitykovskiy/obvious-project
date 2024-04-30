<template>
  <div class="info-container">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; message: string }>()
</script>

<style scoped>
.info-container h2 {
  margin: 0.5em 0;
  font-weight: 500;
  font-size: 3em;
}

.info-container p {
  font-weight: 400;
  font-size: 1.7em;
}
</style>
