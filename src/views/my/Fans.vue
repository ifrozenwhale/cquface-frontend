<template>
  <v-app>
    <v-container>
      <h1 class="white grey--text"> Fans </h1>

      <v-divider color="grey"></v-divider>
      <br>

      <UserList :users="fans"></UserList>
    </v-container>
  </v-app>
</template>

<script>
import UserList from "@/components/my/UserList";
import { showFans } from "@/api/api.js";
export default {
  name: "Follows",
  components: { UserList },
  mounted() {
    showFans(localStorage.getItem("userId")).then(res => {
      console.log(res);
      this.fans = res.data;
    });
  },
  data: () => ({
    fans: []
  })
};
</script>