<template>
  <v-app id="discover">
    <v-main>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="banner-text" align-center="center" align>发现</div>
          </div>
        </el-col>
      </el-row>

      <div
        v-for="(item, index) in items"
        :key="item.report_name"
        class="bg-purple-dark"
      >
        <el-row class="report-item">
          <el-col :span="2"> <br /></el-col>
          <el-col :span="5">
            <div @click="openReport">
              <v-img
                object-fit
                width="200px"
                height="200px"
                contain
                :src="item.imgsrc"
              ></v-img>
            </div>
          </el-col>

          <div @click="openReport">
            <el-col :span="6">
              <br />
              <div>{{ item.report_name }}</div>
              <br />
              <div>{{ item.report_time }}</div>
              <br />
              <div>{{ item.report_text }}</div>
              <br />

              <!-- 
          <div @click="clickTest">
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="概要项目" width="180">
              </el-table-column>
              <el-table-column prop="name" label="结果" width="180">
              </el-table-column>
            </el-table>
          </div>-->
            </el-col>
          </div>
          <el-col :span="3">
            <br />
            <div @click="like">
              <el-badge :value="12" class="item">
                <el-button size="small">点赞</el-button>
              </el-badge>
            </div>
            <br />
            <el-badge :value="3" class="item">
              <el-button size="small" @click="comment">评论</el-button>
            </el-badge>
            <br />
            <br />
            <el-badge :value="3" class="item">
              <el-button size="small" @click="star">收藏</el-button>
            </el-badge>
          </el-col>

          <el-col :span="3">
            <div v-if="index == 0" @click="refresh">
              <br />
              <br />
              <el-badge class="item">
                <el-button size="small">刷新</el-button>
              </el-badge>
            </div>
          </el-col>
        </el-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          report_name: '默认昵称',
          report_time: '2020.07.07',
          report_text: '我分享了我的最新图片哦，快来瞧瞧吧！',
          imgsrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',
        },
        {
          report_name: '默认昵称',
          report_time: '2020.07.07',
          report_text: '我分享了我的最新图片哦，快来瞧瞧吧！',
          imgsrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',
        },
        {
          report_name: '默认昵称',
          report_time: '2020.07.07',
          report_text: '我分享了我的最新图片哦，快来瞧瞧吧！',
          imgsrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',
        },
        {
          report_name: '默认昵称',
          report_time: '2020.07.07',
          report_text: '我分享了我的最新图片哦，快来瞧瞧吧！',
          imgsrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',
        },
        {
          report_name: '默认昵称',
          report_time: '2020.07.07',
          report_text: '我分享了我的最新图片哦，快来瞧瞧吧！',
          imgsrc: 'https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png',
        },
      ],
    }
  },
  methods: {
    openReport() {
      alert('打开')
    },
    like(photoid) {
      alert('点赞了' + photoid)
    },
    comment(photoid, comentText) {
      alert('评论了' + photoid + comentText)
    },
    star(photoid) {
      alert('收藏了' + photoid)
    },
    refresh() {
      alert('刷新了')
    },
  },
}
</script>

<style>
.el-row {
  height: 50px;
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #e5e9f2;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 24px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.banner-text {
  font-size: 24px;
  color: black;
  text-align: center;
}
.report-img {
  width: 50px;
  height: 50px;
}
.report-item {
  height: 220px;
}
</style>
