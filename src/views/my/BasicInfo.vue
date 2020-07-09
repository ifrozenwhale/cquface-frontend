<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col md="5">

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
            <!-- 修改头像 -->
            <v-row
              align="center"
              justify="center"
            >
              <v-col sm="5">
                <v-file-input
                  accept="image/*"
                  v-model="file"
                  small-chips
                  full-width
                  label="click to change "
                  dense
                  solo
                  background-color="#1F7087"
                  prepend-icon="mdi-image"
                  @change="changePortrait()"
                ></v-file-input>

              </v-col>
            </v-row>

          </v-card>

          <v-row></v-row>
          <br>
          <!-- 修改与提交的按钮 -->
          <v-row justify="center">
            <v-btn
              outline
              class="black--text"
              v-if="toSubmitHead"
              @click="submitHead()"
            >submit portrait</v-btn>
            <v-btn
              text
              color="grey darken-2"
              @click="changeInfo()"
            >
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
          <template v-if="change==false & isRouterAlive">
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

                <!-- ‘signature’：个性签名（字符串） -->
                <v-list-item>

                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-pen</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Signature</v-list-item-title>
                    <v-list-item-subtitle>{{signature}}</v-list-item-subtitle>
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
            <!-- <MyInfo v-if="isRouterAlive"></MyInfo> -->
          </template>
          <template v-else>
            <v-app>
              <v-container>
                <v-form
                  ref="form"
                  v-model="valid"
                  :lazy-validation="lazy"
                >

                  <v-text-field
                    v-model="account"
                    label="Account"
                    required
                    disabled
                  ></v-text-field>

                  <v-text-field
                    v-model="nickname"
                    :counter="10"
                    :rules="nameRules"
                    label="Nickname"
                    required
                  ></v-text-field>

                  <!-- 签名 -->
                  <v-text-field
                    v-model="signature"
                    label="Signature"
                    required
                  ></v-text-field>

                  <v-divider reset></v-divider>

                  <!-- QQ -->
                  <v-text-field
                    v-model="QQ"
                    label="QQ"
                  ></v-text-field>

                  <!-- 邮箱 -->
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <!-- 城市 -->
                  <v-text-field
                    v-model="city"
                    label="City"
                    required
                  ></v-text-field>

                </v-form>
              </v-container>

            </v-app>

          </template>
        </v-col>

      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      max-width="350"
    >
      <v-card>
        <v-card-title class="headline text-center">
          {{ dialogTitle }}
        </v-card-title>

        <v-card-text>
          {{ dialogText }}
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
  </v-app>
</template>

<script>
import { updateInfo, getMyInfo } from "../../api/api.js";
import { getMyHead, updateHead } from "../../api/api.js";
export default {
  name: "BasicInfo",
  data() {
    return {
      // info
      color: "#1F7087",
      nickname: "",
      signature: "",
      email: "",
      QQ: "",
      city: "",

      change: false,
      isRouterAlive: true, // 刷新
      dialog: false,
      toSubmitHead: false,
      dialogTitle: "",
      dialogText: "",

      imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
      // change my info
      valid: true,

      account: localStorage.getItem("userId"),
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },

  mounted() {
    var that = this;
    let account = localStorage.getItem("userId");
    getMyInfo(account).then(res => {
      this.nickname = res.data.nickname;
      this.signature = res.data.signature;
      this.gender = res.data.gender;
      this.email = res.data.email;
      this.QQ = res.data.QQ;
      this.city = res.data.city;
      this.age = res.data.age;
    });
    // that.isRouterAlive = false;
    // that.$nextTick(() => (that.isRouterAlive = true));
    // 获取头像

    getMyHead(account).then(res => {
      if (res.data.portrait == null) {
        ("https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png");
      } else {
        that.imgSrc = res.data.portrait;
      }
    });
  },
  methods: {
    submitHead() {
      updateHead(localStorage.getItem("userId"), this.imgSrc).then(() => {
        this.dialogTitle = "提交头像成功";
        this.dialogText = "你很好看哦！";
      }),
        () => {
          this.dialogTitle = "提交失败";
          this.dialogText = "怎么回事呢！";
        };
      this.dialog = true;
    },

    changeInfo() {
      if (this.change == false) {
        this.change = true;
        // to submit
      } else {
        // 修改信息

        updateInfo(
          this.account,
          this.nickname,
          this.signature,
          "",
          this.email,
          this.QQ,
          this.city,
          ""
        )
          .then(() => {
            this.dialogTitle = "提交成功";
            this.dialogText = "你很好看哦！";
          })
          .catch(() => {
            this.dialogTitle = "提交失败";
            this.dialogText = "怎么回事呢！";
          });
        this.dialog = true;
        this.change = false;
      }
    },
    changePortrait() {
      this.toSubmitHead = true;
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
    }
  }
};
</script>
