const $image_path = "../../../assets/images/"

Page({
    data: {
        chevron_png: { src: $image_path + 'chevron.png'},
        country_picker: {
            items: ['中国', '外国'],
            index: 0
        },
        button: {
            content: '下一步'
        }
    }
})