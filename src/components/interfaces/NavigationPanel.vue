<template>
  <div class="header-panel">
    <div id="title-container" class="title-container">
      <span class="title">{{ title }}</span>
    </div>
    <div class="buttons-container">
      <menu-button
        v-for="(button, index) in buttons"
        :key="index"
        white
        circle
        :icon="button.icon"
        @click="button.callback"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import MenuButton from './MenuButton.vue'

export type PanelButton = {
  icon: string
  callback: () => void
}

withDefaults(
  defineProps<{
    title?: string
    buttons: PanelButton[]
  }>(),
  {
    buttons: () => []
  }
)
</script>

<style scoped>
.title-container {
  display: flex;
  justify-content: center;
  align-items: start;
}

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

.buttons-container {
  display: flex;
}
</style>
