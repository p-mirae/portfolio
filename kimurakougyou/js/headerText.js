// -------------------------- スクロールするとロゴと文字の色変更 --------------------------
$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".slider-wrapper").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".header_wrapper, .menu_contact, #drawerButton span").addClass("headerColorScroll");
        } else {
        $(".header_wrapper, .menu_contact, #drawerButton span").removeClass("headerColorScroll");
        }
    });
});
