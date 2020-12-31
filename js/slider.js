//WORKSのスライダー
if ($(window).width() > 425) {
    jQuery(document).ready(function ($) {
        $('.bxslider').bxSlider({
            auto: true,
            pause: 5000,
            maxSlides: 5,
            moveSlides: 1,
            slideWidth: 322,
            slideMargin: 56,
            touchEnabled: true
        });
    })
} else {
    jQuery(document).ready(function ($) {
        $('.bxslider').bxSlider({
            auto: true,
            pause: 5000,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: $(window).width(),
            slideMargin: 10,
            touchEnabled: true
        });
    })
};