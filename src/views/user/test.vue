<template>
  <v-app>
    <v-container
      class="align-center justify-center"
      fluid
    >
      <v-card mx:auto>
        <v-card-media
          src="src"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">headline</h3>
            <div>description</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
            flat
            color="primary"
          >text</v-btn>
          <v-btn
            flat
            color="primary"
          >text</v-btn>
        </v-card-actions>
      </v-card>
      <Login></Login>
    </v-container>
  </v-app>
</template>

<script>
import { Login } from "../index";
export default {
  components: {
    Login
  }
};
</script>