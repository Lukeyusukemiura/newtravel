import { defineStore } from "pinia";
import { getStorage, ref, uploadString } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();
// Create a storage reference from our storage service
const storageRef = ref(storage);

export const photoStore = defineStore("storage", {
  state: () => ({
    photo: "",
  }),
  getters: {},
  actions: {
    fileUpload(props: any) {
      //アップロードしたい画像の情報を取得。
      const file = props.target.files[0];
      //画像ファイルのURLを取得。
      this.img_url = URL.createObjectURL(file);
      //"files"は③で作成したフォルダ名
      //Firebase storageに画像ファイルを送信。
      const storageRef = ref(storage, "files/" + file.name);

      //Firebaseにデータを適切に送るために必要なコード
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("blobかfileをアップロード", snapshot);
      });
    },
  },
});
