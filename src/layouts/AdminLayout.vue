<template>
  <!-- <v-card> -->
  <v-layout>
    <!-- Sidebar -->
    <SideBar v-model="drawer" />

    <!-- Navbar -->
    <NavBar @openClose="drawerOpenClose" />

    <!-- Main -->
    <v-main style="height: 500px">
      <v-card-text>
        <router-view></router-view>
      </v-card-text>
    </v-main>
  </v-layout>
  <!-- </v-card> -->
</template>

<script setup>
import { provide, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

const drawer = ref(true);

provide("role", "Admin News");
const drawerOpenClose = () => {
  drawer.value = !drawer.value;
};
</script>
