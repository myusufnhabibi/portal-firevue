<template>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : 'left'"
  >
    <ListSideBar :itemLists="items" />
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import ListSideBar from "./ListSideBar.vue";

const items = ref([
  { text: "Dashboard", icon: "mdi-view-dashboard", pathName: "Dashboard" },
  { text: "Category", icon: "mdi-view-list", pathName: "Category" },
  { text: "News", icon: "mdi-newspaper-variant-outline", pathName: "News" },
  { text: "Profile", icon: "mdi-account", pathName: "Profile" },
]);
</script>
