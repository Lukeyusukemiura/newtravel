<script setup lang="ts"></script>

<template>
  <div class="flex px-4 py-8 bg-gray-700 items-center justify-center">
    <RouterLink to="/" class="px-2 font-bold text-5xl text-white top-font"
      >Pegasus</RouterLink
    >
  </div>
  <RouterLink
    class="absolute top-10 left-3 font-bold text-3xl text-white top-font px-2"
    to="/account"
    >Account</RouterLink
  >
  <RouterLink
    class="absolute top-10 left-44 font-bold text-3xl text-white top-font px-2"
    to="/post"
    >Post</RouterLink
  >
  <div class="absolute top-10 right-1">
    <input class="text" />
    <RouterLink
      class="text-white text-3xl text-xs m-2 px-3 py-3 rounded bg-blue-600"
      to="/signIn"
      >Login</RouterLink
    >
    <RouterLink
      class="text-white text-3xl text-xs m-2 px-3 py-3 rounded bg-blue-600"
      to="/signUp"
      >Sign Up</RouterLink
    >
  </div>
</template>

<style>
.top-font {
  font-family: serif;
}
</style>
