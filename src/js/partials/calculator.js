$(document).ready(function(){
    var inputs = document.querySelectorAll('.calculator input');
    var sRoom = $('#s-room');
    var lenRoom = $('#len-room');
    var widthRoom = $('#width-room');
    var numberBoard = $('#number-board');
    var metering = $('#metering');
    for (i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            var s = sRoom.val();
            var lr = lenRoom.val();
            var lb = lenRoom.data('len-board'); //$('#len-board').val() / 1000
            var wr = widthRoom.val();
            var wb = widthRoom.data('width-board');
            var n = numberBoard.data('number-board');
            var m = metering.data('num-metering');
            var newSroom = lr * wr;
            var formula = newSroom / ( (lb/1000) * (wb/1000) * n );
            var newFormula = (s / parseFloat(m));
            if(s !== ''){
                $('#number-packaging').html(Math.ceil(newFormula));
            }else{
                $('#number-packaging').html(Math.ceil(formula));
            }
        });
    }
});








