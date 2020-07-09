<template>
  <v-app>
    <v-container>
      <h1 class="white grey--text"> Fans </h1>

      <v-divider color="grey"></v-divider>
      <br>
      
      <UserList :user="fans"></UserList>
    </v-container>
  </v-app>
</template>

<script>

import UserList from "@/components/my/UserList";
import showFans from "../../api/api.js"

export default {
  name: "Follows",
  components: { UserList },
  
  data: () => ({
    fans: showFans(localStorage.getItem("userId")),
  }),
}
</script>