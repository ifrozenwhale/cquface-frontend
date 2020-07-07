<template>
  <v-app>
    <v-container max-width="100%" fill-height>
      <v-row justify="center" align="center">
        <v-icon v-show="false" @click="model--">mdi-minus</v-icon>
        <v-icon v-show="false" @click="model++">mdi-plus</v-icon>
        <v-badge color="green" :content="num" overlap>
          <v-btn color="success">text</v-btn>
        </v-badge>
        <v-carousel v-model="model" height="800">
          <v-carousel-item v-for="color in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">404 NOT FOUND</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      model: 0,
    }
  },
}
</script>
