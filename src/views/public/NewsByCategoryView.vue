<template>
  <div v-if="newsCategory">
    <h1>News By Category {{ newsCategory[0].category.name }}</h1>
    <div class="mt-5" v-for="newsC in newsCategory">
      <DetailCardComponent :detailId="newsC" />
    </div>
  </div>
  <div v-else>Nothing News</div>
</template>

<script setup>
import { db } from "@/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import DetailCardComponent from "@/components/News/DetailCardComponent.vue";
const route = useRoute();

const newsCategory = ref(null);
const getNewsCategory = async () => {
  const queryId = query(
    collection(db, "news"),
    where("category.id", "==", route.params.id)
  );
  const queryData = await getDocs(queryId);
  newsCategory.value = queryData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

onMounted(() => {
  getNewsCategory();
});
</script>
