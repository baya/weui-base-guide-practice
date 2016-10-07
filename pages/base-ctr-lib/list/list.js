var $image_path = "../../../assets/images/"

Page({
    data: {
        rectangle_png: {src: $image_path + "rectangle.png"},
        content: "由各种物质组成单巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
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