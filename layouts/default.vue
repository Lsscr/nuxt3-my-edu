<template>
  <div class="body">
    <nav-bar />
    <main class="container">
      <slot />
    </main>
    <page-footer />
  </div>
</template>
<script setup>
import NavBar from './components/NavBar'
import PageFooter from './components/PageFooter'
</script>
<style lang="less">
.body {
  @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
