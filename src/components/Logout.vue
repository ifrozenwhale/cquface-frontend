<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">Use Google's location service?</v-card-title>

      <v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Disagree
        </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click="logoutClick"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { Event } from "../main.js";
export default {
  data() {
    return {
      dialog: false
    };
  },
  mounted() {
    var that = this;
    Event.$on("logout", function() {
      that.dialog = true;
      console.log(that.dialog);
      console.log("emit");
    });
  },
  methods: {
    logoutClick() {
      this.dialog = false;
      this.$router.push("login");
    }
  }
};
</script>