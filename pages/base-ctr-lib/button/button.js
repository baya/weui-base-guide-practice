var $title;

Page( {
    data: {
        table: {
            header: {
                items: [ '属性名', '类型', '默认值', '选择' ]
            },
            body: {
                rows: [
                    {
                        items: [ 'size', 'String', 'default' ],
                        picker: { index: 0, array: [ 'default', 'mini' ] }
                    },
                    {
                        items: [ 'type', 'String', 'default' ],
                        picker: { index: 0, array: [ 'default', 'primary', 'warn' ] }
                    }
                ]
            }
        }

    },

    onLoad: function( options ) {
        $title = options.title
    },

    onReady: function() {
        var title = $title || "调试当前页"
        wx.setNavigationBarTitle( {
            title: title
        })
    }
})