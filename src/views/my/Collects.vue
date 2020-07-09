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
import { getFavorites } from "../../api/api.js";
export default {
  name: "Collects",
  components: { Shared },
  mounted() {
    getFavorites(localStorage.getItem("userId")).then(res => {
      console.log(res);
      this.collects = res.data;
    });
  },
  data: () => ({
    collects: []
  }),
  methods: {}
};
</script>