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
      const status = '作業中';

      state.todos.push({
        id,
        comment,
        status
      });
    },
    DELETE_TODO (state, id) {
      state.todos.splice(id, 1);
      state.todos.forEach((todo, index) => {
        todo.id = index;
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
