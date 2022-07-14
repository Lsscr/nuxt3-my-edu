<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button class="text-xl text-green-500" text>MyEdu</n-button>
        <UINBMenus>
          <UINBMenusitem v-for="(item, index) in navbar" :key="index" :active="IsItemActive(item)" @click="handleClik(item.path)">
            {{ item.name }}
          </UINBMenusitem>
        </UINBMenus>
        <n-button class="ml-auto mr-[15px]" strong secondary circle type="info">
          <template #icon>
            <n-icon><Search /></n-icon>
          </template>
        </n-button>
        <!-- <n-button> 登录 </n-button> -->
        <n-dropdown :options="options">
          <n-avatar round size="medium" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </n-dropdown>
      </div>
    </div>
    <div class="w-[100%] h-[80px]" />
  </div>
</template>

<script setup lang="ts">
import { DropdownOption } from 'naive-ui'
import { Search } from '@vicons/ionicons5'
import { log } from 'console'
interface NavbarType {
  name: string
  path: string
  match?: Array<Object>
}
const route = useRoute()
const options: Array<DropdownOption> = [
  {
    label: '用户资料',
    key: 'profile'
  },
  {
    label: '编辑用户资料',
    key: 'editProfile'
  },
  {
    label: '退出登录',
    key: 'logout'
  }
]
const navbar: Array<NavbarType> = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '考试',
    path: '/paper/1',
    match: [{ name: 'paper-page' }]
  },
  {
    name: '拼团',
    path: '/list/group/1',
    match: [{ name: 'list-type-page', params: { type: 'group' } }]
  },
  {
    name: '秒杀',
    path: '/list/flashsale/1',
    match: [{ name: 'list-type-page', params: { type: 'flashsale' } }]
  },
  {
    name: '直播',
    path: '/list/live/1',
    match: [{ name: 'list-type-page', params: { type: 'live' } }]
  },
  {
    name: '专栏',
    path: '/list/column/1',
    match: [{ name: 'list-type-page', params: { type: 'column' } }]
  },
  {
    name: '电子书',
    path: '/list/book/1',
    match: [{ name: 'list-type-page', params: { type: 'book' } }]
  },
  {
    name: '社区',
    path: '/bbs/0/1',
    match: [{ name: 'bbs-bbs_id-page' }]
  },
  {
    name: '课程',
    path: '/list/course/1',
    match: [{ name: 'list-type-page', params: { type: 'course' } }]
  }
]
const IsItemActive = computed(() => (item: NavbarType): boolean => {
  if (item.match) {
    let i: number = item.match.findIndex((o: any) => {
      let flag = true
      if (o.params) {
        // 当对象属性很多的时候，需要便利调用 使用 Object中的keys方法
        let j: number = Object.keys(o.params).findIndex(str => o.params[str] == route.params[str])
        j != -1 ? flag : (flag = !flag)
      }
      return o.name == route.name && flag
    })
    return i != -1
  }
  return route.path == item.path
})
const handleClik = (path: string): void => {
  navigateTo(path)
}
</script>

<style lang="less" scoped>
.navbar {
  z-index: 1000;
  @apply fixed bg-light-50 top-0 right-0 left-0 shadow-sm;
}
</style>
