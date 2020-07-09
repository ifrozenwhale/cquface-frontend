<template>
  <v-app>
    <v-container>
      <h1 class="white grey--text"> Follows </h1>

      <v-divider color="grey"></v-divider>
      <br>

      <UserList :users="follows"></UserList>
    </v-container>
  </v-app>
</template>

<script>
import UserList from "@/components/my/UserList";
import { showFollows } from "../../api/api.js";
export default {
  name: "Follows",
  components: { UserList },
  mounted() {
    showFollows(localStorage.getItem("userId")).then(res => {
      console.log(res);
      this.follows = res.data;
    });
  },
  data: () => ({
    follows: []
  })
};
</script>