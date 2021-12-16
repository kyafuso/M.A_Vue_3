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
    addToDo (state, comment) {      
      const id = state.todos.length;
      const status = '作業中';

      state.todos.push({
        id,
        comment,
        status
      });
    },
    changeStatus (state, id) {     
      const status = state.todos[id].status;      
      if (status === '作業中') {
        state.todos[id].status = '完了';
      } else {
        state.todos[id].status = '作業中';  
      }
    },
    deleteToDo (state, id) {
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
