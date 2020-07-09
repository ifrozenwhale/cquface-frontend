<template>
  <!-- app包裹器 -->
  <v-app id="discover">
    <v-main>
      <br />
      <br />
      <!-- 大标题的制作 -->
      <v-row
        justify="space-around"
        align="center"
      >
        <v-col md="1">
          <br />
        </v-col>
        <v-col
          md="20"
          @click="refresh"
        >
          <h1 style="color:#757575 ; font-size:50px">
            发现
          </h1>
          <v-divider> </v-divider>
        </v-col>
      </v-row>

      <br />
      <br />

      <!-- 使用v-for迭代生成多个项目 -->
      <div
        v-for="(item, index) in items"
        :key="item.report_name"
      >
        <v-row
          justify="space-around"
          align="center"
        >
          <v-col md="1"> <br /></v-col>
          <v-col
            md="2"
            xs="4"
          >
            <!-- 放置图片、昵称、头像、签名等个人信息的卡片 -->
            <v-card @click="openReport(index)">
              <div
                class="text-center align-center justify-center"
                margin="0"
              >
                <v-card-text>
                  <v-img
                    object-fit
                    width="100%"
                    height="100%"
                    contain
                    :src="item.imgSrc"
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
                  <v-list-item-avatar
                    tile
                    size="120"
                    color="grey"
                  >
                    <v-img :src="item.avator"> </v-img>
                  </v-list-item-avatar>
                </v-list-item>
              </div>
            </v-card>
          </v-col>

          <!-- 放置分享文案、标签、点赞收藏评论按钮的卡片 -->
          <v-col
            md="4"
            xs="6"
          >
            <v-card
              class="mx-auto"
              max-width="100%"
              height="500px"
            >
              <!-- 用户设置的文案 -->
              <v-card-text @click="openReport(index)">
                <p class="display-1 headline mb-10">
                  {{ item.shareText }}
                </p>
              </v-card-text>
              <v-chip
                class="ma-1"
                color="indigo"
                text-color="white"
              >
                <!-- 个人信息 -->
                <!-- 分析结果 -->
                <v-avatar left>
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                性别： {{ item.gender }}
              </v-chip>

              <v-chip
                class="ma-2"
                color="primary"
                text-color="white"
              >
                年龄：{{ item.age }}
                <v-icon right>mdi-cake-variant</v-icon>
              </v-chip>

              <v-chip
                class="ma-1"
                color="orange"
                text-color="white"
              >
                <v-avatar left>
                  <v-icon>mdi-face</v-icon>
                </v-avatar>
                颜值： {{ item.faceRate }}
              </v-chip>

              <v-chip
                class="ma-1"
                color="green"
                text-color="white"
              >
                <v-avatar left>
                  <v-icon>mdi-tag-faces</v-icon>
                </v-avatar>
                表情： {{ item.expression }}
              </v-chip>

              <v-chip
                class="ma-1"
                color="purple"
                text-color="white"
              >
                <v-avatar left>
                  <v-icon>mdi-face</v-icon>
                </v-avatar>
                情绪： {{ item.mood }}
              </v-chip>

              <br />
              <!-- 点赞/收藏/评论按钮 -->
              <v-container
                fluid
                class="pa-0"
              >
                <br />
                <v-row
                  justify="start"
                  align="center"
                  class="mb-6"
                >
                  <v-col
                    cols="1"
                    sm="2"
                  >
                    <!-- 点赞  -->
                    <v-badge
                      color="red"
                      :content="item.likeNum"
                      overlap
                    >
                      <v-btn
                        x-large
                        icon
                        v-bind:color="item.isfavorite ? 'pink' : 'gray'"
                        @click="like(index)"
                      >
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-badge>
                  </v-col>

                  <!-- 评论 -->
                  <v-col
                    cols="1"
                    sm="2"
                  >
                    <v-badge
                      color="purple"
                      :content="item.commentNum"
                      overlap
                    >
                      <v-btn
                        x-large
                        icon
                        color="#1E88E5"
                        @click=";(dialog = true), commentBtn(index)"
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
      <v-dialog
        v-model="dialog"
        max-width="15%"
      >
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
              @click="commentCommit(i)"
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
import { getDiscover } from "../../api/api";
import { star } from "../../api/api";
import { commentAPI } from "../../api/api";

