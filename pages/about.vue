<template>
  <div>
    关于页<n-icon size="40"><Search /></n-icon><nuxt-link to="/">跳转</nuxt-link>
    <n-icon size="40">
      <SearchCircleOutline />
    </n-icon>
  </div>
</template>
<script setup>
import { NIcon } from 'naive-ui'

import { Search, SearchCircleOutline } from '@vicons/ionicons5'
</script>
