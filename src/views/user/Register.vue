<template>
  <v-app id="inspire">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/bg2.jpg"
    >
      <br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <v-main>
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
              <!-- 注册账号 -->
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Register your account</v-toolbar-title>

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
                <!-- 表单输入 -->
                <v-card-text>
                  <ValidationObserver ref="observer">
                    <v-form>
                      <validationProvider
                        v-slot="{ errors }"
                        name="账号"
                        rules="required|account"
                      >
                        <v-text-field
                          label="Account"
                          :filled="false"
                          name="account"
                          :error-messages="errors"
                          required
                          prepend-icon="mdi-account"
                          type="text"
                          v-model="inputUsers.account"
                        ></v-text-field>
                      </validationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="用户名"
                        rules="required|min:2|max:20"
                      >
                        <v-text-field
                          label="Username"
                          :filled="false"
                          :error-messages="errors"
                          name="username"
                          prepend-icon="mdi-message-text"
                          type="text"
                          v-model="inputUsers.username"
                        ></v-text-field>
                      </ValidationProvider>
                      <validationProvider
                        v-slot="{ errors }"
                        name="密码"
                        rules="required|min:6|max:15|password"
                      >
                        <v-text-field
                          id="password"
                          label="Password"
                          :filled="false"
                          name="password"
                          :error-messages="errors"
                          prepend-icon="mdi-lock"
                          type="password"
                          v-model="inputUsers.password"
                        ></v-text-field>
                      </validationProvider>
                      <v-text-field
                        id="password"
                        required
                        label="Confirm password"
                        :filled="false"
                        :error="passwordError"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        @change="confirmPassword()"
                        v-model="inputUsers.passwordTwo"
                      ></v-text-field>
                      <validationProvider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                      >
                        <v-text-field
                          id="email"
                          :filled="filled"
                          label="Email"
                          :error-messages="errors"
                          name="email"
                          prepend-icon="mdi-email"
                          type="email"
                          v-model="inputUsers.email"
                        ></v-text-field>
                      </validationProvider>

                    </v-form>
                  </ValidationObserver>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="primary"
                    @click="userRegister()"
                  >Register</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-img>
  </v-app>
</template>

<script>
import { register } from "../../api/api";
import { required, email, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");
// 非空校验
extend("required", {
  ...required,
  message: "{_field_} 不能为空"
});
// 长度校验
extend("min", {
  ...min,
  message: "{_field_} 必须长度大于 {length}"
});
// 长度校验
extend("max", {
  ...max,
  message: "{_field_} 必须长度小于 {length} "
});
// 邮箱校验
extend("email", {
  ...email,
  message: "邮箱格式必须合法"
});

// 账号校验 必须为8位数字
extend("account", {
  validate: value => {
    var reg = /^[0-9]{8}$/; /*定义验证表达式*/
    return reg.test(value); /*进行验证*/
  },
  message: "账号必须是8位数字"
});

// 密码校验
extend("password", {
  validate: value => {
    // 必须包含至少一位数字和字母
    var reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
    return reg.test(value);
  },
  message: "密码必须包含至少一位数字和字母"
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      ok: false,
      filled: false,
      passwordError: "",
      users: [],
      inputUsers: {
        account: "",
        username: "",
        email: "",
        major: "",
        password: "",
        passwordTwo: ""
      }
    };
  },

  methods: {
    confirmPassword() {
      if (this.inputUsers.password != this.inputUsers.passwordTwo) {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
    },
    userRegister() {
      this.$refs.observer.validate();
      register(
        this.inputUsers.account,
        this.inputUsers.username,
        this.inputUsers.password,
        this.inputUsers.email,
        this.inputUsers.major
      ).then(response => {
        console.log(response.status);
        if (response.data.status == 200) {
          this.ok = true;
          this.$router.push("/login");
        } else if (response.data.status == 401) {
          // 表示账号已经存在
          alert("账户已经存在");
        }
      });
    }
  },
  props: {
    source: String
  },
  computed: {}
};
</script>

<style lang="stylus"></style>
