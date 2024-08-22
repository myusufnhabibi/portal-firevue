<template>
  <v-card class="mx-auto">
    <v-img
      class="align-end text-white"
      height="340"
      :src="
        detailId.image
          ? detailId.image
          : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
      "
      cover
    >
      <v-card-title>{{ detailId.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ detailId.category.name }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ detailId.content }}</div>
    </v-card-text>

    <v-card-subtitle class="pt-4 mb-5">
      {{ detailId.writeenBy.name }} -
      {{ new Date(detailId.createdAt).toDateString() }}
    </v-card-subtitle>

    <v-card-text v-if="isUpdate">
      <v-form style="width: 300px" @submit.prevent="handleUpload(detailId)">
        <p class="text-error mb-3">{{ fileError }}</p>
        <v-file-input
          label="Thumbnail News"
          chips
          placeholder="Select your files"
          prepend-icon="mdi-image"
          variant="outlined"
          @change="handleChange"
        ></v-file-input>
        <v-btn
          type="submit"
          block
          color="info"
          variant="tonal"
          :disabled="fileError || !formInput"
          >Upload</v-btn
        >
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Back" @click="$router.go(-1)"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db, storage } from "@/config/firebase";
import {
  ref as refFile,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

const route = useRoute();
const router = useRouter();

const file = ref(null);
const fileError = ref(null);
const filePath = ref(null);
const urlFile = ref(null);
const formInput = ref(false);

const handleChange = (e) => {
  const selected = e.target.files[0];
  const types = ["image/png", "image/jpg", "image/jpeg"];

  if (selected && types.includes(selected.type)) {
    file.value = selected;
    fileError.value = null;
    formInput.value = true;
  } else {
    file.value = null;
    fileError.value = "The file must have the extension png, jpg, jpeg";
  }
};

const handleUpload = async (paramId) => {
  if (file.value) {
    filePath.value = `thumbnail/${paramId.writeenBy.id}/${file.value.name}`;
    const storageRef = refFile(storage, filePath.value);
    const uploadTask = await uploadBytesResumable(storageRef, file.value);

    const getLink = await getDownloadURL(uploadTask.ref);
    urlFile.value = getLink;

    try {
      await updateDoc(doc(db, "news", route.params.id), {
        image: urlFile.value,
      });
      router.push({ name: "News" });
    } catch (error) {
      console.log(error);
    }
  }
};

defineProps({
  detailId: {
    type: Object,
    required: true,
  },
  isUpdate: {
    type: Boolean,
    default: false,
  },
});
</script>
