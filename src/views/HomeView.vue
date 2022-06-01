<script setup>
</script>

<template>
  <main class="page">
    <h1>Welcome to my todo app</h1>
    <p>Never forget any task again, list it out and do it</p>
    <RouterLink to="/login" class="cta">Get Started</RouterLink>
  </main>
</template>

<style scoped>
.page{
  position: relative;
  width: 100vw;
  height: 80vh;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.page h1{
  text-transform: uppercase;
  font-size: 2.5rem;
}
.page p{
  color: #828282;
  margin-bottom: 30px;
}
.page .cta{
  padding: 15px 30px;
  background-color: #820782;
  color: #fff;
  border-radius: 5px;
  transition: .15s ease;
}
.page .cta:hover{
  background-color: #540554;
}
</style>
