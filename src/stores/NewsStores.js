import { db } from "@/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
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
  const detailNews = ref(null);

  const handleSubmit = async () => {
    if (news.isUpdate) {
      await updateDoc(doc(newsCollection, news.id), {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name,
        },
      }); 
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

  const clearForm = () => {
    news.id = "",
    news.title = "",
    news.content = "",
    news.category = "",
    news.isUpdate = false;
  };

  const getDetailNews = async (paramsId, isEdit) => {
    const docParam = doc(newsCollection, paramsId);
    const docDetail = await getDoc(docParam);
    const result = docDetail.data();

    if (isEdit) {
      news.id = docParam.id;
      news.title = result.title,
      news.content = result.content,
      news.category = result.category,
      news.isUpdate = true;
      detailNews.value = null
    } else {
      detailNews.value = result
      
      clearForm()
    }
  };

  const deleteNews = async (itemId) => {
    await deleteDoc(doc(newsCollection, itemId));
    getNews();
  }


  return {
    news,
    formInput,
    handleSubmit,
    getNews,
    allNews,
    detailNews,
    getDetailNews,
    clearForm,
    deleteNews
  };
});
