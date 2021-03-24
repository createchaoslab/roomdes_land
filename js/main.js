$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.secslider__inner').slick({
        arrows: true,
        dots: true,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        centerMode: true,
        slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 867,
                settings: {
                    arrows: false

                }
            }
        ]
        /*
        responsive: [
            {
                breakpoint: 867,
                settings: {
                    arrows: false

                }
            }
        ]*/
    });
    $('.gallery__inner').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        centerMode: true,
        slidesPerRow: 3

    });
});
/*prevArrow: '<button id="prev" type="button" class="btn btn-prev"> <i class="btn-next"><img src="../img/next.svg" alt=""></i></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-next"></button>',*/