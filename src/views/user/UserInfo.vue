<template>
  <v-app>

    <v-container
      class="fill-height"
      fluid
    >

      <v-row justify="center">
        <v-col md="2">
          <v-card
            :color="color"
            dark
          >

            <v-avatar
              class="ma-3"
              size="85%"
              tile
            >
              <v-img :src="avatar"></v-img>
            </v-avatar>

            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="title"
                ></v-card-title>

                <v-card-subtitle v-text="description"></v-card-subtitle>
              </div>

            </div>
          </v-card>

        </v-col>

        <v-col
          md=2
          offset-md="1"
        >

          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >

            <v-text-field
              v-model="account"
              label="Account"
              required
              disabled
            ></v-text-field>

            <v-text-field
              v-model="username"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="major"
              label="Major"
              required
            ></v-text-field>
            <v-text-field
              v-model="school"
              label="School"
            ></v-text-field>

            <v-text-field
              v-model="gender"
              label="Gender"
            ></v-text-field>

            <v-text-field
              v-model="age"
              label="Age"
            ></v-text-field>
            <v-textarea
              v-model="description"
              rows="3"
              label="Description"
              placeholder="description"
            ></v-textarea>
          </v-form>
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    color: "#1F7087",
    title: "用户信息",
    avatar: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
    description:
      "因为有一朵我们看不到的花儿，星星才显得如此美丽，沙漠美丽。因为，沙漠某处隐藏着一口井。",
    name: "",
    account: "20184376",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>