<template>
  <input v-bind="$attrs" :value="modelValue" @input="onInput" />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target) {
    emit('update:modelValue', target.value)
  }
}
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
</style>
