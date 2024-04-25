<template>
  <div :style="{ width: props.width }">
    <textarea v-model="value" :placeholder="props.placeholder" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  type: 'input' | 'textarea'
  placeholder: string
  width: string
}

const value = ref('')
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'input',
  width: '100%'
})
</script>

<style scoped>
textarea,
textarea:focus {
  width: 100%;
  padding: 0.7em;
  border: 0.1em solid #6d79b3;
  border-radius: 100px;
  box-shadow: 0 0.1em 0 #474865;
  background-color: #1a1945;
  color: white;
  font-family: inherit;
  font-size: 2em;
  font-weight: 800;
  text-align: center;
  outline: none;
}
</style>
