$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive:[
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 735,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
  });
});
