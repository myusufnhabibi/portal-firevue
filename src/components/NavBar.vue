<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="$emit('openClose')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title
      >{{ currentUser.name }} -
      {{ currentUser.isAdmin ? "( Admin )" : "( Staff )" }}</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <v-btn @click="logoutUser" icon="mdi-logout" variant="text"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStores";
import { inject } from "vue";
const currentUser = inject("currentUser");

const authStorage = useAuthStore();
const { logoutUser } = authStorage;
defineEmits(["openClose"]);
</script>
