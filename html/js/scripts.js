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


    /*old calculator (single value)*/
  /*$('.card_page .card_form [type="text"]').on('input', function () {
    let $th = $(this);
    $th.val($th.val().replace(/[^0-9,.]/g, '').replace(/,/g, '.'));
    console.log($th.val());
  });


  /*input calc logic (single value)*/
  /*$('.calc_value').text(parseFloat($('.card_form [name="quantity"]').attr('data-min'))*parseInt($('.blue_title').text())+' грн');

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

  /*end of input single value calc logic*/

  /*range calc block*/

  if ($('.card_page').length) {
    $('.card_page .card_form [type="text"]').on('input', function () {
      let $th = $(this);
      $th.val($th.val().replace(/[^0-9,.]/g, '').replace(/,/g, '.'));
    });

    //default value
    var price = parseInt($('.blue_title').text());
    var defaultRange=$('.card_form [name="quantity"]').attr('data-min');
    defaultRange= defaultRange.split('-');
    $('.calc_value').text(parseFloat(defaultRange[0])*price+'-'+parseFloat(defaultRange[1])*price+' грн');

    $('body').on('click', '.incr,.decr', function () {
      let val = $(this).parent('label').find('input').val()===''?"0.5-1.0":$(this).parent('label').find('input').val();

      val = val.split('-');
      var nmbArray = val.map(function(el){
        return parseFloat(el);
      });
      var decrArr, incrArr;
      if ($(this).is('.decr')) {
        decrArr = nmbArray.map(function(el){
          return String(el-=0.5);
        });
        decrArr= decrArr.join('-');
      } else {
        incrArr = nmbArray.map(function(el){
          return String(el+=0.5);
        });
        incrArr = incrArr.join('-');
      }

      val=decrArr?decrArr:incrArr;
      if(val==='0-0.5'){return false;}
      $(this).parent('label').find('input').val(val+' кг');
      $(this).parent('label').find('input').attr('value',val);
      $(this).parent('label').find('input').trigger('change');
    });

    $('body').on('change','.card_form [name="quantity"]',function(){
      console.log('change triggered');
      let val = $(this).val();

      //keyboard input range validation*/
      var prelimVal,newVal;
      if(val.indexOf('-')===-1) {
        if(val==='') {
          $(this).val('0.5-1 кг');
          val='0.5-1 кг';
        } else {
          prelimVal=parseFloat(val)+0.5;
          newVal=val+'-'+String(prelimVal)+' кг';
          val = newVal;
          $('.card_form [name="quantity"]').val(val);
        }
      }
      //

      var newstr,newarr,finalarr;
      newstr = val.replace(/[^0-9,.-]/g, '');
      newstr = newstr.split('-');
      newarr = newstr.map(function(el){
        return parseFloat(el);
      });
      finalarr= newarr.map(function(el){
        return (el*price).toFixed(2);
      });
      $('.calc_value').text(finalarr[0]+'-'+finalarr[1]+' грн');
    });
  }

  /*end of range calc block*/

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

  let bodyWidth1, bodyWidth2, deltaWidth;
  /*popup*/
  $('.our_serv_item').on('click',function(e){
    e.preventDefault();
    console.log('click');
    let parent = !$(e.target).parents('.our_serv_item').length?$(e.target):$(e.target).parents('.our_serv_item').eq(0);
    let id = parent.attr('id');
    $('.application_popup_overlay, .application_popup').fadeIn();
    $('.application_popup').attr('data-id', id);
    $('.warning_desc, .email_warning').remove();
    $('input.warning').removeClass('warning');
    $('.application_popup form').find('input').not('[type="hidden"], [type="submit"]').val('');
    bodyWidth1 = $('body').width();
    console.log(bodyWidth1);
    $('body').css('overflow','hidden');
    bodyWidth2 = $('body').width();
    console.log(bodyWidth2);
    deltaWidth = bodyWidth2 - bodyWidth1;
    console.log(deltaWidth);
    $('body').css({'padding-right':deltaWidth+'px'});
  });

  $('.application_popup_overlay, .delete_item').on('click',function(){
    $('body').css({'padding-right':'', 'overflow':'auto'});
    $('.application_popup, .application_popup_overlay').fadeOut();
  });

  $(document).on('keyup', 'body', function (e) {if (e.which == 27) { $('.application_popup_overlay, .application_popup').fadeOut();}});

  $('.application_popup [name="phone"]').on('input', function () {
    let $th = $(this);
    $th.val($th.val().replace(/[^0-9,.]/g, ''));
  });

  /*validation with email*/
  /*$('.trigger_submit').on('click', function(){
    var flag=true;
    var a = false;
    var b = true;
    $(this).parents('form').find('input[type="text"],input[type="email"]').each(function(){
      if ($(this).val()!==''&&$(this).is('.warning')) {$(this).removeClass('warning')} else
      if($(this).val()==='') {
        $(this).addClass('warning');
        flag=false;
        b=false;
      }
    });

    $(this).parents('form').find('input[name="email"]').each(function(){
      if($(this).val().match(/\w+\@[a-z-]+\.[a-z]+/)==null) {
        flag=false;
        a = true;
      } else {a=false;}
    });

    if (!flag) {
      $(this).parents('form').find('.warning_desc').remove();
      if (!(b==true&&a==true)) {
        $(this).before('<p class="warning_desc">Для відправки форми необхідно заповнити виділені поля!</p>');
      }
      $(this).parents('form').find('.email_warning').remove();
      if(a) {
        $(this).before('<p class="email_warning">Необхідно вказати коректний email!</p>');
      }
      return false;
    } else {
      $(this).parents('form').find('.warning_desc').remove();
      $(this).parents('form').find('.email_warning').remove();
      var btn = $(this);
     //ajaxSubmit();
      $('.application_popup, .application_popup_overlay').hide();
      return false;
    }

  });*/

  /*validation without email*/
  $('.trigger_submit').on('click', function(e){
    e.preventDefault();
    var flag=true;
    $(this).parents('form').find('input').not('[type="email"],[type="hidden"], [name="description"]').each(function(){
      if ($(this).val()!==''&&$(this).is('.warning')) {$(this).removeClass('warning')} else if($(this).val()==='') {$(this).addClass('warning'); flag=false;}
    });
    if (!flag) {
      $(this).parents('form').find('.warning_desc').remove();
      $(this).before('<p class="warning_desc">Для відправки форми необхідно заповнити виділені поля!</p>');
      return false;
    } else {
      $(this).parents('form').find('.warning_desc').remove();
      $('.application_popup, .application_popup_overlay').hide();
      let btn = $(this);
      var form = btn.parents('form').eq(0);
      let id = $(this).parents('.application_popup').attr('data-id');
      console.log('id',id);
      console.log(form.serialize()+'&category_id='+id);
      ajaxSubmit(id);
      function ajaxSubmit(id) {
        $.ajax({
          type: "POST",
          url: "http://riverfish.com.ua/service_request",
          data: form.serialize()+'&id='+id,
          success: function (data) {
            console.log('ajax OK!');
            console.log(JSON.parse(data));
          }
        });
      }
      return false;
    }
  });


});
