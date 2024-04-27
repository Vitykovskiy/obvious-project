<template>
  <div class="container">
    <div class="avatar-container" :class="{ 'not-connected': !props.playerAvatar }">
      <img
        v-if="props.playerAvatar"
        class="avatar"
        :src="props.playerAvatar"
        :style="{ backgroundColor: props.playerColor }"
      />
    </div>
    <div
      v-if="props.showReadyState"
      class="ready-status"
      :class="{ 'not-ready': !props.isPlayerReady }"
    >
      <img src="/src/assets/icons/check.png" />
    </div>
    <span v-if="props.showScore" class="user-score"> {{ props.playerScore }} </span>
  </div>
</template>

<script setup lang="ts">
export type PlayerInfo = {
  playerColor?: string
  playerAvatar?: string
  playerScore?: number
  isPlayerReady?: boolean
}

type InfoStates = {
  showScore?: boolean
  showReadyState?: boolean
}

const props = withDefaults(defineProps<PlayerInfo | InfoStates>(), {
  isPlayerReady: false,
  playerColor: '',
  playerAvatar: '',
  playerScore: 0,
  showScore: false,
  showReadyState: false
})
</script>

<style scoped>
.container {
  width: 9em;
  height: 9em;
  margin: 1em;
  border-radius: 50%;
  pointer-events: none;
  position: relative;
}

.avatar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
}

.avatar {
  width: 100%;
  height: 100%;
}

.not-connected {
  border: 0.35em solid #ffffff5d;
}

.ready-status {
  position: absolute;
  width: 40%;
  height: 40%;
  bottom: -13%;
  right: -13%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.35em solid #ffffff;
  background-color: #ffffff4d;
}

.not-ready {
  opacity: 0.3;
}

.ready-status img {
  margin-top: 0.5em;
  width: 2em;
  height: 2em;
}

.user-score {
  font-weight: 800;
  font-size: 3.3em;
}
</style>
