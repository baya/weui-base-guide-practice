function setup(page){
  var com = page.data.com
  var op = {
      tap: {
          action_sheet: function(){
              com['action_sheet']['hidden'] = !com['action_sheet']['hidden']
          },
          modal: function(){
              com['modal']['hidden'] = false
          },
          modal2: function(){
              com['modal2']['hidden'] = false
          }
      },
      change: {
          action_sheet: function(){
              com['action_sheet']['hidden'] = !com['action_sheet']['hidden']
          },
          modal: function(){
              com['modal']['hidden'] = true
          },
          modal2: function(){
              com['modal2']['hidden'] = true
          }
      }
  }

  return {
      tap: function( name ) {
          op[ 'tap' ][ name ]()
          page.setData( { com: com })
      },

      change: function( name ) {
          op[ 'change' ][ name ]()
          page.setData( { com: com })
      }
  }
}

module.exports = {
  setup: setup
}