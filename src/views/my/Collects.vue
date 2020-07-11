<!-- 此组件为放置当前用户所有收藏夹的页面 -->
<template>
  <v-app>
    <v-container>
      <h1 class="white grey--text">Collects</h1>
      <!-- 标题 -->
      <v-divider color="grey"></v-divider>
      <!-- 灰色分割线 -->
      <br />
      <Shared :user="collects"></Shared>
    </v-container>
  </v-app>
</template>

<script>
import Shared from '@/components/my/Shared'
import { getFavorites } from '../../api/api.js'
// 从api中导入需要使用的方法

export default {
  name: 'Collects',
  components: { Shared },
  mounted() {
    getFavorites(localStorage.getItem('account')).then((res) => {
      console.log(res)
      this.collects = res.data
    })
  },
  // 从api方法中得到
  data: () => ({
    collects: [],
  }),
  methods: {},
}
</script>
