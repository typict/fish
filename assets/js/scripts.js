// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.
            $(document).ready(function(){
              $(".slider1").slick({
                        dots: true,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                      responsive: [
                          {
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        },
                        {
                          breakpoint: 800,
                          settings: {

                          }
                        }
                      ]
                    });
              });

            $(document).ready(function(){
              $(".slider2").slick({
                      dots: true,
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
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });
            $(document).ready(function(){
              $(".slider3").slick({
                      dots: true,
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
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });
            $(document).ready(function(){
              $(".slider4").slick({
                      dots: true,
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
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });
            $(document).ready(function(){
              $(".slider5").slick({
                      dots: true,
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
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });
            $(document).ready(function(){
              $(".slider6").slick({
                      dots: true,
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
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });
            $(document).ready(function(){
              $(".slider7").slick({
                      dots: true,
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
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });

            $(document).ready(function(){
              $(".slider_rev").slick({
                      dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplaySpeed: 3000,
                        adaptiveHeight: true,
                      responsive: [
                          {
                          breakpoint: 1600,
                          settings: {

                          }
                        },
                        {
                          breakpoint: 800,
                          settings: {

                          }
                        }
                      ]
                    });
              });

            $(document).ready(function(){
              $(".slider_partner").slick({

                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplaySpeed: 3000,
                        adaptiveHeight: true,
                      responsive: [
                          {
                          breakpoint: 1000,
                          settings: {
                            slidesToShow: 3
                          }
                        },
                        {
                          breakpoint: 700,
                          settings: {
                            slidesToShow: 2
                          }
                        }
                      ]
                    });
              });



$( ".tabs__caption li" ).first().addClass( "active" );
$( ".tabs .tabs__content" ).first().addClass( "active" );



function openbox(id,tt) {
              var div = document.getElementById(id);
              var tt_div = document.getElementById(tt);
              if(div.style.display == 'block') {
                div.style.display = 'none';
              }
              else {
                div.style.display = 'block';
              }
              }



$(document).ready(function(){
  $(".left_caps").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});



  $(function(){
    $('.tel_pop_o').click(function(){
        $('.tel_pop').toggleClass('open')
                    });
});
