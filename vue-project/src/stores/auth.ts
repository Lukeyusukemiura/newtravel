import { defineStore } from "pinia";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInAnonymously,
} from "firebase/auth";

const auth = getAuth();
const originUser = auth.currentUser;
const provider = new GoogleAuthProvider();

export const authStore = defineStore("auth", {
  state: () => ({
    currentUser: originUser,
  }),
  getters: {
    isLoggedIn: (state) => state.currentUser !== null,
  },
  actions: {
    async login() {
      try {
        const res = await signInWithPopup(auth, provider);
        this.$patch({ currentUser: res.user });
        alert("ログインが完了しました");
        // ルーティングを入れる
      } catch (err) {
        if (err instanceof Error) {
          alert("適切なアカウントを選択してください");
          console.log(err);
          return;
        }
        throw err;
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.$reset();
        alert("ログアウト");
        // ルーティングを入れる
      } catch (err) {
        if (err instanceof Error) {
          alert("ログアウトに失敗しました");
          return;
        }
        throw err;
      }
    },
    async getAuthState(): Promise<any> {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          (user) => {
            this.$patch({ currentUser: user });
            resolve(user);
          },
          (error) => {
            alert("ログイン状態ではありません");
            reject(error);
          }
        );
      });
    },
    async guestsLogin() {
      try {
        const guest = await signInAnonymously(auth);
        this.$patch({ currentUser: guest.user });
        alert("ログインしました");
        // ルーティングを入れる
      } catch (err) {
        if (err instanceof Error) {
          alert("ログインに失敗しました");
          return;
        }
        throw err;
      }
    },
  },
});
