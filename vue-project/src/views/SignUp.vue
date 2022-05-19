<script setup lang="ts">
import { authStore } from "../stores/auth";
import { storeToRefs } from "pinia";

const auth = authStore();
const { currentUser, isLoggedIn } = storeToRefs(auth);
auth.getAuthState();
</script>
<template>
  <div class="body-bg" style="font-family: 'Lato', sans-serif">
    <div
      class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"
    >
      <section>
        <h3 class="font-bold text-2xl">Welcome to Pegasus</h3>
        <p class="text-gray-600 pt-2">Create a new account.</p>
      </section>
      <div class="max-w-lg mx-auto">
        <a href="#">
          <h1 class="text-4xl font-bold text-white text-center">Pegasus</h1>
        </a>
        <div class="">
          <button
            v-show="!isLoggedIn"
            @click="auth.login()"
            type="button"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google
          </button>

          <div
            v-show="isLoggedIn"
            class="flex justify-center items-center space-x-4"
          >
            <div class="flex items-center space-y-1 font-medium">
              <div>
                {{
                  currentUser?.displayName != null
                    ? currentUser?.displayName
                    : "ゲスト"
                }}さん
              </div>
              <img
                v-show="currentUser?.displayName != null"
                class="w-10 h-10 rounded-full"
                :src="currentUser?.photoURL"
                alt=""
              />

              <div
                v-show="currentUser?.displayName == null"
                class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
              >
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <button
            v-show="isLoggedIn"
            @click="auth.logout()"
            class="w-2/12 border border-b-red-400 bg-red-100"
          >
            ログアウト
          </button>
        </div>
        <div>
          <a
            v-show="!isLoggedIn"
            @click="auth.guestsLogin()"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 bg-white overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group cursor-pointer"
          >
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease"
              >ゲスト ログイン</span
            >
            <span class="relative invisible">Button Text</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
