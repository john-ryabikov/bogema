$(document).ready(function(){
    "use srtict";

    const menu = $('.menu');
    const btnsForMenu = $('.header__btn-menu, .menu__close, .nav-list__text');
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
    
    btnsForMenu.click(function() {
        menu.toggleClass('active');
        html.toggleClass('stop-scroll');
    });

    new WOW().init();

})
