<template>
  <div class="mt-auto bg-dark-400 text-gray-100">
    <div class="flex items-center justify-center py-5">
      <a v-for="(item, index) in 4" :key="index" class="p-3" href="#">友情链接</a>
    </div>
    <div class="container flex justify-center items-center py-5 border-t border-gray-700">
      <small>Copyright © 2022 dishait.cn 粤ICP备2020100536号</small>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// 使用 less 需要安装 yarn add less -D
</style>
