<template>
  <v-app>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-divider></v-divider>
    <br>
    <v-container fluid>
      <v-row
        justify="center"
        dense
      >

        <v-col
          md="3"
          sm="3"
          offset-sm="2"
        >
          <!-- 头像卡 -->
          <v-card
            :color="color"
            dark
            align="center"
            justify="center"
          >
            <!-- 头像 -->
            <v-avatar
              class="ma-3"
              size="85%"
              tile
            >
              <v-img :src="imgSrc"></v-img>
            </v-avatar>
            <v-card-subtitle v-text="signature"></v-card-subtitle>
          </v-card>
        </v-col>

        <!-- 资料栏 -->
        <v-col
          md=4
          offset-md="1"
        >
          <v-app>

            <v-list two-line>

              <!-- account当前登录用户的账号 -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-star</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Account</v-list-item-title>
                  <v-list-item-subtitle>{{account}}</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>

              <v-divider inset></v-divider>

              <!-- ‘nickname’：用户名，或者叫昵称（字符串） -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Nickname</v-list-item-title>
                  <v-list-item-subtitle>{{nickname}}</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>

              <v-divider inset></v-divider>

              <!-- ‘QQ’：qq（字符串） -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-penguin</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>QQ</v-list-item-title>
                  <v-list-item-subtitle>{{QQ}}</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>

              <!-- ‘email’：邮箱（字符串） -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-email</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>E-mail</v-list-item-title>
                  <v-list-item-subtitle>
                    {{email}}
                    <!-- 此处要改成从后端拿到的邮箱信息 -->
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <!-- ‘city’：城市（字符串） -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-map-marker</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>City</v-list-item-title>
                  <v-list-item-subtitle>{{city}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>
            </v-list>

          </v-app>
        </v-col>

        <v-col md="2">

          <v-btn
            text
            color="grey"
            @click="followClick()"
          >
            <template v-if="follow==true">
              <v-icon color="pink">mdi-account-heart-outline</v-icon>
              <span> Followed </span>
            </template>

            <template v-else>
              <v-icon>mdi-account-heart-outline</v-icon>
              <span> Follow </span>
            </template>

          </v-btn>

        </v-col>

      </v-row>

      <v-divider color="grey"></v-divider>
      <br>

      <!-- 历史Shared -->
      <div>
        <h2 class="white grey--text">History</h2>
      </div>

      <v-row>

        <v-container fluid>
          <v-row
            v-for="(item, i) in items"
            :key="i"
            cols="10"
            dense
            align="center"
            justify="center"
          >
            <v-col md="5">
              <v-card
                text
                v-if="reflesh"
              >
                <div class="
            d-flex
            flex-no-wrap
            justify-space-between">
                  <div>
                    <!--用户名-->
                    <v-card-title
                      class="headline font-weight-bold"
                      v-text="item.report_name"
                    >
                    </v-card-title>

                    <!--报告分析-->
                    <v-card-text v-text="item.report_text"></v-card-text>
                  </div>

                  <!-- 用户照片 -->
                  <v-avatar
                    class="ma-3"
                    size="20%"
                    tile
                    lazy-src="https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png"
                  >
                    <v-img :src="item.report_picture"></v-img>
                  </v-avatar>

                </div>

                <v-card-actions>
                  <v-btn
                    dark
                    color="blue darken-3"
                    @click="showDetail(i)"
                  >查看详情</v-btn>
                </v-card-actions>

              </v-card>
            </v-col>

          </v-row>
          <br>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="total"
              :total-visible="7"
              @input="reload()"
            ></v-pagination>
          </div>

        </v-container>
      </v-row>
      <v-dialog
        v-model="dialog"
        max-width="15%"
      >
        <v-card mx:auto>
          <v-card-title class="headline text-center">
            {{followTitle}}
          </v-card-title>

          <!-- textfiel -->
          <v-card-text>
            <br />
            <!-- add content -->
            {{followText}}
          </v-card-text>

          <!-- 提交评论的选项 -->
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="light-blue darken-3"
              class="red-text"
              @click="dialog = false"
            >
              <span class="white--text text--lighten-2">
                确认</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import { getOtherInfo, getSharesByAccount, follow } from "../../api/api.js";

export default {
  name: "OthersMy",
  components: {},
  created() {},
  mounted() {
    this.userId = this.$route.query.user_id;
    getOtherInfo(this.userId, localStorage.getItem("account")).then(res => {
      this.account = res.data.account;
      this.nickname = res.data.nickname;
      this.signature = res.data.signature;
      this.email = res.data.email;
      this.QQ = res.data.QQ;
      this.city = res.data.city;
      this.imgSrc = res.data.portrait;
      console.log(this.account);
      getSharesByAccount(
        this.account,
        5,
        1,
        localStorage.getItem("account")
      ).then(res => {
        console.log(res); // test
        this.items = res.data;
        this.items.forEach(e => {
          e.report_picture = "data:image/png;base64," + e.report_picture;
        });
        this.total = res.data[0].total_num;
      });
    });
  },
  data: () => ({
    items: [],
    total: "1",
    reflesh: true,
    page: 1,
    dialog: false,
    del: true,
    color: "#1F7087",
    account: "",
    nickname: "",
    signature: "",
    email: "",
    QQ: "",
    city: "",
    userId: "",

    followTitle: "",
    followText: "",
    imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
    follow: false
  }),
  methods: {
    followClick() {
      this.follow = !this.follow;
      follow(localStorage.getItem("account"), this.account).then(() => {
        this.dialog = true;
        if (this.follow) {
          this.followTitle = "关注成功";
          this.followText = "他已经收到啦！";
        } else {
          this.followTitle = "取消关注";
          this.followText = "再去看看别人吧！";
        }
      });
    },
    showDetail(i) {
      // 点击卡片，就会跳转详情页
      this.$router.push({
        path: "/report",
        query: {
          user_id: this.userId,
          photo_id: this.items[i].photo_id
        }
      });
    },
    reload() {
      getSharesByAccount(
        this.account,
        5,
        this.page,
        localStorage.getItem("account")
      ).then(res => {
        console.log(res); // test
        this.items = res.data;
        this.items.forEach(e => {
          e.report_picture = "data:image/png;base64," + e.report_picture;
        });
        this.reflesh = false;
        this.$nextTick(() => (this.reflesh = true));
      });
    }
  }
};
</script>