<template>
  <button class="menu-button" :style="{ width: width }" :class="{ white: white, circle: !title }">
    <span v-if="title">{{ title }}</span>
    <img v-if="icon" class="button-icon" :src="iconPath" :alt="icon" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  width?: string
  icon?: string
  white?: boolean
}

const props = defineProps<Props>()

const iconPath = computed(() => {
  return `src/assets/icons/${props.icon}.png`
})
</script>

<style scoped>
.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.3em;
  padding: 0.5em;
  border: 0.1em solid #b8992c;
  border-radius: 100px;
  box-shadow: 0 0.1em 0 #9c7f18;

  font-size: 2em;
  font-family: inherit;
  font-weight: 1000;
  white-space: nowrap;

  color: #352900;
  background-color: #f5ce45;

  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-button span {
  margin: 0 1em;
}

.white {
  border-color: #6d79b3;
  box-shadow: 0 0.1em 0#474865;
  background-color: #54597e;
  color: white;
}

.button-icon {
  height: 1.5em;
  width: 1.5em;
}

.circle {
  border-radius: 50%;
}

.menu-button:active {
  box-shadow: none;
  transform: translateY(0.1em);
}
</style>
