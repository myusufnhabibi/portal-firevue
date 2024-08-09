<template>
  <RouterView />
</template>

<script setup>
import { provide } from "vue";
import { RouterView } from "vue-router";

provide("role", "Admin News");
</script>
