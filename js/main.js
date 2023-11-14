$(document).ready(function(){
    "use srtict";

    const html = $('html');
    const body = $('body');
    const slider = new Swiper(".category__slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    
    $(function(){
        $("a[href^='#']").on('click', function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
          return false;
        });
    });

    body.bind('touchstart', function() {});

    $(window).on('beforeunload', function(){
        $(this).scrollTop(0);
    });

})