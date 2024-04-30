<template>
  <div class="content-container">
    <div v-if="showMasterMessage" class="master-screen">
      <h2>Поздравляем, вы ведущий!</h2>
      <p>
        Изучите свои карты. Выберете понравившуюся вам картуи придумайте ассоциацию. Ваша карта не
        должна однозначно указывать на ассоциацию
      </p>
      <p>
        Хотя бы один игрок должен выбрать вашу карту. Но если все игроки выберут вашу карту, вы не
        получите очков
      </p>
      <menu-button title="НАЧАТЬ" @click="hideMasterScreen" />
    </div>
    <div v-else class="game-screen">
      <div class="own-cards-container">
        <div class="cards-panel">
          <card
            class="card-item"
            v-for="(card, index) of cards"
            :shaded="!card.selected"
            :key="index"
            deck="star-wars"
            :card="card.id"
          />
        </div>
        <p>Ваши карты</p>
      </div>
      <div class="info-panel">
        <div class="left-part">
          <check-list :items="todoList" />
          <!--           <info-container
            title="Выберите карту"
            message="Такую, чтобы сбить с толку других игроков и они выбрали вашу карту вместо карты ведущего"
          /> -->
        </div>
        <div class="right-part">
          <div class="association-input">
            <textarea-field
              v-model="association"
              width="100%"
              placeholder="Пишите вашу ассоциацию сюда..."
              rows="3"
            />
            <menu-button
              :white="!validated"
              :disabled="!validated"
              icon="right-arrow"
              @click="sendAssociation"
            />
            <!--    <info-container title="Ассоциация" message="Мал да удал" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MenuButton from './interfaces/MenuButton.vue'
import Card from './interfaces/Card.vue'
import TextareaField from './interfaces/TextareaField.vue'
import InfoContainer from './interfaces/InfoContainer.vue'
import CheckList, { type CheckListItem } from './interfaces/CheckList.vue'
import router from '@/router'

const showMasterMessage = ref(false)
const association = ref('')
const validated = computed(() => {
  return association.value
})

const todoList: CheckListItem[] = [
  {
    title: 'Выберите карту для ассоциации',
    checked: true
  },
  {
    title: 'Напишите ассоциацию в поле справа',
    checked: false
  }
]

const cards = [
  { id: '1', selected: true },
  { id: '2', selected: false },
  { id: '3', selected: false },
  { id: '4', selected: false },
  { id: '5', selected: false }
]

function hideMasterScreen() {
  showMasterMessage.value = false
}

function sendAssociation() {
  console.log('sendAssociation:', association.value)
  router.push('round-result')
}
</script>

<style scoped>
.master-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.master-screen p {
  font-size: 2em;
  font-weight: 400;
}

.master-screen h2 {
  font-size: 3.7em;
  font-weight: 800;
}

.own-cards-container p {
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-size: 2em;
  opacity: 0.3;
}

.cards-panel {
  display: flex;
}

.card-item {
  margin: 1em;
  width: 35vh;
  height: 55vh;
}

.info-panel {
  margin: 1em 0;
  display: flex;
}

.left-part,
.right-part {
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 1em;
}

.association-input {
  display: flex;
  flex-grow: 1;
}
</style>
