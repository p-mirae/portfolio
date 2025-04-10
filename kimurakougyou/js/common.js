// -------------------------- ドロワーボタン --------------------------
const button = document.getElementById("drawerButton");
const headermenu = document.getElementById("menu");
const logoWrapper = document.querySelector(".logo_wrapper");

button.addEventListener("click", drawermenu);
function drawermenu() {
    button.classList.toggle("close");
    headermenu.classList.toggle("open");
    logoWrapper.classList.toggle("white");
    for (let i = 0; i < drawerButton; i++) {
        drawerButton[i].classList.toggle("drawerButton");
    }
}

// ---------------------- 事業内容のホバーすると変わる ----------------------
const hoverItems = document.querySelectorAll(".service_item");

hoverItems.forEach((item) => {
    const itemBefore = item.querySelector(".service_item_before");
    const itemAfter = item.querySelector(".service_item_after");

item.addEventListener("mouseover", () => {
    itemBefore.classList.add("itemHover");
    itemAfter.classList.add("itemHover");
});

item.addEventListener("mouseout", () => {
    itemBefore.classList.remove("itemHover");
    itemAfter.classList.remove("itemHover");
    });
});

// -------------------------- 施工実績スライダー --------------------------
const swiper = new Swiper(".swiper", {
    // スライドの表示枚数：680px未満の場合
    slidesPerView: 1.2,
    breakpoints: {
        // スライドの表示枚数：420px以上の場合
    420: {
        slidesPerView: 1.5,
        },
    // スライドの表示枚数：680px以上の場合
    680: {
        slidesPerView: 2.5,
        },
    },
    spaceBetween: "2%", // スライド間の余白
    freeMode: true, // 前後のスライドで止まらずにスライド
    grabCursor: true, // カーソルを置いたときに指のカーソルを表示
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true 
    },
});

// ----------------------- スクロールアニメーション（見出し） -----------------------
const allTargets = document.querySelectorAll(".target");

function observation() {
    allTargets.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();

        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add("fadeInLeftSmall"); 
        }
    });
}

window.addEventListener("scroll", observation);

// ----------------------- スクロールアニメーション（コンテンツ） -----------------------
const allTarget = document.querySelectorAll(".targets");

function observations() {
    allTarget.forEach(function (targets) {
        const targetRect = targets.getBoundingClientRect();

        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            targets.classList.add("fadeInUpSmall"); 
        }
    });
}

window.addEventListener("scroll", observations);