<template>
  <v-app>
    <v-list two-line>
      <!-- account当前登录用户的账号 -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-star</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Account</v-list-item-title>
          <v-list-item-subtitle>1234</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <!-- ‘nickname’：用户名，或者叫昵称（字符串） -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-account</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Nickname</v-list-item-title>
          <v-list-item-subtitle>yuhanyao</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- ‘signature’：个性签名（字符串） -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-pen</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Signature</v-list-item-title>
          <v-list-item-subtitle>1234</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <!-- ‘QQ’：qq（字符串） -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-penguin</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>QQ</v-list-item-title>
          <v-list-item-subtitle>1345887396</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- ‘email’：邮箱（字符串） -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>E-mail</v-list-item-title>
          <v-list-item-subtitle>
            yuhanyao2000@gmail.com
            <!-- 此处要改成从后端拿到的邮箱信息 -->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- ‘city’：城市（字符串） -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>City</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>
    </v-list>
  </v-app>
</template>

<script>
export default {
  name: 'MyInfo',
}
</script>
