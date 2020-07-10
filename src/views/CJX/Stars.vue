<template>
  <v-app>
    <v-container
      fluid
      fill-height
    >
      <br>
      <br>
      <br>
      <br>
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
                color="red darken-3"
                @click="deletePhoto(i)"
              >删除</v-btn>
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

      <v-dialog
        v-model="dialog"
        max-width="15%"
        v-if="del"
      >
        <v-card mx:auto>
          <v-card-title class="headline text-center">
            这张照片被丢弃啦
          </v-card-title>

          <v-card-text>
            <br />
            <!-- add content -->
            再来一张吧！
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="light-blue darken-4"
              @click="dialog=false"
            >
              <span class="white--text text--lighten-2">确认</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>

</template>

<script>
import { getFavorites, deletePhoto, getUserId } from "../../api/api.js";
export default {
  name: "Shared",
  mounted() {
    let account = localStorage.getItem("account");
    getUserId(account).then(res => {
      this.userId = res.data.user_id;
    });
    getFavorites(account).then(res => {
      console.log(res); // test
      this.items = res.data;
      this.items.forEach(e => {
        e.report_picture = "data:image/png;base64," + e.report_picture;
      });
      this.total = res.data[0].total_num;
    });
  },
  data: () => ({
    items: [],
    total: "1",
    reflesh: true,
    page: 1,
    dialog: false,
    del: true,
    userId: ""
  }),
  methods: {
    deletePhoto(i) {
      this.del = true;
      // var that = this;
      let photoId = this.items[i].photo_id;
      deletePhoto(photoId, localStorage.getItem("account")).then(() => {
        this.dialog = true;
        this.reload();
      });
    },
    showDetail(i) {
      // 点击卡片，就会跳转详情
      this.$router.push({
        path: "/report",
        query: {
          user_id: this.userId,
          photo_id: this.items[i].photo_id
        }
      });
    },

    reload() {
      getFavorites(localStorage.getItem("account")).then(res => {
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
