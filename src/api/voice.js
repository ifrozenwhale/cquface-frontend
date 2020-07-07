function voicePrompt(text) {
  new Audio('http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex=' + text).play()
}
export { voicePrompt }
