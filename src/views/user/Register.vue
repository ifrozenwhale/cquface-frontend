<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register your account</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
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
                    required
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="inputUsers.account"
                  ></v-text-field>

                  <v-text-field
                    label="Username"
                    :filled="false"
                    name="username"
                    required
                    prepend-icon="mdi-message-text"
                    type="text"
                    v-model="inputUsers.username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    required
                    :filled="false"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="inputUsers.password"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    required
                    label="Confirm password"
                    :filled="false"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :error="passwordError"
                    @change="confirmPassword()"
                    v-model="inputUsers.passwordTwo"
                  ></v-text-field>

                  <v-text-field
                    id="email"
                    :filled="false"
                    label="Email"
                    required
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    v-model="inputUsers.email"
                  ></v-text-field>

                  <v-text-field
                    id="major"
                    :filled="false"
                    required
                    label="Major"
                    name="major"
                    prepend-icon="mdi-dialpad"
                    v-model="inputUsers.major"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="primary" @click="userRegister()">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { register } from '../../api/api'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },
  mixins: [validationMixin],
  data() {
    return {
      ok: false,

      passwordError: '',
      users: [],
      inputUsers: {
        account: '',
        username: '',
        email: '',
        major: '',
        password: '',
        passwordTwo: '',
      },
    }
  },

  methods: {
    confirmPassword() {
      if (this.inputUsers.password != this.inputUsers.passwordTwo) {
        this.passwordError = true
      } else {
        this.passwordError = false
      }
    },
    userRegister() {
      register(
        this.inputUsers.account,
        this.inputUsers.username,
        this.inputUsers.password,
        this.inputUsers.email,
        this.inputUsers.major
      ).then((response) => {
        console.log(response.status)
        if (response.status == 200) {
          this.ok = true
          this.$router.push('/login')
        }
      })
    },
  },
  props: {
    source: String,
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
}
</script>

<style lang="stylus"></style>
