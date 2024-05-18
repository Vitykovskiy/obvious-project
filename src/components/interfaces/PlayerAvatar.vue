<template>
  <div class="container" :class="{ 'not-connected': !props.player }">
    <template v-if="props.player">
      <div class="avatar-container" :style="{ backgroundColor: props.player.color.main }">
        <img
          :src="playerAvatarUrl"
          :class="[{ waiting: props.waitForPlayerTurn }, 'avatar']"
          :style="{ opacity: props.waitForPlayerTurn ? '0.2' : '1' }"
        />
        <img v-if="props.waitForPlayerTurn" class="waiter" src="/src/assets/icons/loader.png" />
      </div>
      <div class="right-info-container">
        <div
          v-if="props.showReadyState"
          :class="[{ 'not-ready': !props.player.isReady }, 'ready-state']"
          :style="{ backgroundColor: props.player.color.additional }"
        >
          <img src="/src/assets/icons/check.png" />
        </div>
        <div
          v-if="props.showScore"
          class="score-container"
          :style="{ backgroundColor: props.player?.color?.additional }"
        >
          <span> {{ props.player.score }} </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { PlayerInfo } from '@/services/interfaces'
import { computed } from 'vue'

type Props = {
  player?: PlayerInfo
  showScore?: boolean
  showReadyState?: boolean
  waitForPlayerTurn?: boolean
  small?: boolean
}

const props = defineProps<Props>()

const playerAvatarUrl = computed<string>(() => {
  return props.player?.avatar ? `/src/assets/avatars/${props.player.avatar}.svg` : ''
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
