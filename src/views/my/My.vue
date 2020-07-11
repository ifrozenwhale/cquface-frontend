<!-- “我的”页面 显示关于当前登录账户的各种信息 -->
<template>
  <v-app>
    <br />
    <br />
    <br />
    <br />
    <br />

    <v-divider></v-divider>
    <br />
    <!-- 容器，用于存储各类组件 -->
    <v-container fluid>
      <v-row align="center" dense>
        <v-col md="8" sm="4" offset-sm="2">
          <!-- 基本信息 -->
          <BasicInfo></BasicInfo>
        </v-col>
        <v-col sm="2">
          <FanFollowCollect></FanFollowCollect>
        </v-col>
        <!-- 粉丝与关注列表的按钮 -->
        <v-divider color="grey"></v-divider>
        <br />
        <v-col sm="2" offset-sm="2">
          <!-- 个人分析报告的历史记录 -->
          <h1 class="white grey--text">History</h1>
        </v-col>
        <Shared></Shared>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import BasicInfo from './BasicInfo'
import Shared from '@/components/my/Shared'
import FanFollowCollect from '@/components/my/FanFollowCollect'
// 从api方法中得到数据

export default {
  name: 'My',
  data() {
    return {}
  },
  // 组件列表
  components: { BasicInfo, Shared, FanFollowCollect },
  mounted() {},
  methods: {},
}
</script>
