import { def } from "@vue/shared";
import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const useStore = defineStore("todo", {
  state: () => {
    return {
      isAuthenticated: false,
      userDetails: {
        email: "",
        password: "",
      },
      todos: shallowRef([]),
    };
  },
  getters: {
    getAllTodo: (state) => state.todos,
  },
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
});
