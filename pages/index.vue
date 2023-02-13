<template>
  <view class="">
    <view class="hello">
      <h1>测试一下纯 vue 单元测试</h1>
    </view>
  </view>
</template>

<script>
import { mount } from 'vue';
export default {
  setup() {
    mount(() => {
      console.log('hello world mount');
    });
  },
};
</script>

<style></style>
