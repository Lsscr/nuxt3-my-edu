<template>
  <div>
    <template v-if="pending">
      <div>正在加载中 ing</div>
    </template>
    <template v-else-if="error">
      <div>错误提示 : {{ error?.data?.data }}</div>
    </template>
    <template v-else>
      <template v-for="(item, index) in data" :key="index">
        <banner v-if="item.type == 'swiper'" :data="item.data" />
        <list-card v-if="item.type == 'icons'" :data="item.data" />
        <ad v-if="item.type == 'imageAd'" :data="item.data" />
        <pt-list />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error, refresh } = useFetch('index', {
  key: 'index',
  headers: {
    appid: 'bd9d01ecc75dbbaaefce'
  },
  baseURL: 'http://demonuxtapi.dishait.cn/pc/',
  // 类似于响应拦截器
  transform: (res: any) => {
    return res.data
  },
  // 是否要加载缓存
  initialCache: false,
  // 是否执行懒加载,只有调用 lazy 才能去使用 pending 属性
  lazy: true
})

// 错误的时候,服务端抛出错误
if (process.server && error.value) {
  throwError(error.value?.data?.data)
}
</script>
