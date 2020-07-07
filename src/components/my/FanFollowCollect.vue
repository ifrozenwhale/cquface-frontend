<template>
  <v-app>
    <v-col md="2">
      <!-- 粉丝 -->
      <v-badge
        bordered
        color= "grey"
        :content=getFanNum()
        overlap
      >

        <v-btn 
          text color="grey"
          @click="gotoFans()"
        >
          <v-icon>mdi-account-star-outline</v-icon>
          <span> Fans </span>
        </v-btn>

      </v-badge>

      <v-badge
          bordered
          color= "grey"
          :content="follow_num"
          overlap
      >

          <v-btn 
            text color="grey"
            @click="gotoFollows()"
          >
            <v-icon>mdi-account-heart-outline</v-icon>
            <span> Follows </span>
          </v-btn>
      </v-badge>

      <!-- 收藏 -->
      <v-btn 
        text color="grey"
        @click="gotoCollects()"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
        <span> Collects </span>		
      </v-btn>
    </v-col>
  </v-app>
</template>

<script>
export default {
  name: "FanFollowCollect",
  data:()=>({
    fan_num: 10,
    follow_num: 8,

  }),
  methods: {
    getFanNum() {
      return 5;
    },
    gotoFans() {
      this.$router.push("/my/fans");
    },
    gotoFollows() {
      this.$router.push("/my/follows");
    },
    gotoCollects() {
      this.$router.push("/my/collects");
    },
  }
}
</script>