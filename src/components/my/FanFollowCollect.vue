<template>
  <v-app>
    <v-col md="2">
      <!-- 粉丝 -->
      <v-badge
        bordered
        color="grey darken-3"
        :content="fan_num"
        overlap
      >

        <v-btn
          text
          color="grey"
          @click="gotoFans()"
        >
          <v-icon>mdi-account-star-outline</v-icon>
          <span> Fans </span>
        </v-btn>

      </v-badge>

      <v-badge
        bordered
        color="grey darken-3"
        :content="follow_num"
        overlap
      >

        <v-btn
          text
          color="grey "
          @click="gotoFollows()"
        >
          <v-icon>mdi-account-heart-outline</v-icon>
          <span> Follows </span>
        </v-btn>
      </v-badge>

      <!-- 收藝 -->
      <v-btn
        text
        color="grey darken-3"
        @click="gotoCollects()"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
        <span> Collects </span>
      </v-btn>
    </v-col>
  </v-app>
</template>

<script>
import { getFanFollowCollectNum } from "../../api/api.js";
export default {
  name: "FanFollowCollect",
  mounted() {
    var that = this;
    getFanFollowCollectNum(localStorage.getItem("userId")).then(res => {
      that.fan_num = res.data.fan_num;
      that.follow_num = res.data.follow_num;
      that.collect_num = res.data.collect_num;
    });
  },
  data: () => ({
    fan_num: "",
    follow_num: "",
    collect_num: ""
  }),
  methods: {
    gotoFans() {
      this.$router.push("/my/fans");
    },
    gotoFollows() {
      this.$router.push("/my/follows");
    },
    gotoCollects() {
      this.$router.push("/stars");
    }
  }
};
</script>