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
            <v-card
              class="elevation-12"
              @welcome="welcome"
            >
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Welcome to CQU</v-toolbar-title>

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
                    name="account"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="inputUsers.account"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="inputUsers.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="#90CAF9"
                  @click="userLogin()"
                >Login</v-btn>
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
import { Event } from "../../main.js";
import { login, checkLogin } from "../../api/api";
export default {
  data() {
    return {
      ok: false,
      errorMsg: "",
      users: [],
      inputUsers: {
        account: "",
        password: ""
      }
    };
  },
  created() {
    checkLogin().then(res => {
      if (res.data.status == 200) {
        Event.$emit("welcome", true);
        this.$router.push("/home");
      }
    });
  },
  methods: {
    userLogin() {
      login(this.inputUsers.account, this.inputUsers.password).then(
        response => {
          if (response.data.status == 200) {
            Event.$emit("welcome", true);
            // set cookie
            this.$router.push("/home");
          } else if (response.data.status == 401) {
            alert(response.data.msg);
          } else if (response.data.status == 402) {
            alert(response.data.msg);
          } else {
            alert("Error");
          }
        }
      );
    },
    userRegister() {
      console.log("register");
      this.$router.push("/register");
    },
    welcome() {
      alert("welcome");
    }
  },
  props: {
    source: String
  }
};
</script>

<style lang="stylus"></style>
