<template>
  <div class="menus">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.menus {
  @apply flex flex-row px-4;
}
</style>
