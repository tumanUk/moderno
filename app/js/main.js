$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    normalFill: "#A0A0A0",
    ratedFill: "#ffa726",
    readOnly: true,
  });

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

  // range slider
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1500,
    from: 0,
    to: 600,
    prefix: "$",
  });

  $(".icon-th-list").on("click", function () {
    $(".product__item").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });

  $(".icon-th-large").on("click", function () {
    $(".product__item").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });




  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });




  $(".header__btn-menu").on("click", function () {
    $(".header__box").toggleClass('active');
  });


  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

    $('input[type="file"], select').styler();


  var mixer = mixitup(".products__inner-box");
});
