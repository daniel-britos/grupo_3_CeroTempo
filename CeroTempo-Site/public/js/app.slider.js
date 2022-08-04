window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__list"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__points",
    arrows: {
      prev: ".carousel__back",
      next: ".carousel__next",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
