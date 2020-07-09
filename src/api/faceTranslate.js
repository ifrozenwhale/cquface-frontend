export { trans }

/**
 * @parameter (array) items 这是一个数组
 *    // { name: "年龄", type: 19 },
      // { name: "颜值评分", type: 90 },
      // { name: "性别", type: "男"},
      // { name: "是否戴眼镜", type: "否",  0.9 },
      // { name: "情绪", type: "开心" icon: "mdi-close" },
      // { name: "表情", type: "大笑"},
      // { name: "人种", type: "黄种人"},
      // { name: "脸型", type: "圆脸" },
      顺序如上，有的带着icon表示有个图标，有的可能有颜色表示图标的颜色
 * @parameter (dict) data 这是后台穿过来的 是this.response.data
 * 这里完成了手工的翻译与颜色、图形渲染
 * 庆祝伟大的翻译官！
 */
function trans(items, data) {
  items[0].type = data.age // age
  items[1].type = data.beauty // beauty
  items[2].type = data.gender == 'male' ? '男' : '女' // gender
  items[2].icon = data.gender == 'male' ? 'mdi-gender-male' : 'mdi-gender-female'
  items[3].type = data.glasses == false ? '否' : '是' // glass
  items[3].icon = data.glasses == false ? 'mdi-close-circle' : 'mdi-glasses'
  // angry:愤怒 disgust:厌恶 fear:恐惧 happy:高兴 sad:伤心 surprise:惊讶 neutral:无表情 pouty: 撅嘴 grimace:鬼脸
  switch (data.emotion) {
    case 'smile':
      items[4].icon = 'mdi-emoticon-happy-outline'
      items[4].type = '微笑'
      break
    case 'angry':
      items[4].type = '愤怒'
      items[4].icon = 'mdi-emoticon-devil-outline'
      break
    case 'disgust':
      items[4].icon = 'mdi-emoticon-poop-outline'
      items[4].type = '厌恶'
      break
    case 'surprise':
      items[4].icon = 'mdi-emoticon-halloween-outline'
      items[4].type = '惊讶'
      break
    case 'neutral':
      items[4].icon = 'mdi-emoticon-neutral-outline'
      items[4].type = '面无表情'
      break
    case 'pouty':
      items[4].icon = 'mdi-emoticon-confused-outline'
      items[4].type = '撅嘴'
      break
    case 'grimace':
      items[4].icon = 'mdi-emoticon-ghost-outline'
      items[4].type = '鬼脸'
      break
    default:
      items[4].icon = 'mdi-emoticon-happy-outline'
      items[4].type = '微笑'
  }
  items[5].type = data.expression == 'smile' ? '微笑' : data.expression == 'laugh' ? '大笑' : '不笑' // expression

  // yellow、white、black、arabs
  items[6].icon = 'mdi-face' // race
  switch (data.race) {
    case 'yellow':
      items[6].type = '黄种人' // race
      items[6].color = 'yellow'
      break
    case 'white':
      items[6].type = '白种人' // race
      items[6].color = 'white'
      break
    case 'black':
      items[6].type = '黑种人' // race
      items[6].color = 'gray'
      break
    case 'arabs':
      items[6].type = '阿拉伯人' // race
      break
    default:
      items[6].type = '黄种人' // race
      items[6].color = 'orange accent-4'
  }

  switch (data.face_type) {
    case 'square':
      items[7].type = '正方形'
      items[7].icon = 'mdi-crop-square'
      break // race
    case 'triangle':
      items[7].type = '三角形'
      items[7].icon = 'mdi-triangle-outline'
      break // race
    case 'oval':
      items[7].type = '椭圆'
      items[7].icon = 'mdi-oval-plus'
      break // race
    case 'heart':
      items[7].type = '心形'
      items[7].icon = 'mdi-heart'
      break // race
    case 'round':
      items[7].type = '圆脸'
      items[7].icon = 'mdi-circle-outline'
      break // race
    default:
      items[7].type = '圆脸'
      items[7].icon = 'mdi-circle-outline'
  }
}
