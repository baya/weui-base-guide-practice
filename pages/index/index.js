var menu = require('menu.js')
//index.js
//获取应用实例

var app = getApp()
Page({
  data: {
      menu_list: [
          {
            id: 'base-ctr-lib',
            name: '基础控件',
            icon:{
              path: '/assets/images/icon_nav_form.png',
              mode: 'aspectFit'
            },
            sub_items: []
          },
          {
            id: 'com-lib',
            name: '组合组件',
             icon:{
              path: '/assets/images/icon_nav_layout.png',
              mode: 'aspectFit'
            },
            sub_items: []
          },
          {
            id: 'com-example-page',
            name: '组合范例页面',
             icon:{
              path: '/assets/images/icon_nav_feedback.png',
              mode: 'aspectFit'
            },
            sub_items: []
          },
          {
            id: 'android-diff-page',
            name: '安卓差异化板块',
             icon:{
              path: '/assets/images/icon_nav_z-index.png',
              mode: 'aspectFit'
            },
            sub_items: []
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
