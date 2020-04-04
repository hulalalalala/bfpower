//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['Dior', 'CHANEL', '圣罗兰', 'GUCCI', '阿玛尼', 'TOM FORD', '纪梵希', '蒂芙尼', '雅诗兰黛', 'Mac', '兰蔻', '娇兰', 'CPB 肌肤之钥', '萝卜丁', 'NARS', '芦丹氏', '植村秀', 'Burberry', '3CE'],
    tabData: [
      { 'name': '唇妆', 'type': 'Dior' },
      { 'name': '眼妆', 'type': 'Dior'  },
      { 'name': '底妆', 'type': 'Dior'  },
      { 'name': '美甲', 'type': 'Dior'  }
    ],
    index: 0
  },
  bindPickerChange (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  changeTab (data) {
    console.log(data)
  }
})
