import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("Auth", () => {
  const router = useRouter();
  const authCollection = collection(db, "auth");
  const formInput = ref(null);
  const user = reactive({
    name: "",
    email: "",
    password: "",
  });
  const currentUser = ref(null);

  const authHandler = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        currentUser.value = {};
        currentUser.value.email = user.email;
        currentUser.value.id = user.uid;
        currentUser.value.name = user.name;
        currentUser.value.isAdmin = user.isAdmin;
      } else {
        currentUser.value = null;
      }
    });
  };
  const onSubmitAuth = async () => {
    const register = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    await addDoc(authCollection, {
      uid: register.user.uid,
      name: user.name,
      isAdmin: false,
    });

    alert("Login Success");
    router.push({ name: "Dashboard" });
  };

  return { formInput, onSubmitAuth, user, currentUser, authHandler };
});
