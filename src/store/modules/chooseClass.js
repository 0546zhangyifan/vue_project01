// 从sessionStorage中拿数据
const getClass = window.sessionStorage.getItem('saveClass')

const state = {
  chooseClass: getClass ? JSON.parse(getClass) : {
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
    window.sessionStorage.setItem('saveClass', JSON.stringify(state.chooseClass))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
