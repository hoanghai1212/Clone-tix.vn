
$(document).ready(function ()
{

    if ($(window).width() > 992)
    {
        $('.nowShowing__carousel').slick({
            infinity: true,
        });

        $('.comingSoon__carousel').slick({
            infinity: true,
        });
    }
    $('.carousel__wrapper').slick({
        autoplay: true,
        dots: true,
        infinity: true,
        autoplaySpeed: 5000,

    });

    $('.appBlock__phone-slides').slick({
        infinity: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1800,

    });
});


