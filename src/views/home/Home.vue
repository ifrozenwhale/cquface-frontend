<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >

      <v-row
        justify="center"
        align="center"
      >
        <v-col sm="12"></v-col>
        <v-col sm="12"></v-col>
        <v-col sm="12"></v-col>
        <v-col md="2"></v-col>
        <v-col
          sm="12"
          xs="12"
          md="4"
          lg="3"
        >

          <v-card
            contain
            max-width="85%"
            flex-wrap
          >
            <div
              class="text-center align-center justify-center"
              margin="0"
            >
              <v-card-title class="headline justify-center font-weight-bold">
                期待你的模样
              </v-card-title>
              <v-card-text>
                <video
                  object-fit
                  id="videoCamera"
                  width="95%"
                  height="95%"
                  autoplay
                  v-show="videoOpen"
                ></video>

                <v-img
                  object-fit
                  width="100%"
                  height="100%"
                  contain
                  :src="imgSrc"
                  v-if="!videoOpen"
                ></v-img>
                <canvas
                  style="display:none"
                  object-fit
                  id="canvasCamera"
                  :width="videoWidth"
                  :height="videoHeight"
                ></canvas>
              </v-card-text>
            </div>
            <v-card-actions
              d-flex
              justify="center"
            >
              <v-container
                grid-list-xs
                fluid
              >
                <v-row wrap>
                  <v-col
                    sm="11"
                    xl="6"
                  >
                    <v-file-input
                      accept="image/*"
                      color="light-blue darken-3"
                      v-model="file"
                      small-chips
                      dense
                      solo
                      prepend-icon="mdi-image"
                      placeholder="File input"
                      @change="fileChange()"
                    ></v-file-input>
                  </v-col>
                  <!--  -->
                  <v-col
                    sm="5"
                    xs="5"
                    lg="5"
                    xl="2"
                    offset-sm="1"
                  >
                    <!-- </v-btn> -->
                    <v-btn
                      dark
                      :disabled="fileMode"
                      color="light-blue darken-3"
                      @click="videoClick()"
                    >{{
                      videoInfo
                    }}</v-btn>
                  </v-col>
                  <v-col
                    sm="4"
                    md="3"
                    lg="2"
                    xs="7"
                    offset-xs="2"
                    offset-lg="1"
                  >
                    <!-- </v-btn> -->
                    <v-btn
                      dark
                      :disabled="fileMode"
                      color="light-blue darken-3"
                      @click="imageClick()"
                    >{{
                      imageInfo
                    }}</v-btn>
                  </v-col>
                </v-row>
              </v-container>

              <!-- <v-btn
                dark
                color="light-blue darken-3"
              > -->
            </v-card-actions>
          </v-card>

        </v-col>
        <v-col
          mx:auto
          offset-xs="3"
          offset-md="1"
        >
          <v-card
            mx:auto
            max-width="75%"
          >
            <v-card-title class="headline justify-center font-weight-bold">
              分析报告
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <p class="text-h6">{{ item.name }}</p>
                    <v-spacer></v-spacer>
                    <v-chip
                      class="ma-2"
                      color="#CFD8DC"
                      label
                    >
                      <v-avatar
                        left
                        v-if="item.icon"
                        :color="item.color"
                      >
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-avatar>
                      {{ item.type }}
                    </v-chip>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                dark
                color="light-blue darken-3"
                width="30%"
                v-if="!finish & upload"
                @click="start()"
              >开始分析</v-btn>
              <v-btn
                dark
                color="blue-grey darken-2"
                width="15%"
                v-if="finish"
                @click="voiceReport()"
              >语音播报</v-btn>
              <v-btn
                dark
                color="blue-grey lighten-2"
                width="15%"
                v-if="finish"
                @click="cancel()"
              >丢弃</v-btn>
              <v-btn
                dark
                color="light-blue darken-3"
                width="15%"
                v-if="finish"
                @click="selectShare()"
              >分享</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      max-width="15%"
      v-if="!del"
    >
      <v-card mx:auto>
        <v-card-title class="headline text-center">
          分享到私人空间或公共空间
        </v-card-title>

        <v-card-text>
          <br />
          <!-- add content -->
          <v-textarea
            v-model="content"
            label="说点什么吧"
            name="content"
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="light-blue darken-3"
            class="red-text"
            @click="privateShare()"
          >
            <span class="white--text text--lighten-2"> 私密分享</span>
          </v-btn>
          <v-btn
            color="light-blue darken-4"
            @click="publicShare()"
          >
            <span class="white--text text--lighten-2">公开分享</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog"
      max-width="15%"
      v-if="del"
    >
      <v-card mx:auto>
        <v-card-title class="headline text-center">
          这张照片被丢弃啦
        </v-card-title>

        <v-card-text>
          <br />
          <!-- add content -->
          再来一张吧！
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="light-blue darken-4"
            @click="dialog=false"
          >
            <span class="white--text text--lighten-2">确认</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import { getReport, share, deletePhoto } from "../../api/api.js";
import { voicePrompt } from "../../api/voice.js";
import { trans } from "../../api/faceTranslate.js";

