<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      :mini-variant.sync="mini"
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(item, index) in items"
          :key="item.text"
          link
          @click="test(index)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- app -bar -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">CQU Face</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <!-- if not login -->
      <v-btn icon>
        <v-icon
          large
          v-if="ok"
          @click="logout"
        >mdi-logout</v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline text-center">
            确认要退出登录吗
          </v-card-title>

          <v-card-text>
            退出将返回登录页哦
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="light-blue darken-3"
              class="red-text"
              @click="dialog = false"
            >
              <span class="white--text text--lighten-2"> 取消</span>
            </v-btn>
            <v-btn
              color="light-blue darken-4"
              @click="logoutConfirm"
            >
              <span class="white--text text--lighten-2">确认</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- if login -->

      <v-btn icon>
        <v-icon large>mdi-account-circle </v-icon>
      </v-btn>

      <v-btn
        icon
        @click="star()"
      >
        <v-icon large>mdi-heart </v-icon>
      </v-btn>
      <v-dialog
        v-model="starDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline text-center">
            欢迎给我们Star！
          </v-card-title>

          <v-card-text>
            将跳转到我们的Github仓库哦
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="light-blue darken-3"
              class="red-text"
              @click="starDialog = false"
            >
              <span class="white--text text--lighten-2"> 取消</span>
            </v-btn>
            <v-btn
              color="light-blue darken-4"
              @click="starConfirm()"
            >
              <span class="white--text text--lighten-2">确认</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn
        icon
        large
        @click="gocqu()"
      >
        <v-avatar
          size="35px"
          item
        >
          <v-img
            src="./assets/cqu.png"
            alt="Chongiqng University"
          ></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <div class="content-app">
      <transition
        name="fadeInUp"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>

      <!-- footer -->
      <v-card height="150">
        <v-footer
          class="font-weight-medium"
          absolute
        >
          <v-col
            class="text-center"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Chongqing University</strong>
          </v-col>
        </v-footer>
      </v-card>
    </div>

    <BackTop></BackTop>
  </v-app>
</template>

<script>
import { Event } from "./main.js";
import { logout } from "./api/api.js";
export default {
  name: "App",
  components: {},
  data: () => ({
    login: false,
    dialog: false,
    drawer: true,
    starDialog: false,
    mini: false,
    ok: false,
    items: [
      { name: "1", icon: "mdi-emoticon-outline", text: "开始" },
      { name: "2", icon: "mdi-eye-plus-outline", text: "发现" },
      { name: "3", icon: "mdi-account", text: "我的" }
    ]
  }),
  watch: {
    changeStatus() {
      this.ok = false;
      this.$nextTick(() => {
        this.ok = true;
      });
    }
  },

  mounted() {
    var that = this;
    Event.$on("welcome", function() {
      that.ok = true;
    });
  },
  methods: {
    test(index) {
      switch (index) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/discover");
          break;
        case 2:
          this.$router.push("/my");
          break;
        default:
          break;
      }
    },
    star() {
      this.starDialog = true;
    },
    logout() {
      this.dialog = true;
    },
    starConfirm() {
      this.starDialog = false;
      const h = "https://github.com/FrozenWhalePP/cquface";
      window.open(h);
    },
    logoutConfirm() {
      logout().then(res => {
        if (res.data.status == 200) {
          localStorage.removeItem("userId");
          this.$router.push("/login");
        }
      });
      this.dialog = false;
    },
    gocqu() {
      window.open("https://www.cqu.edu.cn/");
    }
  }
};
</script>
<style lang="css">
.red-text {
  color: red;
}
</style>
