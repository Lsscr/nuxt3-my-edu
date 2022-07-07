<template>
  <div class="flex justify-center items-center h-screen">
    <n-result status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了">
      <template #footer>
        <n-button @click="handleError">散财消灾</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NResult, NButton } from 'naive-ui'
interface Com {
  // eslint-disable-next-line @typescript-eslint/ban-types
  error?: Object | unknown
}
defineProps<Com>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError = () => clearError({ redirect: '/' })
</script>
