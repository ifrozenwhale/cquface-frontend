<!-- 关注列表组件 -->
<template>
  <v-app>
    <br />
    <br />
    <br />
    <br />
    <v-container>
      <h1 class="white grey--text">Follows</h1>
      <!-- 标题的制作 -->
      <v-divider color="grey"></v-divider>
      <br />
      <!-- 使用lollows构建UserList表 -->
      <UserList :users="follows"></UserList>
    </v-container>
  </v-app>
</template>

<script>
import UserList from '@/components/my/UserList'
import { showFollows } from '../../api/api.js'
// 从api中导入需要使用的方法

export default {
  name: 'Follows',
  components: { UserList },
  mounted() {
    showFollows(localStorage.getItem('account')).then((res) => {
      console.log(res)
      this.follows = res.data
    })
  },
  // 从api方法中得到数据
  data: () => ({
    follows: [],
  }),
}
</script>
