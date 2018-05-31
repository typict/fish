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
     console.log($(window).width());
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
        let $th = $(this);
      /*let val = $th.val().replace(/[^\d+\.,]/g, '');
      val=val.replace(/,/g, '.');*/
      $th.val($th.val().replace(/[^0-9,.]/g, '').replace(/,/g, '.'));
      /*$th.val(val);*/
      console.log($th.val());
    });


    //default value
    $('.calc_value').text(parseFloat($('.card_form [name="quantity"]').attr('data-min'))*parseInt($('.blue_title').text())+' грн');

    $('body').on('click', '.incr,.decr', function () {
        let val = $(this).parent('label').find('input').val()===''?0.5:+parseFloat($(this).parent('label').find('input').val());
        if ($(this).is('.decr')) {
            val-=0.5;
        } else {
            val+=0.5;
        }
        if (val<0.5) {return;}
        console.log(val);
        $(this).parent('label').find('input').val(val+' кг');
        $(this).parent('label').find('input').attr('value',val);
        $(this).parent('label').find('input').trigger('change');
    });

    $('body').on('change','.card_form [name="quantity"]',function(){
      console.log('change triggered');
      let val = parseFloat($(this).val());
      console.log(val);
      $('.calc_value').text(val*parseInt($('.blue_title').text())+' грн');
    });

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

    $(document).ready(function(){
        $(".slide_tab").slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
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

    /*slide_tab logic*/
  $('.slide_tab_tab_item').hide();
    if(!$('.slide_tab_tab_item.active_tab').length) {
        $('.slide_tab').find('.slide_tab_slide').eq(0).addClass('active_tab_slide');
        $('.slide_tab_tab_item').eq(0).show();
    }
    $('.slide_tab ').on('afterChange',function(event,slick,currentSlide, nextSlide){
        let dataindex;
        dataindex= $('.slick-current .vil_wrap').attr('data-index');
        $(this).find('.active_tab_slide').removeClass('active_tab_slide');
        $('.slick-current').addClass('active_tab_slide');
        $('.slide_tab_tab_item.active_tab').removeClass('active_tab');
        $('.slide_tab_tab_item').hide().eq(dataindex).addClass('active_tab').show();
    });
    $('.slide_tab_slide').on('click',function(){
        $(this).parent().find('.active_tab_slide').removeClass('active_tab_slide');
        $(this).addClass('active_tab_slide');
        $('.slide_tab_tab_item.active_tab').removeClass('active_tab');
        dataindex = $(this).find('.vil_wrap').attr('data-index');
        $('.slide_tab_tab_item').hide().eq(dataindex).addClass('active_tab').show();
    })


  /*$('.sportfishing_catalog .test_slider').wrap('<div class="test_slider_wrap"></div>');
  $('.sportfishing_catalog .test_slider_wrap').append('<span class="testslider-prev nav_cntrl"></span><span class="testslider-next nav_cntrl"></span>');


 if(!$('.sportfishing_catalog .test_slider').find('.active_test_slide').length) {
     $('.sportfishing_catalog .test_slider').find('.test_slider_slide').eq(0).addClass('active_test_slide');
 }

 $('body').on('click','.sportfishing_catalog .nav_cntrl',function(){
      console.log('btn is clicked');
      let currentSlide = $(this).parent().find('.active_test_slide');
      let nextSlide;
      if($(this).is('.testslider-prev')){
          nextSlide= currentSlide.prev();
          if(currentSlide.index()===0) {
              nextSlide = $('.test_slider_slide').last();
          }
      } else {
          nextSlide= currentSlide.next();
          if((currentSlide.index()+1)===$('.sportfishing_catalog .test_slider_slide').length) {
              nextSlide = $('.sportfishing_catalog .test_slider_slide').first();
          }
      }
      currentSlide.removeClass('active_test_slide');
      nextSlide.addClass('active_test_slide');
  });

 $('body').on('click','.test_slider_slide',function(){
     $(this).parent().find('.active_test_slide').removeClass('active_test_slide');
     $(this).addClass('active_test_slide');
 });*/













});