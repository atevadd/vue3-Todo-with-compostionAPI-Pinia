<template>
  <header>
    <div class="logo">
      <RouterLink to="/">TodoApp</RouterLink>
    </div>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'todo' }">Todo</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink
        :to="{ name: 'login' }"
        v-show="store.isAuthenticated"
        @click="logout"
        >Logout</RouterLink
      >
    </nav>
  </header>
</template>

<script setup>
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";

// APP state/store
const store = useStore();
// Router object
const router = useRouter();

// logout user
const logout = () => {
  store.isAuthenticated = false;
  store.userDetails = {
    email: "",
    password: "",
  };
};
</script>

<style>
header {
  position: relative;
  width: 100vw;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.logo a {
  color: grey;
  font-size: 1.7rem;
  font-weight: 700;
}
nav {
  display: flex;
  align-content: center;
}
nav a {
  margin-left: 25px;
  color: yellow;
}
</style>
