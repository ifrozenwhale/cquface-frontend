<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register your account</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>

                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Account"
                    :filled="false"
                    name="account"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="inputUsers.account"
                  ></v-text-field>

                  <v-text-field
                    label="Username"
                    :filled="false"
                    name="username"
                    prepend-icon="mdi-message-text"
                    type="text"
                    v-model="inputUsers.username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    :filled="false"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="inputUsers.password"
                  ></v-text-field>

                  <v-text-field
                    id="email"
                    :filled="false"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    v-model="inputUsers.email"
                  ></v-text-field>

                  <v-text-field
                    id="major"
                    :filled="false"
                    label="Major"
                    name="major"
                    prepend-icon="mdi-dialpad"
                    v-model="inputUsers.major"
                  ></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="primary"
                  @click="userRegister()"
                >Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { register } from "../../api/api";
export default {
  data() {
    return {
      ok: false,
      users: [],
      inputUsers: {
        account: "",
        username: "",
        email: "",
        major: "",
        password: ""
      }
    };
  },

  methods: {
    userRegister() {
      register(
        this.inputUsers.account,
        this.inputUsers.username,
        this.inputUsers.password,
        this.inputUsers.email,
        this.inputUsers.major
      ).then(response => {
        console.log(response.status);
        if (response.status == 200) {
          this.ok = true;
          this.$router.push("/login");
        }
      });
    }
  },
  props: {
    source: String
  }
};
</script>

<style lang="stylus"></style>
