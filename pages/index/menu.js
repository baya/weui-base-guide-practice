var am_count = 0;
var am_db = {}
var style = {
    menuItemHeight: '114rpx'
}
var subitem_db = {
    'base-ctr-lib': [
        { name: '图标', nav_url: '../base-ctr-lib/icon/icon' },
        { name: '提示', nav_url: '../base-ctr-lib/toast/toast' },
        { name: '按钮', nav_url: '../base-ctr-lib/button/button' },
        { name: '输入', nav_url: '../base-ctr-lib/input/input' },
        { name: '选择', nav_url: '../base-ctr-lib/select/select' },
        { name: '列表', nav_url: '../base-ctr-lib/list/list' },
        { name: '卡片', nav_url: '../base-ctr-lib/card/card' },
        { name: '弹框', nav_url: '../base-ctr-lib/popup/popup' } 
    ],
    'com-lib': [
        { name: '结果页', nav_url: '../comb-lib/result/result' },
        { name: '文字链' },
        { name: '弹窗' },
        { name: '搜索' }
    ],
    'com-example-page': [
        { name: '文档说明页面' },
        { name: '图文文章' }
    ],
    'android-diff-page': [
        { name: '标题单行' },
        { name: '单行列表' }
    ]
}

function createAm(){
    am_count += 1;
    return wx.createAnimation({
        duration:170,
        timingFunction: "linear"
    })
}

function buildIcon(menu){
    menu.icon = menu.icon || {}
    if (menu.icon.src){
        return
    }
    if (menu.icon.path){
        menu.icon.src = '../..' + menu.icon.path
    }
}

function buildSubItems(menu){
  menu.sub_items = subitem_db[menu.id]
}

function setup(page, menu_list){

  menu_list.forEach(function(menu){
      buildSubItems(menu)
      buildIcon(menu)
      am_db[menu.id] = createAm()
      menu.sub_items.forEach(function(sub_item){
          am_db[sub_item.name] = createAm()
      })
  })

  return {

    getMenu: function(menu_id){
       return menu_list.find(function(menu){
         return menu.id === menu_id
       })
    },

    amStep: function(menu, af){
      var sub_items = menu.sub_items
      sub_items.forEach(function(item){
          var am = am_db[ item.name ]
          af(am)
          am.step()
          item.am_data = am.export()
      })
    },

   rangeMenu: function(menu, h){
       var am = am_db[menu.id]
       am.height(h).step()
       menu.am_data = am.export()
   },


    closeMenus: function() {
        var that = this
        menu_list.forEach( function( m ) {
            m.toggle_class = "closed"
            that.amStep( m, function( am ) {
                am.height( 0 ).opacity( 0 )
            })
            that.rangeMenu(m, style.menuItemHeight)
        })
        page.setData({menu_list: menu_list})
    },

    closeOtherMenus: function( menu ) {
        var that = this
        menu_list.forEach( function( m ) {
            if( m.id != menu.id ) {
                m.toggle_class = "closed"
                that.amStep( m, function( am ) {
                    am.height( 0 ).opacity( 0 )
                })
                that.rangeMenu(m,style.menuItemHeight)
            }
        })
        page.setData({menu_list: menu_list})

    },

    toogle: function( menu) {
        if( menu.toggle_class === "closed" ) {
            menu.toggle_class = ''
            this.closeOtherMenus(menu)
            this.amStep( menu, function( am ) {
                am.height('57rpx').opacity( 1 )
            })
            this.rangeMenu(menu, '100%')
        } else {
            menu.toggle_class = "closed"
            this.amStep( menu, function( am) {
                am.height( 0 ).opacity( 0 )
            })
            this.rangeMenu(menu, style.menuItemHeight)
        }
        page.setData({menu_list: menu_list})
    }

  }

}

module.exports = {
  setup: setup
}