// スライダー
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        897: {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 56,
        },
        481: {
            slidesPerView: 3,
            centeredSlides: true,
        },
    },
});
