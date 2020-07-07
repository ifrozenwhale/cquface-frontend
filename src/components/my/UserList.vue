<template>

      <v-row md="6" justify="center" align="center">
        <v-card>
        
          <v-list two-line>
            <v-list-item 
              v-for="fan in fans"
              :key="fan.nickname"
              @click="gotoOthersMy()"
            >
              <v-list-item-avatar >
                <img :src="fan.avatar">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="fan.nickname"></v-list-item-title>
                <v-list-item-subtitle v-html="fan.signature"></v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
            
          </v-list>
        </v-card>
      </v-row>

</template>

<script>

export default {
  name: "UserList",
  data: () => ({
    fans: [    { 
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
        nickname: "<span class='font-weight-bold'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        signature: 'Brunch this weekend?',
        },
      { 
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', 
        nickname: "<span class='font-weight-bold'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." ,
        signature: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      },
      { 
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', 
        nickname: 'Oui oui', 
        signature: "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" 
      },
    ]
  }),
  methods: {
    gotoOthersMy() {
      // 点击卡片，就会跳转到别人的主页去

    }
  }
}
</script>