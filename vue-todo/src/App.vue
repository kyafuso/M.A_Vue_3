<template>
  <div id="app">
    <h1>TODOリスト</h1>
    <ToDoList />
    <ToDoForm />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import ToDoForm from './components/ToDoForm.vue'

export default {
  name: 'App',
  components: {
    ToDoList,
    ToDoForm
  }
}
</script>