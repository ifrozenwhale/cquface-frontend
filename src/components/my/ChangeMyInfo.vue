<template>
  <v-app>
    <v-container>
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
          v-model="nickname"
          :counter="10"
          :rules="nameRules"
          label="Nickname"
          required
        ></v-text-field>


        <!-- 签名 -->
        <v-text-field
          v-model="sig"
          label="Signature"
          required
        ></v-text-field>
        
        <v-divider reset></v-divider>

        <!-- QQ -->
        <v-text-field
          v-model="QQ"
          label="QQ"
        ></v-text-field>

        <!-- 邮箱 -->
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <!-- 城市 -->
        <v-text-field
          v-model="city"
          label="City"
          required
        ></v-text-field>

      </v-form> 
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ChangeMyInfo",
  data: () => ({
    valid: true,
    color: "#1F7087",
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
  }),
};

</script>

