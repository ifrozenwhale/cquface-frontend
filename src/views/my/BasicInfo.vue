<template>
  <v-app>

    <v-container
      fluid
    >

      <v-row justify="center">
        <v-col md="4">
          <!-- 头像卡 -->
          <v-card
            :color="color"
            dark
            align="center" justify="center"
          >

            <v-avatar
              class="ma-3"
              size="85%"
              tile
            >
              <v-img :src="avatar"></v-img>
            </v-avatar>

            <v-btn text color="white grey--text" @click="changePortrait()">
              click to change
            </v-btn>

          </v-card>

        </v-col>

        <!-- 资料栏 -->
        <v-col
          md=6
          offset-md="1"
        >
          
          <MyInfo></MyInfo>
          <ChangeMyInfo></ChangeMyInfo>
          
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import MyInfo from "@/components/my/MyInfo";
import ChangeMyInfo from "@/components/my/ChangeMyInfo";

export default {
  name: "BasicInfo",
  components: {MyInfo, ChangeMyInfo},
  data: () => ({
    valid: true,
    color: "#1F7087",
    title: "点击修改您的头像",
    avatar: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
    description:
      "因为有一朵我们看不到的花儿，星星才显得如此美丽，沙漠美丽。因为，沙漠某处隐藏着一口井。",
    name: "",
    account: "20184376",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    changePortrait() {

    },
  }
};
</script>