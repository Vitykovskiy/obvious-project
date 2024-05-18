<template>
  <div class="card-container" :class="{ empty: !isCardOnTable }">
    <img
      v-if="isCardOnTable === true"
      class="card"
      :src="cardPath"
      :class="{ shaded: shaded === true }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
type CardProps = {
  deck: string
  card?: string
  width?: string
  height?: string
  shaded?: boolean
  closed?: boolean
  isCardOnTable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  width: '96px',
  height: '155px',
  isCardOnTable: true
})

const cardPath = computed(() => {
  if (props.closed === true) return `src/assets/decks/${props.deck}/card-back.png`
  if (props.card) return `src/assets/decks/${props.deck}/${props.card}.png`
})
</script>

<style scoped>
.card-container {
  overflow: hidden;
  background-color: #000000;
  border-radius: 2vh;
  box-shadow: 0px 10px 20px 0px #00000052;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}

.empty {
  border: 1px solid #ffffff66;
  background: none;
  box-shadow: none;
}

.shaded {
  opacity: 0.3;
}
</style>
