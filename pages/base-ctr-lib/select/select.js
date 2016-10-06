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
        },
        checkRows: [
            {checkStyle: "display:inline-block", id: 1},
            {checkStyle: "display:none", id: 2},
            {checkStyle: "display:none", id: 3}
        ]
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
        country.picked_country = country.array[country.index]
        this.setData({country: country})

    },

    bindCheckChange: function(e){
        var checkId = parseInt(e.target.dataset.checkId)
        var rows = this.data.checkRows
        rows.forEach(function(row){
            if(row.id === checkId){
                row.checkStyle = 'display:inline-block'
            } else {
                row.checkStyle = 'display:none'
            }
        })

        this.setData({checkRows: rows})
    }
})