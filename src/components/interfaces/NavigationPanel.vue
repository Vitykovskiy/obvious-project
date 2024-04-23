<template>
  <div class="header-panel">
    <span class="title">{{ title }}</span>
    <menu-button white icon="return" @click="$emit('onReturn')" />
  </div>
</template>

<script setup lang="ts">
import MenuButton from './MenuButton.vue'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.header-panel {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-panel span {
  font-weight: 800;
  font-size: 3.3em;
}
</style>
