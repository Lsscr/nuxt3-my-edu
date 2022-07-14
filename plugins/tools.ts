export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('commonOpen', (item: icons_data) => {
    switch (item.type) {
      case 'icons':
        // 境外网站调用 window.open 进行打开
        window.open(item.url)
        break
      case 'webview':
        window.open(item.url)
        break
      case 'course':
        navigateTo('/detail/course/539')
    }
  })
})
