<template>
  <textarea
    v-bind="$attrs"
    :style="{ width: props.width }"
    v-model="value"
    :placeholder="props.placeholder"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  placeholder: string
  width: string
}

const value = ref('')
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  width: '100%'
})
</script>

<style scoped>
textarea,
textarea:focus {
  padding: 0.7em;
  border: 0.1em solid #6d79b3;
  border-radius: 1em;
  box-shadow: 0 0.1em 0 #474865;
  background-color: #1a1945;
  color: white;
  font-family: inherit;
  font-size: 2em;
  font-weight: 400;
  text-align: left;
  outline: none;
  resize: none;
}
</style>
