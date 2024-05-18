import { requestService } from '@/services/RequestsService'
import { MessageTypes, socketMessage } from '@/services/SocketMessageService'
import type {
  CreateGameRequest,
  CreatePlayerRequest,
  Deck,
  Game,
  Player
} from '@/services/interfaces'

export default {
  namespaced: true,
  state: {
    player: null,
    game: null,
    deck: null,
    deckList: [],
    playersList: [],
    websocket: null,
    isUserGameOwner: null
  },
  mutations: {
    SET_PLAYER(state: { player: Player }, player: Player) {
      state.player = player
      console.log('Vuex SET_PLAYER', state.player)
    },
    SET_GAME(state: { game: Game }, game: Game) {
      state.game = game
      console.log('Vuex SET_GAME', state.game)
    },
    SET_DECK(state: { deck: Deck }, deck: Deck) {
      state.deck = deck
    },
    SET_DECK_LIST(state: { deckList: Deck[] }, deckList: Deck[]) {
      state.deckList = deckList
    },
    SET_PLAYERS_LIST(state: { playersList: Player[] }, playersList: Player[]) {
      state.playersList = playersList
      console.log('Vuex SET_PLAYERS_LIST', state.playersList)
    },
    SET_WEBSOCKET(state: { websocket: WebSocket | null }, websocket: WebSocket | null) {
      state.websocket = websocket
    },
    SET_IS_USER_GAME_OWNER(state: { isUserGameOwner: boolean }, isUserGameOwner: boolean) {
      state.isUserGameOwner = isUserGameOwner
    }
  },
  actions: {
    async getDecks(context: any) {
      try {
        const response = await requestService.get('api/deck_list/')
        context.commit('SET_DECK_LIST', response)
      } catch (err) {
        console.error(err)
      }
    },
    async createPlayer(context: any, playerData: CreatePlayerRequest) {
      try {
        const response = await requestService.post('api/player/create/', playerData)
        context.commit('SET_PLAYER', response)
        if ('game' in response) {
          context.commit('SET_GAME', { id: response.game })
        }
      } catch (err) {
        console.error(err)
      }
    },
    async createGame(context: any, gameData: CreateGameRequest) {
      try {
        const response = await requestService.post('api/game/create/', gameData)
        context.commit('SET_GAME', response)
      } catch (err) {
        console.error(err)
      }
    },
    connect(context: any) {
      const socket = requestService.connect(context.state.game.id, context.state.player.id)

      socket.onmessage = function (socketEvent: MessageEvent<any>) {
        const data = JSON.parse(socketEvent.data)
        const messageType = socketMessage.getMessageType(data)

        switch (messageType) {
          case MessageTypes.GameReadyStatusMessage:
            const players = socketMessage.convertMembersToPlayers(data.members)
            const currentPlayer = players.find(
              (value: Player) => value.id === context.state.player.id
            )

            context.commit('SET_PLAYERS_LIST', players)
            context.commit('SET_PLAYER', { ...context.state.player, ...currentPlayer })
        }
      }
      context.commit('SET_WEBSOCKET', socket)
    },
    changePlayerReadyStatus(context: any) {
      const currentStatus = context.state.player.status
      const readyState = {
        player_id: context.state.player.id,
        status: currentStatus === 'RD' ? 'NR' : 'RD'
      }
      requestService.getSocket().send(JSON.stringify(readyState))
    }
  }
}
