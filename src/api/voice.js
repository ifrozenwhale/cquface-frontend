export { voicePrompt }

/**
 * 调用百度API进行语音播报
 * @param {string} text 要播报的文本信息
 */
function voicePrompt(text) {
  new Audio('http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex=' + text).play()
}
