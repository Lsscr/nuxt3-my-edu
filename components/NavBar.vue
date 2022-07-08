<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button class="text-xl" text>MyEdu</n-button>
        <div class="menus">
          <div
            v-for="(item, index) in navbar"
            :key="index"
            :class="{ 'menus-item': true, 'menus-active': $route.path == item.path }"
            @click="handleClik(item.path)"
          >
            {{ item.name }}
          </div>
        </div>
        <n-button class="ml-auto mr-[15px]" strong secondary circle type="info">
          <template #icon>
            <n-icon><Search /></n-icon>
          </template>
        </n-button>
        <!-- <n-button> 登录 </n-button> -->
        <n-dropdown :options="options">
          <n-button>用户资料</n-button>
        </n-dropdown>
      </div>
    </div>
    <div class="w-[100%] h-[80px]" />
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon, NDropdown, DropdownOption } from 'naive-ui'
import { Search } from '@vicons/ionicons5'
interface NavbarType {
  name: string
  path: string
}
const router = useRouter()
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
    path: '/paper/1'
  },
  {
    name: '拼团',
    path: '/list/group/1'
  },
  {
    name: '秒杀',
    path: '/list/flashsale/1'
  },
  {
    name: '直播',
    path: '/list/live/1'
  },
  {
    name: '专栏',
    path: '/list/column/1'
  },
  {
    name: '电子书',
    path: '/list/book/1'
  },
  {
    name: '社区',
    path: '/bbs/0/1'
  },
  {
    name: '课程',
    path: '/list/course/1'
  }
]
const handleClik = (path: string): void => {
  navigateTo(path)
}
</script>

<style lang="less" scoped>
.navbar {
  z-index: 1000;
  @apply fixed bg-light-50 top-0 right-0 left-0 shadow-sm;
}
.menus {
  @apply flex flex-row px-4;
  &-item {
    transition: all 0.2s;
    @apply px-2 py-1 mx-1 rounded cursor-pointer hover:(bg-blue-100 text-blue-300) active:(bg-blue-600 text-light-50);
  }
  &-active {
    @apply bg-blue-100 text-blue-300;
  }
}
</style>
