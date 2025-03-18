$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    // centerMode: true,
    responsive:[

        {
            breakpoint: 1238,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
  });
});
