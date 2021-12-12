<template>
  <div class="todo-list">
    <table id="todo-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="todo in todos" v-bind:key="todo.id">
        <tr>
          <td>{{ todo.id }}</td>
          <td>{{ todo.comment }}</td>
          <td>{{ todo.status }}</td>
          <td><button>削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToDoList',
  computed : {
    ...mapGetters([
      'todos'
    ])
  }
}
</script>