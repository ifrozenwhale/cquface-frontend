<template>
  <v-app>
    <section id="hero">
      <v-row no-gutters>
        <v-img :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'" src="./assets/mbsmile.png">
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']" class="font-weight-light">
                    WELCOME TO
                  </span>

                  <br />
                </v-col>
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']" class="font-weight-black">
                    CQU FACE
                  </span></v-col
                >
                <v-col class="white--text text-center" cols="12">
                  <br />
                  <p>为您提供量身定制的人脸识别与分析服务。</p>
                  <p>从多维进行评价，并使用语音播报为您展示。</p>
                  <p>分享您的照片，发现更多美好，开启缘分之旅。</p>
                </v-col>

                <v-btn class="ma-2 align-self-end" color="primary" dark @click="gotoLogin()"
                  >Start Now
                  <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                <v-btn icon color="deep-blue" href="https://github.com/FrozenWhalePP/cquface-frontend">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
    <BottomBar></BottomBar>
  </v-app>
</template>

<script>
import { Event } from './main.js'
import BottomBar from './components/BottomBar'
import { logout } from './api/api.js'
export default {
  name: 'App',
  components: {
    BottomBar,
  },
  data: () => ({
    login: false,
    dialog: false,
    inputUsers: {
      password: '',
      account: '',
    },
    drawer: true,
    ok: false,
    items: [
      { icon: 'mdi-contacts', text: 'Contacts' },
      { icon: 'mdi-history', text: 'Frequently contacted' },
      { icon: 'mdi-content-copy', text: 'Duplicates' },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Labels',
        model: true,
        children: [{ icon: 'mdi-plus', text: 'Create label' }],
      },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' },
        ],
      },
      { icon: 'mdi-cog', text: 'Settings' },
      { icon: 'mdi-message', text: 'Send feedback' },
      { icon: 'mdi-help-circle', text: 'Help' },
      { icon: 'mdi-cellphone-link', text: 'App downloads' },
      { icon: 'mdi-keyboard', text: 'Go to the old version' },
    ],
  }),
  watch: {
    changeStatus() {
      this.ok = false
      this.$nextTick(() => {
        this.ok = true
      })
    },
  },
  mounted() {
    var that = this
    Event.$on('welcome', function() {
      that.ok = true
    })
  },
  methods: {
    test() {
      this.ok = ~this.ok
      console.log(this.ok)
    },
    gotoLogin() {
      this.$router.replace('/login')
      this.$router.go(0)
      // window.open(news.href, "_blank");
    },
    logout() {
      this.dialog = true
    },
    logoutConfirm() {
      logout().then((res) => {
        this.$router.push('/login')
        if (res.data.status == 200) {
          this.$router.push('/login')
        }
      })
      this.dialog = false
    },
  },
}
</script>
<style lang="css">
.red-text {
  color: red;
}
</style>
