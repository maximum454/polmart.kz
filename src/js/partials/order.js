$(".md-resp-send").on("click",function(e){
    e.preventDefault();

    $(".md-resp-msg").hide();
    $(".md-resp-msg").html('');

    var err=0;

    // person name
    if ( $("#md-resp-name").val() == '' ){
        err++
        $("#md-resp-name").addClass("hasError");
    } else {
        $("#md-resp-name").removeClass("hasError");
    }

    // phone
    if ( $("#md-resp-phone").val() == '' ){
        err++
        $("#md-resp-phone").addClass("hasError");
    } else {
        $("#md-resp-phone").removeClass("hasError");
    }

    // email
    if ( $("#md-resp-email").val() != '' ){
        var pattern = /\S+@\S+\.\S+/;
        if ( !pattern.test( $("#md-resp-email").val() )){
            err++
            $("#md-resp-email").addClass("hasError");
        } else {
            $("#md-resp-email").removeClass("hasError");
        }
    } else {
        $("#md-resp-email").removeClass("hasError");
    }

    var resp_type = '';
    if ( $("#resp_item_id").val() == 0 ) {
        resp_type = '?action=call';
    }else{
        resp_type = '?action=order';
    }

    if (err == 0){

        $.ajax({
            type: "POST",
            url: '/local/ajax/order.php'+resp_type,
            data: {
                'item_id': $("#resp_item_id").val(), // set in catalog.js
                'name': $("#md-resp-name").val(),
                'phone': $("#md-resp-phone").val(),
                'email': $("#md-resp-email").val(),
                'product_name': $("#resp_item_name").val(),
                'count': $("#countitog").html(),
                'price': $("#pricemodal").html()
            },
            dataType: "json",
            success: function(data){

                if (data.status == true){
                    $("#md-resp-name").val('');
                    $("#md-resp-phone").val('');
                    $("#md-resp-email").val('');
                    $("#resp_item_name").val('');

                }

                if (data.msg && data.msg.length > 0){
                    $(".md-resp-msg").fadeIn();
                    $.each( data.msg, function( key,field ) {
                        if (field.type == true){
                            $(".md-resp-msg").append('<p class="md-true">'+field.text+'</p>');
                        } else {
                            $(".md-resp-msg").append('<p class="md-error">'+field.text+'</p>');
                        }
                    });
                    $(".feedback.order").fadeOut();
                }

            }
        });
    }

});