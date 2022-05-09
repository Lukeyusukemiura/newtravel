<script setup lang="ts"></script>

<template>
  <div class="flex px-4 py-8 bg-gray-700 items-center justify-center">
    <div class="px-2 font-bold text-5xl text-white top-font">Pegasus</div>
  </div>
  <RouterLink
    class="absolute top-10 left-3 font-bold text-3xl text-white top-font px-2"
    to="/account"
    >Account</RouterLink
  >
  <div class="absolute top-10 right-1">
    <input class="text" />
    <button
      class="text-white text-3xl text-xs m-2 px-3 py-3 rounded bg-blue-600"
    >
      Login
    </button>
    <button
      class="text-white text-3xl text-xs m-2 px-3 py-3 rounded bg-blue-600"
    >
      Sign Up
    </button>
  </div>
</template>

<style>
.top-font {
  font-family: serif;
}
</style>
