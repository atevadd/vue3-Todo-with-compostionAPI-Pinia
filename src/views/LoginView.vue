<template>
  <main>
    <form @submit.prevent="loginUser">
      <h1>Login to your todo app</h1>
      <div class="input-box">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="userDetails.email" />
        <!-- {{userDetails.email}} -->
      </div>
      <div class="input-box">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="userDetails.password" />
        <!-- {{userDetails.password}} -->
      </div>
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";

// Application store
const store = useStore();
// Vue router object
const router = useRouter();

const userDetails = ref({
  email: "",
  password: "",
});

const loginUser = () => {
  if (userDetails.email == "" || userDetails.password == "") {
    console.log("details cannot be empty");
  } else {
    store.$patch((state) => {
      state.isAuthenticated = true;
      state.userDetails = userDetails;
      router.push({ name: "todo" });
    });
  }
};
</script>

<style scoped>
main {
  min-height: 50vh;
  /* border: 1px solid green; */
  display: flex;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
form {
  width: 50%;
  margin: auto;
  /* border: 1px solid green; */
}

.input-box {
  width: 100%;
  margin-bottom: 25px;
}
label {
  display: block;
}
input {
  display: block;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding-inline: 10px;
}
button {
  width: 100%;
  display: block;
  padding: 15px 0;
  border-radius: 5px;
  background-color: #297129;
  color: #fff;
  border: none;
  outline: none;
  transition: 0.2s ease;
  cursor: pointer;
  margin-top: 35px;
}
button:hover {
  background-color: #1b4e1b;
}
</style>
