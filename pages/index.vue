<template>
  <div>
    <n-button type="primary" size="medium" @click="handle">故意错误</n-button>
    <nuxt-link to="/about"> <n-button type="error" size="medium">跳转到关于页</n-button></nuxt-link>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NButton } from 'naive-ui'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handle = () => throwError('故意错误')
</script>
