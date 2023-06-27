(function(){
  const partnersSlider = new Swiper('.partners__container', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    //rewind: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
  });
}());
