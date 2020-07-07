<template>
    

  <v-container fluid>
      <v-row 
        v-for="(item, i) in items"
        :key="i"
        cols="10"
        dense
        align="center"
        justify="center"
      >
        <v-col md="8">
            <v-card text @click="gotoOthersMy()">
            <div class="d-flex flex-no-wrap justify-space-between">

            <div>
                <!--用户名-->
                <v-card-title
                  class="headline"
                  v-text="item.nickname"
                ></v-card-title>

                <!--报告分析-->
                <v-card-text v-text="item.report"></v-card-text>
            </div>

        <!-- 用户照片 -->
            <v-avatar
                class="ma-3"
                size="25%"
                tile
            >
                <v-img :src="item.photo"></v-img>
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
    data: () => ({
      items: [
        {
        // 从数据库接收信息     
            photo: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            // 用户名
            nickname: 'Supermodel', 
            // 报告分析
            report: 'Foster the People',
        },
        {
            photo: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            nickname: 'A', 
            report: 'test',
        },
        {
            photo: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            nickname: 'B', 
            report: 'test',
        },

      ],
    }),
    methods: {
      gotoOthersMy() {
        // 点击卡片，就会跳转到别人的主页去
      }
    }
  }
</script>
