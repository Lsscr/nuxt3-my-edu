// 声明注入属性的类型,可以在 $ 就不会报错了
declare module '#app' {
  interface NuxtApp {
    $commonOpen(item: icons_data)
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $commonOpen(item: icons_data)
  }
}

export {}
