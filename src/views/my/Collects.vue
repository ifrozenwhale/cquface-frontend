<template>
  <v-app>
    <v-container>
      <h1 class="white grey--text"> Collects </h1>

      <v-divider color="grey"></v-divider>
      <br>
      
      <Shared :user="collects"></Shared>

    </v-container>
  </v-app>
</template>

<script>

import Shared from "@/components/my/Shared";
import get_favorites from "../../api/api.js"

export default {
  name: "Collects",
  components: {Shared},
  data: () => ({
    collects: get_favorites(localStorage.getItem("userId")),
  }),
  methods: {
  }
}
</script>