const state = {
  chooseClass: {
    fun: 14,
    param: '',
    gname: '最近更新',
    count: 16,
    start: 0
  }
}

const getters = {
  className (state) {
    return state.chooseClass ? state.chooseClass.gname : ''
  },
  theInformation (state) {
    return state.chooseClass ? state.chooseClass : ''
  }
}

const mutations = {
  SET_CLASS (state, payload) {
    state.chooseClass = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
