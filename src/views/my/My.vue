<template>
  <v-app>
    <br>
    <br>
    <br>
    <br>
    <br>

    <v-divider></v-divider>
    <br>
    <v-container fluid>
      <v-row
        align="center"
        dense
      >
        <v-col
          md="8"
          sm="4"
          offset-sm="2"
        >
          <BasicInfo></BasicInfo>

        </v-col>
        <v-col sm="2">
          <FanFollowCollect></FanFollowCollect>
        </v-col>

        <v-divider color="grey"></v-divider>
        <br>
        <v-col
          sm="2"
          offset-sm="2"
        >
          <h1 class="white grey--text">History</h1>
        </v-col>
        <Shared></Shared>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
import BasicInfo from "./BasicInfo";
import Shared from "@/components/my/Shared";
import FanFollowCollect from "@/components/my/FanFollowCollect";

export default {
  name: "My",
  data() {
    return {};
  },
  components: { BasicInfo, Shared, FanFollowCollect },
  mounted() {},
  methods: {}
};
</script>
