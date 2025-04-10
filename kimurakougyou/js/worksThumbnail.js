window.addEventListener("DOMContentLoaded", () => {

    // サムネイルのスライダー
    const thumbnail = new Swiper(".thumbnail", {
        freeMode: true,
        spaceBetween: 4,
        breakpoints: {
            // スライドの表示枚数：420px以上の場合
        420: {
            spaceBetween: 8,
            },
        // スライドの表示枚数：680px以上の場合
        680: {
            spaceBetween: 10,
            },
        },
        slidesPerView: 6,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        
    });

    // メインのスライダー
    const slider = new Swiper(".slider", {
        effect: "fade", // フェード
        thumbs: {
        swiper: thumbnail,
        },
    });
});