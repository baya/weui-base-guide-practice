var com = require('com.js')
var $com

Page({
    data: {
        com: {
            action_sheet: {
                hidden: true,
                items: ['item1', 'item2', 'item3', 'item4']
            },
            modal: {
                hidden: true
            },
            modal2: {
                hidden: true
            }

        }
    },

    onLoad: function(options){
        this.data.title = options.title
    },

    onReady: function(){
        $com = com.setup(this);
        var title = this.data.title || "调试当前页"
        wx.setNavigationBarTitle( {
            title: title
        })
    },

    actionSheetChange: function( e ) {
      $com.change('action_sheet')
    },

    actionSheetTap: function( e ) {
        $com.tap('action_sheet')
    },

    actionSheetBindItemTap: function(e){
    },

    modalTap: function(e){
        $com.tap('modal')
    },

    modalChange: function(e){
        $com.change('modal')
    },

    modal2Tap: function(e){
        $com.tap('modal2')
    },

    modal2Change: function(e){
        $com.change('modal2')
    }

    

})