<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderCommon from "@/components/HeaderCommon.vue";
import { ref, onMounted } from "vue";

const headerRef = ref<InstanceType<typeof HeaderCommon>>();
const screenHeight = ref<number>(window.innerHeight);
console.log(screenHeight);
let headerHeightStyle = ref<string>("13.6419vh");
let pageHeightStyle = ref<string>("86.3581vh");
// onMounted(() => {
//   const headerHeight = ref<number>(headerRef.value?.$el.clientHeight);
//   const headerHeightVh = ref<number>(
//     (headerHeight.value / screenHeight.value) * 100
//   );
//   headerHeightStyle.value = headerHeightVh.value + "vh";
//   const pageHeightVh = ref<number>(100 - headerHeightVh.value);
//   pageHeightStyle.value = pageHeightVh.value + "vh";
//   console.log(pageHeightStyle.value);
//   console.log(headerHeightStyle);
// });
</script>

<template>
  <div>
    <HeaderCommon ref="headerRef" :style="{ height: headerHeightStyle }" />
    <RouterView :style="{ height: pageHeightStyle }" />
  </div>
</template>
