<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]"><span>123</span></div>
    </div>
    <div class="w-[100%] h-[80px]" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.navbar {
  z-index: 1000;
  @apply fixed bg-light-50 top-0 right-0 left-0 shadow-sm;
}
</style>
