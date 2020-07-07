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
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "MyInfo",
}
</script>