$(".md-call-send").on("click",function(e){
    e.preventDefault();

    $(".md-call-msg").hide();
    $(".md-call-msg").html('');

    var err=0;

    // person name
    if ( $("#md-call-name").val() == '' ){
        err++
        $("#md-call-name").addClass("hasError");
    } else {
        $("#md-call-name").removeClass("hasError");
    }

    // phone
    if ( $("#md-call-phone").val() == '' ){
        err++
        $("#md-call-phone").addClass("hasError");
    } else {
        $("#md-call-phone").removeClass("hasError");
    }


    var resp_type = '';
    if ( $("#resp_item_id").val() == 0 ) {
        resp_type = '?action=call';
    }

    if (err == 0){

        $.ajax({
            type: "POST",
            url: '/local/ajax/call.php'+resp_type,
            data: {
                'name': $("#md-call-name").val(),
                'phone': $("#md-call-phone").val(),
            },
            dataType: "json",
            success: function(data){

                if (data.status == true){
                    $("#md-call-name").val('');
                    $("#md-call-phone").val('');
                }

                if (data.msg && data.msg.length > 0){
                    $(".md-call-msg").fadeIn();
                    $.each( data.msg, function( key,field ) {
                        if (field.type == true){
                            $(".md-call-msg").append('<p class="md-true">'+field.text+'</p>');
                        } else {
                            $(".md-call-msg").append('<p class="md-error">'+field.text+'</p>');
                        }
                    });
                    $(".feedback.call").fadeOut();
                }

            }
        });
    }

});