import { createDiscreteApi } from 'naive-ui'

export default defineNuxtPlugin(nuxtApp => {
  const loading = ref(null)
  nuxtApp.hook('app:mounted', () => {
    if (!loading.value) {
      const { loadingBar } = createDiscreteApi(['loadingBar'])
      loading.value = loadingBar
    }
  })
  nuxtApp.hook('page:start', () => {
    loading.value?.start()
  })
  nuxtApp.hook('page:finish', () => {
    setTimeout(() => loading.value?.finish(), 150)
  })
  nuxtApp.hook('app:error', () => {
    loading.value?.error()
    // 判断是否出于客户端
    if (process.client) {
      setTimeout(() => loading.value?.finish(), 150)
    }
  })
})
