<template>
  <div class="check-list">
    <div class="check-list-item" v-for="(item, index) in items" :key="index">
      <img :class="{ unchecked: !item.checked }" :src="checkedIcon(item.checked)" /><span>{{
        item.title
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

export type CheckListItem = { title: string; checked: boolean }

defineProps<{ items: CheckListItem[] }>()
function checkedIcon(checked: boolean): string {
  return `/src/assets/icons/${checked ? 'check-green' : 'cancel'}.png`
}
</script>

<style scoped>
.check-list-item {
  display: flex;
  align-items: center;
  margin: 2em 0;
}

.check-list-item img {
  margin-right: 1em;
  padding-top: 0.4em;
  height: 2.2em;
}

.unchecked {
  opacity: 0.5;
}

.check-list-item span {
  font-weight: 400;
  font-size: 2em;
}
</style>
