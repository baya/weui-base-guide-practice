var menu = require('menu.js')
//index.js
//获取应用实例

var app = getApp()
Page({
  data: {
      menu_list: [
          {
            id: 'base-ctr-lib',
            name: '基础控件库',
            icon:{
              path: '/assets/images/icon_nav_form.png',
              mode: 'aspectFit'
            },
            sub_items: [
              {name: 'ICON'}, 
              {name:'TOTAS'}, 
              {name: 'BUTTON'},
              {name: '输入'},
              {name: '选择'},
              {name: '弹框'},
              {name: '列表'},
              {name: '卡片'}
              ]
          },
          {
            id: 'com-lib',
            name: '组合组件',
             icon:{
              path: '/assets/images/icon_nav_layout.png',
              mode: 'aspectFit'
            },
            sub_items: [{name: '结果页'}, {name: '文字链'}, {name: '弹窗'}, {name: '搜索'}]
          },
          {
            id: 'com-example-page',
            name: '组合范例页面',
             icon:{
              path: '/assets/images/icon_nav_feedback.png',
              mode: 'aspectFit'
            },
            sub_items: [{name: '文档说明页面'}, {name: '图文文章'}]
          },
          {
            id: 'android-diff-page',
            name: '安卓差异化板块',
             icon:{
              path: '/assets/images/icon_nav_z-index.png',
              mode: 'aspectFit'
            },
            sub_items: [{name: '标题单行'}, {name: '单行列表'}]
          }
      ]
  },

  onReady: function(){
    this.$m = menu.setup(this, this.data.menu_list)
    this.$m.closeMenus()
  },

  toogleMenu: function(e){
    var m = this.$m.getMenu( e.currentTarget.id )
    this.$m.toogle( m)
  }
})
