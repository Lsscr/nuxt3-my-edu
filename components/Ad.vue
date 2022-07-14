<template>
  <div class="cursor-pointer h-[100px] w-[100%] mb-6" @click="$commonOpen(data[0])">
    <n-skeleton v-if="flag" width="100%" height="100px" />
    <n-image :src="data[0].src" lazy preview-disabled width="1110" @load="flag = false" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
let flag = ref(true)
defineProps({
  data: {
    type: Array as PropType<icons_data[]>,
    default: () => []
  }
})
</script>
<style lang="less" scoped>
// 使用 less 需要安装 yarn add less -D
</style>
