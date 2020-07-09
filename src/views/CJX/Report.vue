<template>
  <!-- html part -->
  <v-app>
    <br />
    <br />
    <!-- 大标题的制作 -->
    <v-row justify="space-around" align="center">
      <v-col md="2">
        <br />
      </v-col>
      <v-col md="20">
        <h1 style="color:#757575 ; font-size:50px" @click="refresh">
          动态详情
        </h1>
        <v-divider> </v-divider>
      </v-col>
    </v-row>

    <br />
    <br />

    <v-container class="fill-height" fluid>
      <!-- 使用v-container包裹元件 -->
      <v-row justify="space-around" align="center">
        <v-col md="2"></v-col>
        <v-col md="3">
          <v-card>
            <!-- 存放照片、昵称、头像、个人签名等信息的卡片 -->
            <div class="text-center align-center justify-center" margin="0">
              <v-card-text>
                <!-- 照片 -->
                <v-img
                  object-fit
                  width="100%"
                  height="100%"
                  contain
                  :src="imgSrc"
                ></v-img>
              </v-card-text>

              <v-list-item three-line>
                <!-- 个人信息 -->
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{
                    nickName
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ signature }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="120" color="grey">
                  <v-img :src="avator"> </v-img>
                </v-list-item-avatar>
              </v-list-item>
            </div>
          </v-card>
          <br />

          <!-- 分享文案 -->
          <v-card mx:auto max-width="100%">
            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card color="#E0E0E0">
                    <v-card-title class="headline">{{
                      shareText
                    }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <!-- 点赞、收藏、评论按钮 -->
            <v-container fluid class="pa-0">
              <v-row justify="space-around" align="center">
                <v-col cols="12" sm="3">
                  <!-- 点赞 -->
                  <v-badge color="red" :content="likeNum" overlap>
                    <v-btn
                      x-large
                      icon
                      v-bind:color="isfavorite ? 'pink' : 'gray'"
                      @click="like"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-badge>
                </v-col>

                <!-- 评论 -->
                <v-col cols="12" sm="3">
                  <v-badge color="purple" :content="commentNum" overlap>
                    <v-btn x-large icon color="#1E88E5" @click="dialog = true">
                      <v-icon>mdi-comment</v-icon>
                    </v-btn>
                  </v-badge>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <!-- 编写评论的对话框 -->
        <v-dialog v-model="dialog" max-width="15%">
          <v-card mx:auto>
            <v-card-title class="headline text-center">
              编写评论
            </v-card-title>

            <!-- textfiel -->
            <v-card-text>
              <br />
              <!-- add content -->
              <v-textarea
                v-model="content"
                label="说点什么吧"
                name="content"
              ></v-textarea>
            </v-card-text>

            <!-- 提交评论的选项 -->
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="light-blue darken-3"
                class="red-text"
                @click="comment()"
              >
                <span class="white--text text--lighten-2" @click="comment">
                  提交评论</span
                >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- 分析报告与 评论列表 -->
        <v-col mx:auto offset="1">
          <div>
            <v-card mx:auto max-width="75%">
              <v-card-title class="headline justify-center font-weight-bold">
                分析报告
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <p class="text-h6">{{ item.name }}</p>
                      <v-spacer></v-spacer>
                      <v-chip class="ma-2" color="#CFD8DC" label>
                        <v-avatar left v-if="item.icon" :color="item.color">
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-avatar>
                        {{ item.type }}
                      </v-chip>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>

            <!-- 评论列表 -->
            <br />
            <v-card mx:auto max-width="75%">
              <v-card-text>
                <p class="display-1 text--primary">
                  评论列表
                </p>

                <!-- 生成评论项目 -->
                <v-card
                  v-for="(item, index) in commentItems"
                  :key="item.name"
                  mx:auto
                  max-width="100%"
                  color="#EEEEEE"
                >
                  <!-- 分页操作 -->
                  <div v-if="index >= 2 * (page - 1) && index <= 2 * page - 1">
                    <v-card-text
                      class="headline font-weight-bold"
                      color="#EEEEEE"
                    >
                      {{ item.cont }}
                    </v-card-text>
                    <v-list-item class="grow" color="#EEEEEE">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          v-bind:src="commentItems[index].avator"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <br />
                  </div>
                </v-card>
              </v-card-text>

              <!-- 分页的功能栏 -->
              <div class="text-center">
                <v-pagination
                  v-model="page"
                  :length="
                    commentItems.length % 2 == 0
                      ? commentItems.length / 2
                      : commentItems.length / 2 + 1
                  "
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                ></v-pagination>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// script part
import { getReportDetail, star, commentAPI } from '../../api/api'
import { trans } from '../../api/faceTranslate.js'

export default {
  data() {
    return {
      photo_id: 99,
      user_id: 99,
      //当前页面号码
      page: 1,
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

      //图片来源
      imgSrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',

      //是否显示对话框
      dialog: false,

      //评论的内容
      content: '',

      //评论项目
      commentItems: [
        {
          cont:
            '我寄你的信，总要送往邮局，不喜欢放在街边的绿色邮筒中，我总疑心那里会慢一点。然而也不喜欢托人带出去，我就将信藏在衣袋内，说是散步，慢慢的走出去，明知道这绝不是什么秘密事，但自然而然的好像觉得含有什么秘密性似的。',
          name: '蔡嘉轩',
          avator:
            'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        },

        {
          cont:
            '你站在桥上看风景，看风景人在楼上看你。明月装饰了你的窗子，你装饰了别人的梦。',
          name: '田润泽',
          avator:
            'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        },

        {
          cont:
            '层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。',
          name: '姚语涵',
          avator:
            'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        },

        {
          cont:
            '或许白云是妹妹，在多少个有风或无风的天气，她总是随风飘浮或静思沉默，可能她的心中总有许多思念想找个人来依偎，可能她的心中无时无刻总想着与自己的蓝天哥哥有一个幸福美好的约会。',
          name: '好好好',
          avator:
            'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        },
      ],

      //结果项目
      items: [
        { name: '年龄', type: 19 },
        { name: '颜值评分', type: 90 },
        { name: '性别', type: '男', probability: 0.9 },
        { name: '是否戴眼镜', type: '否', probability: 0.9 },
        { name: '情绪', type: '开心', probability: 0.9, icon: 'mdi-close' },
        { name: '表情', type: '大笑', probability: 0.9 },
        { name: '人种', type: '黄种人', probability: 0.9 },
        { name: '脸型', type: '圆脸', probability: 0.9 },
      ],
    }
  },

  mounted: function() {
    this.refresh()
  },

  methods: {
    refresh() {
      this.photo_id = this.$route.query.photo_id
      this.user_id = this.$route.query.user_id

      getReportDetail(this.user_id, this.photo_id, this.currentAccount).then(
        (response) => {
          console.log(response.data)
          this.imgSrc = 'data:image/png;base64,' + response.data.report_picture
          this.nickName = response.data.nickname
          this.signature = response.data.signature
          this.shareText = response.data.report_text
          trans(this.items, response.data)
          this.items[1].type = response.data.score
          this.items[3].type = response.data.glass == false ? '否' : '是' // glass
          this.items[3].icon =
            response.data.glass == false ? 'mdi-close-circle' : 'mdi-glasses'

          this.likeNum = response.data.favorite_num
          this.commentNum = response.data.comment_num
          console.log(response.data.comments_info[0].name)

          this.commentItems.push({
            name: response.data.comments_info[0].name,
            cont: response.data.comments_info[0].cont,
            avator: response.data.comments_info[0].avator,
          })
          console.log(this.commentItems)
        }
      )
    },

    like() {
      if (this.isfavorite == true) this.likeNum--
      else if (this.isfavorite == false) this.likeNum++
      star(this.currentAccount, this.photo_id).then((response) => {
        this.isfavorite = !this.isfavorite
        this.starNum = response.favorite_num
      })
    },

    //评论
    comment() {
      commentAPI(this.currentAccount, this.photo_id, this.content).then(
        (response) => {
          console.log(response)
          alert('评论成功啦')
        }
      )
    },

    //收藏
    star(photoid) {
      alert('收藏了' + photoid)
    },

    //点赞图标变化
    changeLiked() {
      if (this.hadLiked == true) this.likeNum--
      else if (this.hadLiked == false) this.likeNum++
      this.hadLiked = !this.hadLiked
    },

    //收藏
    changeStared() {
      if (this.hadStared == true) this.starNum--
      else if (this.hadStared == false) this.starNum++
      this.hadStared = !this.hadStared
    },

    // base64转文件
    dataURLto(dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
  },
}
</script>
