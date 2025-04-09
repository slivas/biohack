document.addEventListener('DOMContentLoaded', () => {

    swiperPartners = new Swiper('.section-magazine__list', {
        loop: true,
        speed: 5000,
        slidesPerView: 'auto',
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        freeMode: true,
        freeModeMomentum: false,
    });

});