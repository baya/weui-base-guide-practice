var $image_path = "../../../assets/images/"

Page({
    data: {
        rectangle_png: {src: $image_path + "rectangle.png"},
        content: "由各种物质组成单巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
        content2: "尘埃扩散着，为一片土壤的凝固，母体子宫里的星云密布，在膨胀中复活，更多多魔力化作脐带"
    },

    onLoad: function( options ) {
        this.data.title = options.title
    },

    onReady: function() {
        var title = this.data.title || "调试当前页"
        wx.setNavigationBarTitle( {
            title: title
        })
    }
})