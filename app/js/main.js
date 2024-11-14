$ (function () {

  $(".menu__btn, .menu a").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu").toggleClass("menu--active");
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__item").toggleClass("menu__item--active");
  });


  $(".top-slider__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 10000,
  });

  $(".catalog__filters-btn").on("click", function () {
    $(".catalog__filters").toggleClass("catalog__filters--active");
  });
  $(".catalog__filters-close").on("click", function () {
    $(".catalog__filters").toggleClass("catalog__filters--active");
  });

  $('.filter__range-input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".filter__range-min").text(data.from);
      $(".filter__range-max").text(data.to);
    },
    onChange: function (data) {
      $(".filter__range-min").text(data.from);
      $(".filter__range-max").text(data.to); 
    },
  });

  $(".filter__recent-star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratefFill: "#ffc35b",
    readOnly: true
  });

  
});