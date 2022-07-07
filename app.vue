<template>
  <div>
    <n-config-provider inline-theme-disabled>
      <NuxtLayout> <NuxtPage /> </NuxtLayout>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NConfigProvider } from 'naive-ui'
</script>
