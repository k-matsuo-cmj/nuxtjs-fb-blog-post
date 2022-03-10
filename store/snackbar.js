export const state = () => ({
  show: false,
  message: ''
})

export const mutations = {
  showSnackbar (state, message) {
    state.show = true
    state.message = message
  },
  closeSnackbar (state) {
    state.show = false
    state.message = ''
  }
}
export const actions = {
  show ({ commit }, message) {
    commit('showSnackbar', message)
  },
  close ({ commit }) {
    commit('closeSnackbar')
  }
}
