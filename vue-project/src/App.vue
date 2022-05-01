<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderCommon from "@/components/HeaderCommon.vue";
import { ref } from "vue";
let headerHeightStyle = ref<string>();
</script>

<template>
  <HeaderCommon ref="headerRef" :style="{ height: headerHeightStyle }" />
  <RouterView />
</template>
