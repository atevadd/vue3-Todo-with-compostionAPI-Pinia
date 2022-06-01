<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseHeader from "@/components/BaseHeader.vue";
</script>

<template>
  <BaseHeader />

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

</style>
