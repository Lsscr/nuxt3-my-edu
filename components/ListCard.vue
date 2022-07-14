<template>
  <div class="mb-6">
    <n-grid :x-gap="20" :cols="4">
      <n-grid-item v-for="(item, index) in data" :key="index">
        <div class="w-[260.5px] h-[150.4px] cursor-pointer shadow-md" @click="$commonOpen(item)">
          <div class="h-[90px]">
            <n-image :src="item.src" class="w-[100%] rounded-md" preview-disabled lazy />
          </div>
          <div class="flex items-center justify-center py-5">{{ item.name }}</div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
defineProps({
  data: {
    type: Array as PropType<icons_data[]>,
    default: () => {
      return []
    }
  }
})
</script>

<style lang="less" scoped>
// 使用 less 需要安装 yarn add less -D
</style>
