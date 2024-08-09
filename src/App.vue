<template>
  <!-- <v-card> -->
  <v-layout>
    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : 'left'"
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <!-- Navbar -->
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Portal News</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <!-- Main -->
    <v-main style="height: 500px">
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size
        screens. The navigation drawer will appear from the bottom on smaller
        size screens.
      </v-card-text>
    </v-main>
  </v-layout>
  <!-- </v-card> -->
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const items = [
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];
</script>
