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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

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
                        autoplaySpeed: 1500,
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
                        },
                        {
                          breakpoint: 500,
                          settings: {

                          }
                        }
                      ]
                    });
              });



$( ".tabs__caption li" ).first().addClass( "active" );
$( ".tabs .tabs__content" ).first().addClass( "active" );
