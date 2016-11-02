const $image_path = "../../../assets/images/"

Page({
    data: {
        chevron_png: { src: $image_path + 'chevron.png'},
        country_picker: {
            items: ['中国(+86)', '外国'],
            index: 0
        },
        button: {
            content: '下一步',
            disabled: true
        },
        timeCount: 10

    },

    onShow(e) {
        var t = setInterval(function () {
            var timeCount = this.data.timeCount - 1
            if (timeCount === 0) {
                clearInterval(t)
            }
            this.setData({
                timeCount: timeCount
            })
        }.bind(this), 1000)

    }
})