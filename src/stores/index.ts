import { createStore } from 'vuex'
import game from './GameStore'

export default createStore({
  modules: {
    game
  }
})
