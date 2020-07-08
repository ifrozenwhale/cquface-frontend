<template>
  <v-app>
    <v-container grid-list-xs>
      <NotFound></NotFound>
    </v-container>
  </v-app>
</template>

<script>
import NotFound from "./components/404";
export default {
  components: {
    NotFound
  }
};
</script>