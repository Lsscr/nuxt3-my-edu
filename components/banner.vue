<template>
  <div>
    <n-carousel show-arrow class="mb-6">
      <img v-for="(item, index) in data" :key="index" class="carousel-img cursor-pointer" :src="item.src" >
    </n-carousel>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
type bannerType = {
  src: string
  type: string
  url: string
}
defineProps({
  data: {
    type: Array as PropType<bannerType[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
