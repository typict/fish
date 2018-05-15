$(function () {
    console.log('scripts2.js is loaded');
  $('.catalog_page aside>ul>li>a').on('click',function(e){
    e.preventDefault();
    let current = $(this).find('.more');
    $(this).parents('ul').find('em').not(current).removeClass('minus');
    current.toggleClass('minus');
    let currentul = $(this).next('ul');
    $(this).parents('ul').find('ul').not(currentul).slideUp(300).removeClass('selected_submenu').prev().removeClass('selected_list_item');
    currentul.slideToggle(300).toggleClass('selected_submenu');
    $(this).toggleClass('selected_list_item');
  });


  /*$(window).on('resize',function(){
    if($('.window_check')) {$('.window_check').remove();}
    $('.catalog_page').before('<span class="window_check">Щирина выкна:'+$(this).width()+' Chrome(media queries):'+(parseInt($(this).width())+17)+'</span>');
  }).trigger('resize');*/

    $(document).ready(function(){
        $(".card_fade_slider").slick({
            fade: true,
            cssEase: 'linear',
            dots:true,
            dotsClass:'card_sl_controls'/*,
            prevArrow:'.card_arrow.up',
            nextArrow:'.card_arrow.down'*/

        });
    });



    $('.card_page .card_form [type="text"]').on('input', function () {
        var $th = $(this); $th.val($th.val().replace(/[^0-9,]/g, ''))}
        );

    $('body').on('click', '.incr,.decr', function () {

        let val = $(this).parent('label').find('input').val()===''?0.5:+parseFloat($(this).parent('label').find('input').val());
        if ($(this).is('.decr')) {
            val-=0.5;
        } else {
            val+=0.5;
        }
        if (val<0.5) {return;}
        $(this).parent('label').find('input').val(val+' кг');
        $(this).parent('label').find('input').attr('value',val);
    });

    /*$('window').on('resize',function(){
        if($('window').width()<=551) {
            $('.card_soc_block').find('a').wrap('<span class="temp_wrap"></span>');
            $(this).find('.temp_wrap').css('float','right');
        }

    }).trigger('resize');*/

    $(document).ready(function(){
        $(".test_zoom").slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    });







});