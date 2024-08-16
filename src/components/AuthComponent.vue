<template>
  <div>
    <div class="mx-auto my-6 text-h4 text-center text-primary">
      {{ isLogin ? "Login" : "Register" }}
    </div>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form v-model="formInput" @submit.prevent="onSubmitAuth">
        <div v-show="!isLogin">
          <div class="text-subtitle-1 text-medium-emphasis">Name</div>

          <v-text-field
            density="compact"
            placeholder="Enter your name"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            v-model="user.name"
            :rules="nameRules"
          ></v-text-field>
        </div>

        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="user.email"
          :rules="emailRules"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password

          <a
            v-show="isLogin"
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          v-model="user.password"
          @click:append-inner="visible = !visible"
          :rules="[passwordRules.required, passwordRules.min]"
        ></v-text-field>

        <v-btn
          type="submit"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          :disabled="!formInput"
        >
          {{ isLogin ? "Login" : "Register" }}
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <router-link
          class="text-blue text-decoration-none"
          :to="isLogin ? `/register` : `/login`"
          rel="noopener noreferrer"
        >
          {{ isLogin ? "Sign up" : "Login" }} now
          <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/AuthStores";
import { storeToRefs } from "pinia";

const authStorage = useAuthStore();
const { formInput, user } = storeToRefs(authStorage);
const { onSubmitAuth } = authStorage;

const visible = ref(false);
const nameRules = [
  (value) => {
    if (value) return;
    return "Name is required";
  },
];
const emailRules = [(v) => /.+@.+/.test(v) || "Invalid Email address"];

const passwordRules = {
  required: (value) => !!value || "Password is required",
  min: (value) => value.length >= 5 || "Password minimal 5 Character",
};

defineProps({
  isLogin: {
    type: Boolean,
    default: false,
  },
});
</script>
