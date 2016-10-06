var $image_path = "../../../assets/images/"

Page({
    data: {
        chevron_png: {
            src: $image_path + "chevron.png"
        },
        blank_rect_png: {
            src: $image_path + "blank_rect.png"
        },
        country: {
            index: 0,
            array: ['中国', '外国'],
            change: 'bindCountryChange'
        }
    },
    onLoad: function(options){
        this.data.title = options.title
    },
    onReady: function(){
        var title = this.data.title || "调试当前页"
        wx.setNavigationBarTitle( {
            title: title
        })
    },

    bindCountryChange: function(e){
        var country = this.data.country
        country.index = e.detail.value
        this.setData({country: country})

    }
})