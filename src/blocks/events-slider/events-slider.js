(function(){
  const swiper = new Swiper('.events-slider__container', {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}());
