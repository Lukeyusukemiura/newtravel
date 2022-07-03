<script setup lang="ts">
import { getStorage, ref, uploadBytes, listAll } from "firebase/storage";
import { photoStore } from "../stores/photo";
import { authStore } from "../stores/auth";

const auth = authStore();
auth.getUserInfo();
const storage = getStorage();
const storageRef = ref(storage, "files/photo");
const photo = photoStore();

const { fileUpload, photoUpload } = photo;

// const getFiles = (): void => {
//   const fileName = storageRef.value.bucket;
//   const image = document.createElement("img");
//   image.src = fileName;
//   const box = document.createElement("div");
//   box.append(image);
//   document.getElementById("boxes")?.append(box);
// };
// onMounted(() => {
//   getFiles();
// });
// 'file' comes from the Blob or File API

// const OnFileChange = (event: any): void => {
//   uploadBytes(storageRef, event?.target.file).then((snapshot) => {
//     console.log("Uploaded a blob or file!");
//   });
// };
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="border">
      <div class="m-3 flex justify-center items-center">
        <input
          type="file"
          @change="photoUpload"
          accept=".png, .jpeg, .jpg"
          placeholder="choose a file"
        />
      </div>
      <button>see the user</button>
      <input
        v-model="photo.photo"
        type="text"
        placeholder="type the reason you travel"
      />
      <div id="boxes"></div>
      <div>{{ photo.photo }}</div>
      <div class="mb-4 flex justify-center items-center">
        <lavel>what do you travel for</lavel>
        <input class="border" type="text" placeholder="I travel for..." />
      </div>
      <div class="justify-center flex items-center">
        <button
          @click="fileUpload"
          class="bg-indigo-800 text-white rounded-lg px-3 py-3"
        >
          POST
        </button>
      </div>
    </div>
  </div>
</template>
