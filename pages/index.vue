<template>
  <div><n-button type="primary" size="medium">你好啊</n-button>{{ data }}</div>
</template>

<script setup lang="ts">
const { data } = useFetch('index', {
  key: 'index',
  headers: {
    appid: 'bd9d01ecc75dbbaaefce'
  },
  baseURL: 'http://demonuxtapi.dishait.cn/pc/',
  // 类似于响应拦截器
  transform: (res: any) => {
    return res.data
  }
})
</script>
