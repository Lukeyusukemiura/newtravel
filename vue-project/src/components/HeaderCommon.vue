<script setup lang="ts"></script>

<template>
  <div class="flex px-4 py-4 bg-gray-400 items-center justify-between">
    <div class="px-2 font-bold text-2xl">CODE-TYPING</div>

    <div class="relative px-2 flex items-center">
      <RouterLink class="px-2" to="/newHome">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-1 px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >new
        </span>
        ホーム画面
      </RouterLink>
      <RouterLink class="px-2" to="/newGame">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-1 px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >new
        </span>
        ゲーム画面
      </RouterLink>
      <RouterLink class="px-2" to="/newResult">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-1 px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >new
        </span>
        結果画面
      </RouterLink>
      <RouterLink class="px-2" to="/">ホーム画面</RouterLink>
      <RouterLink class="px-2" to="/about">説明画面</RouterLink>
      <RouterLink class="px-2" to="/game">ゲーム画面</RouterLink>
      <RouterLink class="px-2" to="/result">結果画面</RouterLink>
      <div>
        <p class="mr-2">
          BGM<font-awesome-icon
            icon="volume-xmark"
            class="text-gray-500/75 ml-1"
          />
        </p>
      </div>
      <div>
        <p>BGM<font-awesome-icon icon="volume-high" class="ml-1" /></p>
      </div>
      <div class="w-[70px] cursor-pointer">
        <p>VOL<font-awesome-icon icon="signal" class="ml-1" /></p>
      </div>
      <input
        class="absolute top-7 right-1 w-2/12 h-2 bg-blue-100 appearance-none cursor-pointer"
      />
    </div>
  </div>
</template>

<style></style>
