export { translate }

// app front/src/api/api.js
import axiosInstance from './index'
// 使用封装了ajax请求方式的axios进行API调用
const axios = axiosInstance
import { str_md5 } from './md5.js'
const translate = (text) => {
  let sign = str_md5(text + '20200708000515436' + '1435660288' + 'knnJYcHf935TVxoLfxKP')
  axios
    .get(
      'https://fanyi-api.baidu.com/api/trans/vip/translate?q=' +
        text +
        '&from=zh&to=ch&appid=20200708000515436&salt=1435660288&sign=' +
        sign
    )
    .then((res) => {
      console.log(res)
    })
  return 'hh'
}
