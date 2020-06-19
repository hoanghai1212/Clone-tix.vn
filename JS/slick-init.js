
$(document).ready(function ()
{
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


$(window).on('load', function ()
{

    /* If we are above mobile breakpoint unslick the slider */
    if ($(window).width() < 993)
    {
        /* Do nothing (responsive Slick's setting will unslick the slider) */
        $('.nowShowing__carousel').slick('unslick');
        $('.comingSoon__carousel').slick('unslick');
    }
    else
    {
        $('.nowShowing__carousel').slick({
            infinity: true,
        });

        $('.comingSoon__carousel').slick({
            infinity: true,
        });
    }

});