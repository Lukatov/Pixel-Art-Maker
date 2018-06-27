// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var color, height, width;

$('#sizePicker').submit(function(event){
    event.preventDefault();             //cancelling the submit action.
    height = $('#inputHeight').val();   //setting variables to inputs.
    width = $('#inputWeight').val();
    makeGrid(height, width);            //variables of the grid according to input.
});

function makeGrid(x, y) {           //x = height, y = width.
    $('tr').remove();               //clearing the tabel row.
    
    for(var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); //create ID for each row
    
    for (var j = 1; j <= y; j++){
        $('#table' + i).append('<td></td>');    //td = table data or cell.
        }
    }
//color
$('td').click(function addColor(){           //event listener.
    color= $('#colorPicker').val();         //value from color picker set to the color variable.
    
    if ($(this).attr('style')){             //checking if the cell has a style variable.
        $(this).removeAttr('style')         //removing any existing style variable.
    } else {                                // if the cell has no style attributes then..
        $(this).attr('style', 'background-color:' + color);     //setting the cells style attribute.
    }

})

}
