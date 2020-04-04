//index.js
//获取应用实例
const app = getApp()

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    tabData: {
      type: Array,
      value: [{
        'name': 'itemName'
      }],
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: []
  },
  methods: {
    // 这里是一个自定义方法
    onclickTab (e) {
      const params = e.target.dataset.params
      this.triggerEvent("on-change", params)
    }
  }
})
