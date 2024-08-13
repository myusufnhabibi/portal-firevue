<template>
  <AuthComponent :isLogin="isLogin" />
</template>

<script setup>
import AuthComponent from "@/components/AuthComponent.vue";
import { ref } from "vue";

const isLogin = ref(false);
</script>
