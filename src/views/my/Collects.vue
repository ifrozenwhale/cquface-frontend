<template>
  <v-app>
    <v-container>
      <h1 class="white grey--text"> Collects </h1>

      <v-divider color="grey"></v-divider>
      <br>
      
      <Shared></Shared>

    </v-container>
  </v-app>
</template>

<script>

import Shared from "@/components/my/Shared";

export default {
  name: "Follows",
  components: {Shared},
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
  }
}
</script>