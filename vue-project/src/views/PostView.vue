<script setup lang="ts"></script>
<template>
  <div class="flex justify-center items-center">
    <div class="border">
      <div class="m-3 flex justify-center items-center">
        <input type="file" placeholder="choose a file" />
      </div>
      <div class="mb-4 flex justify-center items-center">
        <lavel>what do you travel for</lavel>
        <input class="border" type="text" placeholder="I travel for..." />
      </div>
      <div class="justify-center flex items-center">
        <button class="bg-indigo-800 text-white rounded-lg px-3 py-3">
          POST
        </button>
      </div>
    </div>
  </div>
</template>
