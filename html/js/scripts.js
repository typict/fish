function openbox(e,o){var t=document.getElementById(e);document.getElementById(o);"block"==t.style.display?t.style.display="none":t.style.display="block"}!function(){for(var e,o=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=t.length,s=window.console=window.console||{};i--;)s[e=t[i]]||(s[e]=o)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),$(document).ready(function(){$(".slider1").slick({dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider2").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider3").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider4").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider5").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider6").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider7").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}}]})}),$(document).ready(function(){$(".slider_rev").slick({dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplaySpeed:3e3,adaptiveHeight:!0})}),$(document).ready(function(){$(".slider_partner").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,autoplaySpeed:3e3,adaptiveHeight:!0,responsive:[{breakpoint:1e3,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})}),$(".tabs__caption li").first().addClass("active"),$(".tabs .tabs__content").first().addClass("active"),$(document).ready(function(){$(".left_caps").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),t=$(o).offset().top;$("body,html").animate({scrollTop:t},1e3)})}),$(function(){$(".tel_pop_o").click(function(){$(".tel_pop").toggleClass("open")})}),$(function(){$("#menu_title1").click(function(){$("#footer_menu_1").toggleClass("open")})}),$(function(){$("#menu_title2").click(function(){$("#footer_menu_2").toggleClass("open")})}),$(function(){$("#menu_title3").click(function(){$("#footer_menu_3").toggleClass("open")})}),$(".footer_menu_title").click(function(){$(this).toggleClass("active")}),$(function(){$("#tabs_order_open1 a").click(function(){$("#tabs_order1").toggleClass("open")})}),$(function(){$("#tabs_order_open2 a").click(function(){$("#tabs_order2").toggleClass("open")})}),$(function(){$("#tabs_order_open3 a").click(function(){$("#tabs_order3").toggleClass("open")})});
//# sourceMappingURL=maps/scripts.js.map
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
