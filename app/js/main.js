$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    normalFill: "#A0A0A0",
    ratedFill: "#ffa726",
    readOnly: true,
  });

  var mixer = mixitup(".products__inner-box");

  //слайдер секции популярных товаров
  $(".product-slider__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
