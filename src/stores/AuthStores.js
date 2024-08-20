import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
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
  const isError = ref(false);
  const message = ref(null);

  const authHandler = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        //ketika login
        const queryId = query(authCollection, where("uid", "==", user.uid));
        const queryData = await getDocs(queryId);
        const queryUser = queryData.docs[0].data();

        currentUser.value = {};
        currentUser.value.email = user.email;
        currentUser.value.id = user.uid;
        currentUser.value.name = queryUser.name;
        currentUser.value.isAdmin = queryUser.isAdmin;
      } else {
        // logout
        currentUser.value = null;
      }
    });
  };

  // auth register & login
  const onSubmitAuth = async (isLogin = false) => {
    try {
      isError.value = false;
      message.value = null;
      if (isLogin) {
        await signInWithEmailAndPassword(auth, user.email, user.password);
      } else {
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
      }
    } catch (error) {
      isError.value = true;
      message.value = error.message;
      // console.log(error);
    }

    user.password = "";

    if (!isError.value) {
      router.push({ name: "Dashboard" });
    }
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        router.push({ name: "Login" });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    formInput,
    onSubmitAuth,
    user,
    currentUser,
    authHandler,
    logoutUser,
    isError,
    message,
  };
});
