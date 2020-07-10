<template>

  <v-row
    sm="10"
    justify="center"
    align="center"
  >
    <v-col sm="5">
      <v-card>

        <v-list two-line>

          <v-list-item
            v-for="user in users"
            :key="user.nickname"
            @click="gotoOthersMy(user.account)"
          >
            <v-list-item-avatar>
              <img :src="user.portrait">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="user.nickname"></v-list-item-title>
              <v-list-item-subtitle v-html="user.signature"></v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>

        </v-list>
      </v-card>
    </v-col>

  </v-row>

</template>

<script>
import { getUserId } from "../../api/api.js";

export default {
  name: "UserList",
  computed() {},
  props: {
    users: {}
  },
  data: function() {
    return {
      other_account: this.users.other_account,
      userId: ""
    };
  },
  methods: {
    gotoOthersMy(other_account) {
      var that = this;
      console.log(that.users);
      getUserId(other_account).then(res => {
        console.log(res.data);
        // 点击卡片，就会跳转到别人的主页去
        this.$router.push({
          path: "/othersmy",
          query: { user_id: res.data.user_id }
        });
      });
    }
  }
};
</script>