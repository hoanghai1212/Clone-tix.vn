
$(document).ready(function ()
{
    $('.carousel__wrapper').slick({
        autoplay: true,
        dots: true,
        infinity: true,
        autoplaySpeed: 5000,

    });
});

$(document).ready(function ()
{
    $('.nowShowing__carousel').slick({
        infinity: true,
   
    });

    $('.comingSoon__carousel').slick({
        infinity: true,
    });
    
});


