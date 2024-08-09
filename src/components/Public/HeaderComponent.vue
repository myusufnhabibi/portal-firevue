<template>
  <v-toolbar app color="primary" class="px-5">
    <RouterLink :to="{ name: 'Home' }"><h3>Portal News</h3></RouterLink>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="{ name: `${item.pathName}` }"
      >
        <v-icon> {{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
const menuItems = [
  { title: "Category", icon: "mdi-newspaper", pathName: "CategoryView" },
  { title: "Login", icon: "mdi-login", pathName: "Login" },
  { title: "Register", icon: "mdi-account-plus", pathName: "Register" },
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}
</style>
