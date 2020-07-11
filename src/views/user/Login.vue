<template>
  <v-app id="inspire">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/bg2.jpg"
    >
      <br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <v-main>
        <!-- <img src="https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/bg2.jpg"/> -->

        <!-- 容器container -->
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <!-- 登录卡片 -->
              <v-card
                class="elevation-12"
                @welcome="welcome"
              >
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <!-- 登录标题 -->
                  <v-toolbar-title>Welcome to CQU Face</v-toolbar-title>

                  <v-spacer></v-spacer>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                      >
                        <v-icon>mdi-code-tags</v-icon>
                      </v-btn>
                    </template>

                    <span>Source</span>
                  </v-tooltip>
                </v-toolbar>

                <v-card-text>
                  <!-- 登录表单 -->
                  <v-form>
                    <v-text-field
                      label="Account"
                      name="account"
                      :filled="false"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="inputUsers.account"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      :filled="false"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="inputUsers.password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>

                <!-- 按钮栏 -->
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="#90CAF9"
                    @click="userLogin()"
                  >Login</v-btn>
                  <v-btn
                    color="primary"
                    @click="userRegister()"
                  >Register</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-dialog
            v-model="dialog"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline text-center">
                {{ errorMsg }}
              </v-card-title>

              <v-card-text>
                {{ errorTip }}
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="light-blue darken-4"
                  @click="closeDialog"
                >
                  <span class="white--text text--lighten-2">确认</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>

      </v-main>
    </v-img>
  </v-app>
</template>

<script>
import { Event } from "../../main.js";
import { login } from "../../api/api";
export default {
  data() {
    return {
      ok: false,
      errorMsg: "",
      dialog: false,
      errorTip: "",
      users: [],
      inputUsers: {
        account: "",
        password: ""
      }
    };
  },
  created() {
    // 检测自动登录
    if (localStorage.getItem("token")) {
      Event.$emit("welcome", true);
      this.$router.push("/home");
    }
  },

  methods: {
    // 用户登录
    userLogin() {
      login(this.inputUsers.account, this.inputUsers.password).then(
        response => {
          if (response.data.status == 200) {
            Event.$emit("welcome", true);
            // 本地存储userId
            localStorage.setItem("token", response.data.token);
            console.log(response);
            localStorage.setItem("account", this.inputUsers.account);

            // 如果没有登录，跳转回被拦截的页面
            if (this.$route.query.redirect) {
              //如果存在参数
              let redirect = this.$route.query.redirect;
              console.log(redirect);
              this.$router.push(redirect); //则跳转至进入登录页前的路由
            } else {
              this.$router.push("/home"); //否则跳转至首页
            }
          } else if (response.data.status == 401) {
            this.dialog = true;
            this.errorMsg = response.data.msg;
            this.errorTip = "请重新输入账号或密码";
            // alert(response.data.msg);
          } else {
            this.errorMsg = "未知错误";
            this.errorTip = "请确保连接正常";
            this.dialog = true;
          }
        }
      );
    },

    userRegister() {
      console.log("register");
      this.$router.push("/register");
    },
    closeDialog() {
      this.dialog = false;
    },
    welcome() {
      alert("welcome");
    }
  },
  props: {
    source: String
  }
};
</script>

<style lang="stylus"></style>
