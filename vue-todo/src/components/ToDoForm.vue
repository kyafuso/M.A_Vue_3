<template>
  <div class="todo-form">
    <h2>新規タスクの追加</h2>
    <input type="text" v-model="comment" />
    <button v-on:click="addToDo">追加</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoForm',
  data: function(){
    return {
      comment: '',
    }
  },
  methods:{
    addToDo: function(){
      this.$store.commit('ADD_TODO', this.comment);
      this.comment = '';
    }
  },
}
</script>
