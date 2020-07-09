<template>
    

  <v-container fluid>
      <v-row 
        v-for="(user, i) in users"
        :key="i"
        cols="10"
        dense
        align="center"
        justify="center"
      >
        <v-col md="8">
            <v-card text @click="gotoDetailedShared(user.account)">
            <div class="d-flex flex-no-wrap justify-space-between">

            <div>
                <!--用户名-->
                <v-card-title
                  class="headline"
                  v-text="user.report_name"
                ></v-card-title>
                
                <v-card-subtitle
                  v-text="user.report_time"
                ></v-card-subtitle>

                <!--报告分析-->
                <v-card-text v-text="user.report_text"></v-card-text>
            </div>

        <!-- 用户照片 -->
            <v-avatar
                class="ma-3"
                size="25%"
                tile
            >
                <v-img :src="user.report_picture"></v-img>
            </v-avatar>
            
            </div>
            </v-card>
        </v-col>
      </v-row>
  </v-container>

    
</template>

<script>
  export default {
    name: "Shared",
    props: {
      users: {}
    }, 
    data: () => ({
    }),
    methods: {
      gotoDetailedShared(other_account) {
      // 点击卡片，就会跳转到别人的分享去
        this.$router.push( {name:'report',params:{setid:other_account}});    

    }
    }
  }
</script>
