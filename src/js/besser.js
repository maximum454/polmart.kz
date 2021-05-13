@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/burger.js')
@@include('partials/slick.js')
@@include('./partials/TweenLite.min.js')
@@include('./partials/TimelineMax.min.js')
@@include('./partials/EasePack.min.js')
@@include('./partials/CSSPlugin.min.js')
@@include('./partials/remodal.js')
@@include('./partials/likely.js')
@@include('./partials/tabs.js')

$(function () {
    $tabs('.tabs');

    var sliderMain = $('.js-slider-main').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false
    });

    sliderMain.on('afterChange', function(event, slick, current){
        console.log(current);
        sliderRubric = document.getElementsByClassName('slider-main__rubric');
        sliderName = document.getElementsByClassName('slider-main__name');
        sliderPrice = document.getElementsByClassName('slider-main__price');
        tl = new TimelineMax();
        tl
            .fromTo(sliderRubric, .6, {left: "0",top: "-30px"}, {left: '0',top: '0',ease:Linear.easeNone},'group1')
            .fromTo(sliderName, .6, {left: "100%",top: "0"}, {left: '0',top: '0',ease:Linear.easeNone},'group1')
            .fromTo(sliderPrice, .6, {opacity: '0'}, {opacity: '1',ease:Linear.easeNone})
    });

    $('.js-slider-partners').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: false
    });

    $('.slider-for-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-product'
    });
    $('.slider-nav-product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-product',
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        var price = $input.data('price');
        count = count < 1 ? 1 : count;
        var itog = price * count;
        $input.val(count);
        $input.change();
        $('#price').html(itog);
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var price = $input.data('price');
        var itog = price * (parseInt($input.val()) + 1);
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        $('#price').html(itog);
        return false;
    });
})