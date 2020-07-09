<template>
  <!-- app包裹器 -->
  <v-app id="discover">
    <v-main>
      <br />
      <br />
      <!-- 大标题的制作 -->
      <v-row justify="space-around" align="center">
        <v-col md="2">
          <br />
        </v-col>
        <v-col md="20">
          <h1 style="color:#757575 ; font-size:50px">我的收藏</h1>
          <v-divider> </v-divider>
        </v-col>
      </v-row>

      <br />
      <br />

      <!-- 使用v-for迭代生成多个项目 -->
      <div v-for="item in items" :key="item.report_name">
        <v-row justify="space-around" align="center">
          <v-col md="2"> <br /></v-col>
          <v-col md="2">
            <!-- 放置图片、昵称、头像、签名等个人信息的卡片 -->
            <v-card @click="openReport">
              <div class="text-center align-center justify-center" margin="0">
                <v-card-text>
                  <v-img
                    object-fit
                    width="100%"
                    height="100%"
                    contain
                    :src="imgSrc"
                  ></v-img>
                </v-card-text>
                <v-list-item three-line>
                  <!-- 昵称 -->
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      {{ item.nickName }}
                    </v-list-item-title>
                    <!-- 签名 -->
                    <v-list-item-subtitle>{{
                      item.signature
                    }}</v-list-item-subtitle>
                    <!-- 时间 -->
                    <v-list-item-subtitle>{{
                      item.shareTime
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <!-- 头像 -->
                  <v-list-item-avatar tile size="120" color="grey">
                    <v-img :src="item.avator"> </v-img>
                  </v-list-item-avatar>
                </v-list-item>
              </div>
            </v-card>
          </v-col>

          <!-- 放置分享文案、标签、点赞收藏评论按钮的卡片 -->
          <v-col md="4">
            <v-card class="mx-auto" max-width="100%" height="500px">
              <!-- 用户设置的文案 -->
              <v-card-text @click="openReport">
                <p class="display-1 headline mb-10">
                  {{ item.shareText }}
                </p>
              </v-card-text>
              <v-chip class="ma-1" color="indigo" text-color="white">
                <!-- 个人信息 -->
                <!-- 分析结果 -->
                <v-avatar left>
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                性别： {{ item.gender }}
              </v-chip>

              <v-chip class="ma-2" color="primary" text-color="white">
                年龄：{{ item.age }}
                <v-icon right>mdi-cake-variant</v-icon>
              </v-chip>

              <v-chip class="ma-1" color="orange" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-face</v-icon>
                </v-avatar>
                颜值： {{ item.faceRate }}
              </v-chip>

              <v-chip class="ma-1" color="green" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-tag-faces</v-icon>
                </v-avatar>
                表情： {{ item.expression }}
              </v-chip>

              <v-chip class="ma-1" color="purple" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-face</v-icon>
                </v-avatar>
                情绪： {{ item.mood }}
              </v-chip>

              <br />
              <!-- 点赞/收藏/评论按钮 -->
              <v-container fluid class="pa-0">
                <br />
                <v-row justify="start" align="center" class="mb-6">
                  <v-col cols="1" sm="2">
                    <!-- 点赞  -->
                    <v-badge color="red" :content="item.likeNum" overlap>
                      <v-btn
                        x-large
                        icon
                        v-bind:color="item.hadLiked ? 'pink' : 'gray'"
                        @click="changeLiked"
                      >
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-badge>
                  </v-col>

                  <!-- 收藏 -->
                  <v-col cols="1" sm="2">
                    <v-badge color="blue" :content="item.starNum" overlap>
                      <v-btn
                        x-large
                        icon
                        v-bind:color="item.hadStared ? 'indigo' : 'gray'"
                        @click="changeStared"
                      >
                        <v-icon>mdi-star</v-icon>
                      </v-btn>
                    </v-badge>
                  </v-col>

                  <!-- 评论 -->
                  <v-col cols="1" sm="2">
                    <v-badge color="purple" :content="item.commentNum" overlap>
                      <v-btn
                        x-large
                        icon
                        color="#1E88E5"
                        @click="dialog = true"
                      >
                        <v-icon>mdi-comment</v-icon>
                      </v-btn>
                    </v-badge>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <br />
        </v-row>
        <br />
        <br />
        <Divider></Divider>
      </div>

      <!-- 评论的对话框 -->
      <v-dialog v-model="dialog" max-width="15%">
        <v-card mx:auto>
          <v-card-title class="headline text-center">
            编写评论
          </v-card-title>

          <v-card-text>
            <br />
            <!-- add content -->
            <v-textarea
              v-model="content"
              label="说点什么吧"
              name="content"
            ></v-textarea>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="light-blue darken-3"
              class="red-text"
              @click="comment()"
            >
              <span class="white--text text--lighten-2"> 提交评论</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
// script部分
export default {
  data() {
    return {
      //是否打开对话框
      dialog: false,

      //图片来源
      imgSrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

      // 发现项目
      items: [
        {
          //昵称
          nickName: '昵称',

          //签名
          signature: '个人签名',

          //头像
          avator: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

          //分享时间
          shareTime: '分享的时间',

          //文案
          shareText:
            '大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！',

          //点赞按钮颜色，根据是否点赞
          hadLiked: false,

          //收藏按钮颜色，根据是否收藏
          hadStared: false,

          likeNum: 997,

          starNum: 998,

          commentNum: 999,

          gender: '男',

          age: '21岁',

          faceRate: '100',

          expression: '微笑',

          mood: '开心',
        },
        {
          //昵称
          nickName: '昵称',

          //签名
          signature: '个人签名',

          //头像
          avator: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

          //分享时间
          shareTime: '分享的时间',

          //文案
          shareText:
            '大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！',

          //点赞按钮颜色，根据是否点赞
          hadLiked: false,

          //收藏按钮颜色，根据是否收藏
          hadStared: false,

          likeNum: 997,

          starNum: 998,

          commentNum: 999,

          gender: '男',

          age: '21岁',

          faceRate: '100',

          expression: '微笑',

          mood: '开心',
        },
        {
          //昵称
          nickName: '昵称',

          //签名
          signature: '个人签名',

          //头像
          avator: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

          //分享时间
          shareTime: '分享的时间',

          //文案
          shareText:
            '大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！',

          //点赞按钮颜色，根据是否点赞
          hadLiked: false,

          //收藏按钮颜色，根据是否收藏
          hadStared: false,

          likeNum: 997,

          starNum: 998,

          commentNum: 999,

          gender: '男',

          age: '21岁',

          faceRate: '100',

          expression: '微笑',

          mood: '开心',
        },
        {
          //昵称
          nickName: '昵称',

          //签名
          signature: '个人签名',

          //头像
          avator: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

          //分享时间
          shareTime: '分享的时间',

          //文案
          shareText:
            '大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！',

          //点赞按钮颜色，根据是否点赞
          hadLiked: false,

          //收藏按钮颜色，根据是否收藏
          hadStared: false,

          likeNum: 997,

          starNum: 998,

          commentNum: 999,

          gender: '男',

          age: '21岁',

          faceRate: '100',

          expression: '微笑',

          mood: '开心',
        },
        {
          //昵称
          nickName: '昵称',

          //签名
          signature: '个人签名',

          //头像
          avator: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

          //分享时间
          shareTime: '分享的时间',

          //文案
          shareText:
            '大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！',

          //点赞按钮颜色，根据是否点赞
          hadLiked: false,

          //收藏按钮颜色，根据是否收藏
          hadStared: false,

          likeNum: 997,

          starNum: 998,

          commentNum: 999,

          gender: '男',

          age: '21岁',

          faceRate: '100',

          expression: '微笑',

          mood: '开心',
        },
      ],
    }
  },
  methods: {
    //打开报告
    openReport() {
      this.$router.push('/report')
    },

    //点赞
    like(photoid) {
      alert('点赞了' + photoid)
    },

    //评论
    comment(photoid, comentText) {
      alert('评论了' + photoid + comentText)
    },

    //收藏
    star(photoid) {
      alert('收藏了' + photoid)
    },

    //刷新
    refresh() {
      alert('刷新了')
    },

    //点赞图标变化
    changeLiked() {
      if (this.items[this.index].hadLiked == true)
        this.items[this.index].likeNum--
      else if (this.items[this.index].hadLiked == false)
        this.items[this.index].likeNum++
      this.hadLiked = !this.hadLiked
    },

    //收藏
    changeStared() {
      if (this.hadStared == true) this.starNum--
      else if (this.hadStared == false) this.starNum++
      this.hadStared = !this.hadStared
    },
  },
}
</script>

<style>
.el-row {
  height: 50px;
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #e5e9f2;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 24px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.banner-text {
  font-size: 24px;
  color: black;
  text-align: center;
}
.report-img {
  width: 50px;
  height: 50px;
}
.report-item {
  height: 500px;
}
</style>
