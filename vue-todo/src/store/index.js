import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : []
  },
  getters: {
    todos: state => {
      return state.todos
    }
  },
  mutations: {
    ADD_TODO (state, comment) {
      
      const id = state.todos.length;

      state.todos.push({
        id: id,
        comment: comment,
        status: '作業中'
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
