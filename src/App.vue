<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- app -bar -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
              <span class="white--text text--lighten-2"> 取消</span> </v-btn>
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
        @click="test"
      >
        <v-icon large>mdi-heart </v-icon>
      </v-btn>

      <v-btn
        icon
        large
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
      <v-card height="150">
        <v-footer
          absolute
          class="font-weight-medium"
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
    ok: false,
    items: [
      { icon: "mdi-contacts", text: "Contacts" },
      { icon: "mdi-history", text: "Frequently contacted" },
      { icon: "mdi-content-copy", text: "Duplicates" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-plus", text: "Create label" }]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "mdi-cog", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      { icon: "mdi-cellphone-link", text: "App downloads" },
      { icon: "mdi-keyboard", text: "Go to the old version" }
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
    test() {
      this.ok = ~this.ok;
      console.log(this.ok);
    },
    logout() {
      this.dialog = true;
    },
    logoutConfirm() {
      logout().then(res => {
        this.$router.push("/login");
        if (res.data.status == 200) {
          this.$router.push("/login");
        }
      });
      this.dialog = false;
    }
  }
};
</script>
<style lang="css">
.red-text {
  color: red;
}
</style>