export const state = () => ({
  showModalAdd: false,
  players: [],
})

export const mutations = {
  showModalAdd(state, payload) {
    state.showModalAdd = payload
  },
  addPlayer(state, payload) {
    state.players = [payload, ...state.players]
  },
  removePlayer(state, payload) {
    state.players = state.players.filter((p) => p.channel !== payload.channel)
  },
}

export const getters = {
  showModalAdd(state) {
    return state.showModalAdd
  },
  players(state) {
    return state.players
  },
  hasChannel: (state) => (channel) => {
    const players = state.players.filter((p) => p.channel === channel)

    return players.length > 0
  },
}
