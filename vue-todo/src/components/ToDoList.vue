<template>
  <div class="todo-list">
    <input type="radio" v-model="radioStatus" value="全て">全て
    <input type="radio" v-model="radioStatus" value="作業中">作業中
    <input type="radio" v-model="radioStatus" value="完了">完了
    <table id="todo-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="todo in todosByStatus" v-bind:key="todo.id">
        <tr>
          <td>{{ todo.id }}</td>
          <td>{{ todo.comment }}</td>
          <td><button v-on:click="changeStatus(todo.id)">{{ todo.status }}</button></td>
          <td><button v-on:click="deleteToDo(todo.id)">削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToDoList',
  data : function() {
    return{
      radioStatus : '全て',
    }
  },
  computed : {
    ...mapGetters([
      'todos'
    ]),
    todosByStatus: function() {
      
      if (this.radioStatus === '作業中') {
        return this.todos.filter(todo => todo.status === '作業中');
      } else if (this.radioStatus === '完了') {
        return this.todos.filter(todo => todo.status === '完了');
      }

      //radioStatusが全ての場合は、todosをそのまま返す。
      return this.todos;
    }
  },
  methods:{
    changeStatus: function(id) {
      this.$store.commit('changeStatus', id);
    },
    deleteToDo: function(id) {
      this.$store.commit('deleteToDo', id);
    }
  }
}
</script>