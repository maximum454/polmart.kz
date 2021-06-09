@@include('./partials/jquery.min.js')
@@include('./partials/webp.js')
@@include('./partials/burger.js')
@@include('./partials/slick.js')
@@include('./partials/TweenLite.min.js')
@@include('./partials/TimelineMax.min.js')
@@include('./partials/EasePack.min.js')
@@include('./partials/CSSPlugin.min.js')
@@include('./partials/remodal.js')
@@include('./partials/likely.js')
@@include('./partials/calculator.js')
@@include('./partials/order.js')
@@include('./partials/call.js')
@@include('./partials/jquery.fancybox.js')

$(function () {
    var sliderMain = $('.js-slider-main').slick({
        dots: false,
        infinite: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
    });

    sliderMain.on('afterChange', function(event, slick, current){
        var sliderRubric = $('.slider-main__rubric');
        var sliderName = $('.slider-main__name');
        var sliderPrice = $('.slider-main__price');
        var tl = new TimelineMax();
        tl
            .fromTo(sliderRubric, .6, {left: "0",top: "-30px"}, {left: '0',top: '0',ease:Linear.easeNone},'group1')
            .fromTo(sliderName, .6, {left: "100%",top: "0"}, {left: '0',top: '0',ease:Linear.easeNone},'group1')
            .fromTo(sliderPrice, .6, {opacity: '0'}, {opacity: '1',ease:Linear.easeNone})
    });

    $('.js-slider-partners').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider-for-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav-product',
        adaptiveHeight: true
    });
    $('.slider-nav-product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-product',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.js-catalog-btn').on('click', function(){
        $('.header-catalog__menu').toggleClass('active');
    })

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        var price = $input.data('price');
        count = count < 1 ? 1 : count;
        var itog = price * count;
        $input.val(count);
        $input.change();
        $('#countitog').html(count);
        $('#price, #pricemodal').html(itog);
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var price = $input.data('price');
        var itog = price * (parseInt($input.val()) + 1);
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        $('#countitog').html(parseInt($input.val()));
        $('#price, #pricemodal').html(itog);
        return false;
    });

    $('.js-toggle-filter').on('click', function (){
        $('.bx-filter-section').toggleClass('active');
    })


    var tab = $('.tabs .tabs__content > .tabs__pane');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('.tabs .tabs__nav .tabs__link').click(function(){
        tab.hide();
        tab.filter(this.hash).show();
        $('.tabs .tabs__nav .tabs__link').removeClass('tabs__link_active');
        $(this).addClass('tabs__link_active');
        return false;
    }).filter(':first').click();

    $('.js-compare input[type="checkbox"]').click(function(){
        if(!$(this).is(':checked')){
            $(this).parent('.js-compare').removeClass('active');
        }else{
            $(this).parent('.js-compare').addClass('active');
        }
    });

    $(document).mouseup(function (e){ // событие клика по странице
        if (!$(".sort__select").is(e.target) && // если клик сделан не по элементу
            $(".sort__select").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $('.sort__dropdown').removeClass('active');
        }else{
            $('.sort__dropdown').addClass('active');
        }
    });
    $('.sort__item').on('click', function (){
        var name = $(this).html();
        $('.sort__select').html(name);
    })

    var cropElement = document.querySelectorAll('.breadcrumbs__active'), // выбор элементов
        size = 35                                             // кол-во символов
    endCharacter = '...';                                  // окончание

    cropElement.forEach(el => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }
    });
})
