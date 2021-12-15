$(document).ready(function(){

  var swiper01 = new Swiper(".mySwiper01", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  var swiper02 = new Swiper(".mySwiper02", {});
  var swiper03 = new Swiper(".mySwiper03", {
    slidesPerView: 1,
    spaceBetween: 10
  });
  var swiper04 = new Swiper(".mySwiper04", {});
  var swiper06 = new Swiper(".mySwiper06", {
    slidesPerView: 2,
    spaceBetween: 10
  });

});