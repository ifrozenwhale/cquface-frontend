<template>

  <v-row
    md="6"
    justify="center"
    align="center"
  >
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
  </v-row>

</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {}
  },
  data: () => ({}),
  methods: {
    gotoOthersMy(other_account) {
      // 点击卡片，就会跳转到别人的主页去
      this.$router.push({ name: "othersmy", params: { setid: other_account } });
    }
  }
};
</script>