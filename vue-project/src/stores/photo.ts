import { defineStore } from "pinia";
import { getStorage, ref, uploadBytes, listAll } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

export const photoStore = defineStore("storage", {
  state: () => ({
    photo: "",
    img_url: "",
    imageUrl: null,
  }),
  getters: {},
  actions: {
    photoUpload(event: any) {
      this.imageUrl = event.target.files[0];
      console.log("it's actually poppin");
    },
    fileUpload() {
      //アップロードしたい画像の情報を取得。
      const file = this.imageUrl;
      const storageRef = ref(storage, "files/photo" + file.name);
      //画像ファイルのURLを取得。
      this.img_url = URL.createObjectURL(file);
      //"files"は③で作成したフォルダ名
      //Firebase storageに画像ファイルを送信。
      //Firebaseにデータを適切に送るために必要なコード
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("blobかfileをアップロード", snapshot);
      });
    },
  },
});