export default {
  data() {
    return {
      absolute: false,
      videoOpen: false,
      videoInfo: "打开摄像头",
      imageInfo: "拍照",
      overlay: false,
      videoWidth: 600,
      videoHeight: 600,
      imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      finish: false,
      dialog: false,
      del: false,
      content: "",
      // file upload part
      file: null,
      fileMode: false,
      upload: false,
      photoId: "",
      items: [
        { name: "年龄", type: 19 },
        { name: "颜值评分", type: 90 },
        { name: "性别", type: "男", probability: 0.9 },
        { name: "是否戴眼镜", type: "否", probability: 0.9 },
        {
          name: "情绪",
          type: "开心",
          probability: 0.9
        },
        { name: "表情", type: "大笑", probability: 0.9 },
        { name: "人种", type: "黄种人", probability: 0.9 },
        { name: "脸型", type: "圆脸", probability: 0.9 }
        // { name: "脸长", type: "23.4", probability: 0.9 },
        // { name: "脸宽", type: "21", probability: 0.9 }
      ]
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      console.log("初始化canvas");
      this.thisCancas = document.getElementById("canvasCamera");
      this.thisContext = this.thisCancas.getContext("2d");
    },
    selectShare() {
      this.del = false;
      this.dialog = true;
    },
    fileChange() {
      var reader = new FileReader(); //读取文件
      let that = this;
      if (this.file != null) {
        this.fileMode = true;
        this.upload = true;
        reader.readAsDataURL(this.file);
        reader.onload = function() {
          that.imgSrc = reader.result;
        };
      } else {
        this.fileMode = false;
        this.upload = false;
        this.imgSrc =
          "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png";
      }
    },

    toString() {
      var str = "您真是太可爱啦，现在为您语音播报。";
      this.items.forEach(e => {
        str = str + e.name + "," + e.type + "。";
      });
      return str;
    },
    voiceReport() {
      voicePrompt(this.toString());
    },
    start() {
      // let type = this.fileMode ? "FILE" : "BASE64";
      let account = localStorage.getItem("userId");
      // { name: "年龄", type: 19 },
      // { name: "颜值评分", type: 90 },
      // { name: "性别", type: "男", probability: 0.9 },
      // { name: "是否戴眼镜", type: "否", probability: 0.9 },
      // { name: "情绪", type: "开心", probability: 0.9, icon: "mdi-close" },
      // { name: "表情", type: "大笑", probability: 0.9 },
      // { name: "人种", type: "黄种人", probability: 0.9 },
      // { name: "脸型", type: "圆脸", probability: 0.9 },
      // { name: "脸长", type: "23.4", probability: 0.9 },
      // { name: "脸宽", type: "21", probability: 0.9 }
      let base = this.imgSrc.split(",")[1];
      console.log(base);
      getReport(base, account).then(res => {
        trans(this.items, res.data);
        this.photoId = res.data.photo_id;
      });
      // get report
      this.finish = true;
    },
    cancel() {
      this.finish = false;
      this.del = true;
      this.items.forEach(element => {
        element.type = "";
        element.icon = "";
      });
      // delete
      deletePhoto(this.photoId).then(() => {
        this.dialog = true;
      });
    },
    publicShare() {
      share(this.photoId, true, this.content).then(() => {});
      this.dialog = false;
    },
    privateShare() {
      share(this.photoId, false, this.content).then(() => {});
      this.dialog = false;
    },
    videoClick() {
      if (this.videoOpen) {
        this.stopNavigator();
        this.videoInfo = "打开摄像头";
        this.videoOpen = false;
      } else {
        this.videoOpen = true;
        this.openVideo();
        this.videoInfo = "关闭摄像头";
        this.imageInfo = "拍照";
      }
    },
    imageClick() {
      if (!this.videoOpen) {
        this.imgSrc =
          "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png";
        this.imageInfo = "拍照";
        this.upload = false;
      } else {
        this.setImage();
        this.upload = true;
        this.imageInfo = "清除";
      }
      this.stopNavigator();
      this.videoOpen = false;
      this.videoInfo = "打开摄像头";
    },

    openVideo() {
      var _this = this;

      this.thisVideo = document.getElementById("videoCamera");
      console.log(this.thisVideo);
      // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)"
        }
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
          // 旧的浏览器可能没有srcObject

          if ("srcObject" in _this.thisVideo) {
            _this.thisVideo.srcObject = stream;
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream);
          }
          _this.thisVideo.onloadedmetadata = function() {
            _this.thisVideo.play();
          };
        })
        .catch(err => {
          console.log(err);
        });
    },

    //  绘制图片（拍照功能）

    setImage() {
      var _this = this;

      // 点击，canvas画图
      _this.thisContext.drawImage(
        _this.thisVideo,
        0,
        0,
        _this.videoWidth,
        _this.videoHeight
      );
      // 获取图片base64链接
      var image = this.thisCancas.toDataURL("../../../img");
      // console.log(image);
      _this.imgSrc = image;

      // savePhoto(image.split(",")[1]).then(() => {});
    },

    // base64转文件

    dataURLto(dataurl, filename) {
      var arr = dataurl.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    // 关闭摄像头

    stopNavigator() {
      if (this.thisVideo != null) {
        this.thisVideo.srcObject.getTracks()[0].stop();
      }
    }
  }
};
</script>
