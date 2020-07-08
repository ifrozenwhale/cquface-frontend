<template>
  <v-app>

    <v-container
      fluid
    >

      <v-row justify="center">
        <v-col md="5">
          
          <!-- 头像卡 -->
          <v-card
            :color="color"
            dark
            align="center" justify="center"
          >
            <!-- 头像 -->
            <v-avatar
              class="ma-3"
              size="85%"
              tile
            >
              <v-img :src="imgSrc"></v-img>
            </v-avatar>

            <!-- 修改头像 -->
            <v-row align="center" justify="center">
              <v-col md="auto">
                <v-file-input
                  accept="image/*"
                  v-model="file"
                  small-chips
                  dense
                  solo
                  flat
                  background-color="#1F7087"
                  prepend-icon="mdi-image"
                  placeholder="click to change"
                  @change="changePortrait()"
                ></v-file-input>
              </v-col>
            </v-row>

          </v-card>

          <v-row></v-row>

        <!-- 修改与提交的按钮 -->
          <v-row justify="center">
              <v-btn text class="grey--text" @click="change=!change">
                <template v-if="change==false">
                  change my information
                </template>
                <template v-else>
                  submit my information
                </template>
                
              </v-btn>
          </v-row>
        </v-col>

        

        <!-- 资料栏 -->
        <v-col
          md=6
          offset-md="1"
        >
          <template v-if="change==false">
            <MyInfo></MyInfo>
          </template>
          <template v-else>
            <ChangeMyInfo></ChangeMyInfo>
          </template>
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
    change: false,
    color: "#1F7087",
    imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
    
    account: "20184376",
  }),

  methods: {
    changePortrait() {
      var reader = new FileReader(); //读取文件
      let that = this;
      if (this.file != null) {
        this.fileMode = true;
        reader.readAsDataURL(this.file);
        reader.onload = function() {
          that.imgSrc = reader.result;
          console.log(that.imgSrc);
        };
      } else {
        this.fileMode = false;
        this.imgSrc =
          "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png";
      }
    },
  }
};
</script>