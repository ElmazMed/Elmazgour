var openMenu = $('.open');
var closeMenu = $('.close');
var menu = $('.menu-container');

$(openMenu).on('click', function () {
    $(this).fadeOut()
    $(menu).fadeIn(800)
    $(closeMenu).fadeIn(800)
})

$(closeMenu).on('click', function () {
    $(this).fadeOut()
    $(menu).fadeOut(800)
    $(openMenu).fadeIn(800)
})


    $('.img-back').hover(function () {
        $(".rotate-background").css("transform", "rotate(180deg)", 1000)
        $('.my-name p').fadeIn(2000)
},
        function () {
            $(".rotate-background").css("transform", "rotate(0deg)", 1000)
            $('.my-name p').fadeOut()
    }
)

if ($(window).innerWidth() >= 1000) {

    $('.content-card').hover(function () {
        $(this).css({
        "transform": "translateY(-1%)", 
        "border-left": "8px solid #FE2C55"
    })
        $(".about-left-side .content-card p").css("color", "white")
},
        function () {
            $(this).css({
                "transform": "translateY(0)", 
                "border-left": "8px solid #a81936"
            }),

        $(".about-left-side .content-card p").css("color", "#d1d1d1")
    }
)
} else {
    $('.content-card').css({
        "transform": "translateY(0)", 
        "border-left": "8px solid #FE2C55"
    }),

$(".about-left-side .content-card p").css("color", "white")
}


$(".thumbnails img").on('click', function () {
    $(this).addClass('selected').siblings().removeClass('selected')
    $(".primary-img img").hide().attr("src", $(this).attr("src")).fadeIn(500)
})
