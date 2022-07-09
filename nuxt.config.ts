import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  buildModules: ['nuxt-windicss'],
  build: {
    transpile: ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz/esm/formatInTimeZone']
    },
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
})
