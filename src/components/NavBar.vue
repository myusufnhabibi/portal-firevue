<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="$emit('openClose')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>{{ role }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon="mdi-logout" variant="text"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { inject } from "vue";

const role = inject("role");
defineEmits(["openClose"]);
</script>
