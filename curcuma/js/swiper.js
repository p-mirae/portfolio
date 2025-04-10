// swiper スライダー

const swiper = new Swiper(".swiper-container", {
    loop: true, // ループさせる
    slidesPerView: 1.5, // 一度に表示する枚数
    centeredSlides: true,
    speed: 1000, // 少しゆっくり(デフォルトは300)
    autoplay: {
        // 自動再生
        delay: 3000, // 1.5秒後に次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        500: {
            slidesPerView: 3,
        },
    },
});