// script部分
export default {
  data() {
    return {
      currentAccount: "20200000",
      //是否打开对话框
      dialog: false,
      i: 0,
      content: "",
      // 发现项目
      items: [
        {
          photo_id: 1,
          user_id: 99,
          isfavorite: false,
          //图片来源
          imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //昵称
          nickName: "昵称",
          //签名
          signature: "个人签名",
          //头像
          avator: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //分享时间
          shareTime: "分享的时间",
          //文案
          shareText:
            "大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！",
          //点赞按钮颜色，根据是否点赞
          hadLiked: false,
          //收藏按钮颜色，根据是否收藏
          hadStared: false,
          likeNum: 997,
          starNum: 998,
          commentNum: 999,
          gender: "男",
          age: "21岁",
          faceRate: "100",
          expression: "微笑",
          mood: "开心"
        },
        {
          photo_id: 1,
          user_id: 99,
          isfavorite: false,
          //图片来源
          imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //昵称
          nickName: "昵称",
          //签名
          signature: "个人签名",
          //头像
          avator: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //分享时间
          shareTime: "分享的时间",
          //文案
          shareText:
            "大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！",
          //点赞按钮颜色，根据是否点赞
          hadLiked: false,
          //收藏按钮颜色，根据是否收藏
          hadStared: false,
          likeNum: 997,
          starNum: 998,
          commentNum: 999,
          gender: "男",
          age: "21岁",
          faceRate: "100",
          expression: "微笑",
          mood: "开心"
        },
        {
          photo_id: 1,
          user_id: 99,
          isfavorite: false,
          //图片来源
          imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //昵称
          nickName: "昵称",
          //签名
          signature: "个人签名",
          //头像
          avator: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //分享时间
          shareTime: "分享的时间",
          //文案
          shareText:
            "大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！",
          //点赞按钮颜色，根据是否点赞
          hadLiked: false,
          //收藏按钮颜色，根据是否收藏
          hadStared: false,
          likeNum: 997,
          starNum: 998,
          commentNum: 999,
          gender: "男",
          age: "21岁",
          faceRate: "100",
          expression: "微笑",
          mood: "开心"
        },
        {
          photo_id: 1,
          user_id: 99,
          isfavorite: false,
          //图片来源
          imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //昵称
          nickName: "昵称",
          //签名
          signature: "个人签名",
          //头像
          avator: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //分享时间
          shareTime: "分享的时间",
          //文案
          shareText:
            "大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！",
          //点赞按钮颜色，根据是否点赞
          hadLiked: false,
          //收藏按钮颜色，根据是否收藏
          hadStared: false,
          likeNum: 997,
          starNum: 998,
          commentNum: 999,
          gender: "男",
          age: "21岁",
          faceRate: "100",
          expression: "微笑",
          mood: "开心"
        },
        {
          photo_id: 1,
          user_id: 99,
          isfavorite: false,
          //图片来源
          imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //昵称
          nickName: "昵称",
          //签名
          signature: "个人签名",
          //头像
          avator: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
          //分享时间
          shareTime: "分享的时间",
          //文案
          shareText:
            "大家好，我是CQUFace社区新入驻的po主，我的名字叫Kevin，喜欢分享生活中的点点滴滴。今后将会在CQU Face的社区中分享我的日常情绪和思考，CQUFace社区真的是一个十分有爱的大社区，我们可以在这里找到自己的同好，看到自己感兴趣的任何东西，很希望欢迎大家关注我，和我成为朋友！",
          //点赞按钮颜色，根据是否点赞
          hadLiked: false,
          //收藏按钮颜色，根据是否收藏
          hadStared: false,
          likeNum: 997,
          starNum: 998,
          commentNum: 999,
          gender: "男",
          age: "21岁",
          faceRate: "100",
          expression: "微笑",
          mood: "开心"
        }
      ]
    };
  },

  mounted: function() {
    this.refresh();
  },

  methods: {
    //打开报告
    openReport(index) {
      // alert(this.items[index].photo_id + this.items[index].user_id)
      console.log(this.items[index].user_id);
      this.$router.push({
        path: "/report",
        query: {
          user_id: this.items[index].user_id,
          photo_id: this.items[index].photo_id
        }
      });
    },

    //点赞
    like(index) {
      if (this.items[index].isfavorite == true) this.items[index].likeNum--;
      else if (this.items[index].isfavorite == false)
        this.items[index].likeNum++;
      star(this.currentAccount, this.items[index].photo_id).then(response => {
        // this.items[index].isfavorite = !this.items[index].isfavorite
        this.items[index].isfavorite = !this.items[index].isfavorite;
        this.items[index].starNum = response.favorite_num;
      });
    },
    //评论

    commentCommit(i) {
      commentAPI(
        this.currentAccount,
        this.items[i].photo_id,
        this.content
      ).then(response => {
        console.log(response);
        alert("评论成功啦");
      });
    },

    commentBtn(index) {
      this.i = index;
    },

    //刷新
    refresh() {
      this.currentAccount = localStorage.getItem("userId");
      getDiscover(this.currentAccount, 5).then(response => {
        console.log(response.data);
        for (this.i = 0; this.i < 5; this.i++) {
          this.items[this.i].imgSrc =
            "data:image/png;base64," + response.data[this.i].report_picture;
          this.items[this.i].nickName = response.data[this.i].nickname;
          this.items[this.i].signature = response.data[this.i].signature;
          this.items[this.i].shareTime = response.data[this.i].report_time;
          this.items[this.i].shareText = response.data[this.i].report_text;
          this.items[this.i].gender = response.data[this.i].gender;
          this.items[this.i].age = response.data[this.i].age;
          this.items[this.i].expression = response.data[this.i].expression;
          this.items[this.i].mood = response.data[this.i].emotion;
          this.items[this.i].likeNum = response.data[this.i].favorite_num;
          this.items[this.i].starNum = response.data[this.i].favorite_num;
          this.items[this.i].commentNum = response.data[this.i].comment_num;
          this.items[this.i].photo_id = response.data[this.i].photo_id;
          this.items[this.i].user_id = response.data[this.i].user_id;
          this.items[this.i].faceRate = response.data[this.i].score;
          this.items[this.i].isfavorite = response.data[this.i].is_favorites;
        }
      });
    }
  }
};
</script>
