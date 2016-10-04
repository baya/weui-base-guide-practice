

function findRow( table, kind ) {
    var rows = table.body.rows
    return rows.find( function( row ) {
        return row.name === kind
    })
}

function getChangeF( kind ) {
    if( kind === 'size' ) {
        return changeSize
    } else if( kind === 'type' ) {
        return changeType
    }
}

function changeSize( table, value ) {
    var row = findRow( table, 'size' )
    row.picker.index = value
    return {
        btnSize: row.picker.array[ value ],
        table: table
    }
}

function changeType( table, value ) {
    var row = findRow( table, 'type' )
    row.picker.index = value

    return {
        btnType: row.picker.array[ value ],
        table: table
    }
}

function setup( page, kind ) {

    var table = page.data.table

    return {

        change: function( value ) {
            var data = getChangeF(kind)(table, value)
            return data
        }
    }
}

module.exports = {
  setup: setup
}