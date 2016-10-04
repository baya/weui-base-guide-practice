var $picker = require('picker.js')

var $title;

Page( {
    data: {
        btnSize: null,
        btnType: null,
        btnPlain: null,
        btnLoading: null,
        btnDisabled: null,
        btnHoverClass: 'button-hover',
        table: {
            header: {
                items: [ '属性名', '类型', '默认值', '选择' ]
            },
            body: {
                rows: [
                    {
                        name: 'size',
                        items: [ 'size', 'String', 'default' ],
                        picker: { index: 0, array: [ 'default', 'mini' ] }
                    },
                    {
                        name: 'type',
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
    },

    bindPickerChange: function(e){
        var kind = e.target.dataset.pickerKind
        var picker = $picker.setup(this, kind)
        var data = picker.change(e.detail.value)
        this.setData(data)
    }
})