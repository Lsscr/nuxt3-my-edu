<template>
  <div :class="{ 'menus-item': true, 'menus-active': active }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
.menus {
  &-item {
    transition: all 0.2s;
    @apply px-2 py-1 mx-1 rounded cursor-pointer hover:(bg-blue-100 text-blue-300) active:(bg-blue-600 text-light-50);
  }
  &-active {
    @apply bg-blue-100 text-blue-300;
  }
}
</style>
