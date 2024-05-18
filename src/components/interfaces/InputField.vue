<template>
  <input v-bind="$attrs" v-model="model" />
</template>

<script setup lang="ts">
const model = defineModel()
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
