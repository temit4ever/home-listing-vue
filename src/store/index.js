import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groupList: localStorage.getItem('group-list'),
    list: {}
  },
  mutations: {
    addData (state, data) {
      state.groupList = data
    }
  },
  actions: {
  },
  getters: {
    getGroupList: function (state) {
      return state.groupList
    }
  },
  modules: {
  }
})
