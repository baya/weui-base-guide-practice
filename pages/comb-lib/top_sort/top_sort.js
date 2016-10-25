var $image_path = "../../../assets/images/"

Page( {
    data: {
        tabs: [
            {id: 'tab-1', name: '排序一', current: 'current'},
            {id: 'tab-2', name: '排序二', current: ''},
            {id: 'tab-3', name: '排序三', current: ''},
        ]
    },

    tabTap: function(e){
        var tabs = this.data.tabs;
        var tab_id = e.currentTarget.id;
        tabs.forEach(function(tab){
            if(tab.id == tab_id){
                tab.current = 'current'
            } else {
                tab.current = ''
            }
        })
        this.setData({tabs: tabs})
    }
})