import { db } from "@/config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useAuthStore } from "./AuthStores";
import { useRouter } from "vue-router";

export const useNewsStore = defineStore("News", () => {
  const news = reactive({
    id: "",
    title: "",
    content: "",
    category: "",
    isUpdate: false,
  });

  const formInput = ref(false);
  const newsCollection = collection(db, "news");
  const authStore = useAuthStore();
  const route = useRouter();
  const allNews = ref(null);

  const handleSubmit = async () => {
    if (news.isUpdate) {
    } else {
      await addDoc(newsCollection, {
        id: news.id,
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name,
        },
        isApprove: false,
        image: null,
        writeenBy: {
          id: authStore.currentUser.id,
          name: authStore.currentUser.name,
        },
        createdAt: Date.now(),
      });
    }
    alert("Successfully");

    route.push({ name: "News" });
  };

  const getNews = async () => {
    const newsList = await getDocs(newsCollection);
    allNews.value = newsList.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  };

  return { news, formInput, handleSubmit, getNews, allNews };
});
