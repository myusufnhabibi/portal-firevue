import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("User", () => {
  const userData = ref([
    {
      name: "Nurmalia",
    },
    {
      name: "Daniel",
    },
  ]);

  const UserInput = reactive({
    name: "",
  });

  const addUser = () => {
    userData.value.push({
      name: UserInput.name,
    });

    UserInput.name = "";
  };

  return { userData, addUser, UserInput };
});
