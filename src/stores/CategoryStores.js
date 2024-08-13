import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";

export const useCategoryStore = defineStore("Category", () => {
  // nama db dan nama collection
  const categoryCollection = collection(db, "categories");

  const dialog = ref(false);
  const form = ref(false);
  const category = reactive({
    id: "",
    name: "",
    description: "",
    isUpdate: false,
  });
  const categories = ref(null);
  const dialogDetail = ref(false);
  const dialogDelete = ref(false);

  const clearInput = () => {
    category.id = "";
    category.name = "";
    category.description = "";
    category.isUpdate = false;
  };

  const addData = () => {
    clearInput();
    dialog.value = true;
  };

  const onSubmit = async () => {
    if (!form.value) return;

    if (category.isUpdate) {
      await updateDoc(doc(categoryCollection, category.id), {
        name: category.name,
        description: category.description,
      });
    } else {
      await addDoc(categoryCollection, {
        name: category.name,
        description: category.description,
      });
    }

    alert("Successfully");

    dialog.value = false;

    readCategory();
  };

  const readCategory = async () => {
    const res = await getDocs(categoryCollection);
    categories.value = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  };

  const getId = (item) => {
    category.id = item.id;
    category.name = item.name;
    category.description = item.description;
  };

  const getCategory = (item) => {
    dialogDetail.value = true;
    getId(item);
  };

  const ediData = (item) => {
    dialog.value = true;
    category.isUpdate = true;
    getId(item);
  };

  const deleteData = (item) => {
    dialogDelete.value = true;
    getId(item);
  };

  const destroyData = async (itemId) => {
    await deleteDoc(doc(categoryCollection, itemId));
    dialogDelete.value = false;
    readCategory();
  };

  return {
    category,
    dialog,
    dialogDetail,
    form,
    onSubmit,
    categories,
    readCategory,
    getCategory,
    addData,
    ediData,
    dialogDelete,
    deleteData,
    destroyData,
  };
});
