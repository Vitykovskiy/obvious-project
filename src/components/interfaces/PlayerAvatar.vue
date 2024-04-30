<template>
  <div class="container">
    <div
      class="avatar-container"
      :class="{ 'not-connected': !props.playerAvatar }"
      :style="{ backgroundColor: props?.playerColor?.main }"
    >
      <img
        v-if="props.playerAvatar"
        :src="props.playerAvatar"
        class="avatar"
        :class="{ waiting: props.waitForPlayerTurn }"
        :style="{ opacity: props.waitForPlayerTurn ? '0.2' : '1' }"
      />
      <img
        v-if="props.waitForPlayerTurn && props.playerAvatar"
        class="waiter"
        src="/src/assets/icons/loader.png"
      />
    </div>
    <div v-if="props.playerAvatar" class="right-info-container">
      <div
        v-if="props.showReadyState"
        class="ready-state"
        :class="{ 'not-ready': !props.isPlayerReady }"
        :style="{ backgroundColor: props?.playerColor?.additional }"
      >
        <img src="/src/assets/icons/check.png" />
      </div>
      <div
        v-if="props.showScore"
        class="score-container"
        :style="{ backgroundColor: props?.playerColor?.additional }"
      >
        <span> {{ props.playerScore }} </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Props = {
  isPlayerReady?: boolean
  playerColor?: PlayerColor
  playerAvatar?: string
  playerScore?: number
  showScore?: boolean
  showReadyState?: boolean
  waitForPlayerTurn?: boolean
  small?: boolean
}

export type PlayerColor = {
  main: string
  additional: string
}

const props = withDefaults(defineProps<Props>(), {
  playerScore: 0
})
</script>

<style scoped>
.container {
  width: 9em;
  height: 9em;
  border-radius: 50%;
  pointer-events: none;
  position: relative;
}

.avatar-container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar,
.waiter {
  width: 100%;
  height: 100%;
}

.waiter {
  position: absolute;
}

.not-connected {
  border: 0.35em solid #ffffff5d;
}

.right-info-container {
  position: absolute;
  overflow: hidden;
  width: 40%;
  height: 40%;
  bottom: -13%;
  right: -13%;
}

.ready-state,
.score-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.score-container span {
  font-weight: 700;
  font-size: 1.5em;
}

.not-ready {
  opacity: 0.3;
}

.ready-state img {
  margin-top: 0.5em;
  width: 2em;
  height: 2em;
}

.user-score {
  font-weight: 800;
  font-size: 3.3em;
}
</style>
