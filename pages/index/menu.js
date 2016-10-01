var am_count = 0;
var am_db = {}
var style = {
    menuItemHeight: '57rpx'
}

function createAm(){
    am_count += 1;
    return res = wx.createAnimation({
        duration:170,
        timingFunction: "linear"
    })
}

function setup(page, menu_list){

  menu_list.forEach(function(item){
      am_db[item.id] = createAm()
      item.sub_items.forEach(function(sub_item){
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
          am = am_db[ item.name ]
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