import Vue from 'vue'
import Vuex from 'vuex'

import ThisClass from './modules/chooseClass'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    class: ThisClass
  }
})
