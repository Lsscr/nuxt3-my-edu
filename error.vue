<template>
  <div class="flex justify-center items-center h-screen">
    <n-result status="500" title="服务器错误" :description="error?.message">
      <template #footer>
        <n-button @click="handleError">散财消灾</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
interface Com {
  // eslint-disable-next-line @typescript-eslint/ban-types
  error?: Object | unknown | any
}
defineProps<Com>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError = () => clearError({ redirect: '/' })
</script>
