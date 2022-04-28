window.onload = function(){
  AOS.init();
    var swiper = new Swiper("#couponSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay:3000,
        },
        loop : true,
        
      });





};