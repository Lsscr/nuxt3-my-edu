<template>
  <div class="body">
    <nav-bar />
    <main class=".container">
      <slot />
    </main>
    <page-footer />
  </div>
</template>

<style lang="less">
.body {
  @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
