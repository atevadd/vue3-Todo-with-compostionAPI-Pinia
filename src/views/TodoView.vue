<template>
  <main>
    <h1>Todo</h1>

    <form class="todo__form" @submit.prevent="addToTodoList">
      <input
        type="text"
        id="todo-input"
        placeholder="What do you want to do?"
        v-model="todo"
        autofocus
      />
    </form>
    <div class="todo-list">
      <div class="todo-item" v-for="(todo, index) in store.todos" :key="index">
        <input type="checkbox" />
        <span> {{ todo }}</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

// User todoitem
const todo = ref("");

//Adding user todo to todolist
function addToTodoList() {
  store.addTodo(todo.value);
  todo.value = "";
}

// Authenticate user on navigation to this page
onMounted(() => {
  try {
    if (store.isAuthenticated) {
      router.push({ name: "todo" });
    } else {
      router.push({ name: "login" });
    }
  } catch {
    console.log("The store is invalid");
  }
});
</script>

<style scoped>
main {
  width: 40%;
  /* border: 1px solid red; */
  margin: 3% auto;
}
h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}
form {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}
form input {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #333;
  color: #fff;
  padding-inline: 20px;
  font-size: 0.9rem;
}
.todo-list {
  background-color: #333;
  border: #000;
  border-radius: 5px;
}
.todo-item {
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #444444;
}
.todo-item:last-child {
  border-bottom: none;
}
.todo-item input {
  margin-right: 20px;
  /* appearance: none; */
  width: 20px;
  height: 20px;
}
.todo-item input:checked ~ span {
  text-decoration-line: line-through;
  color: #5d5d5d;
}
</style>
