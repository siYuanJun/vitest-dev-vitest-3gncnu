<template>
  <div class="">
    <div class="hello">
      <h1>hello</h1>
      <h1>测试一下 vue 单元测试</h1>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("hello world mount");
    });
  },
};
</script>

<style></style>
