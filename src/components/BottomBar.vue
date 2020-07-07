<template>
  <v-footer dark padless absolute>
    <v-card class="flex" flat color="#002447" tile>
      <v-card-title>
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px">mdi-qqchat</v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px">mdi-wechat</v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px">mdi-email</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'BottomBar',
  data: () => ({}),
}
</script>
