<template>
  <input
    v-model="value"
    :placeholder="props.placeholder"
    :type="props.type"
    :style="{ width: props.width }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  placeholder: string
  type: 'text' | 'number'
  width: string
}

const value = ref('')
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  width: '100%'
})
</script>

<style scoped>
input,
input:focus {
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
