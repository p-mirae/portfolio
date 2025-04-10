// ********** トップボタン **********
function siteScroll() {
    let scrollY = window.scrollY; // スクロールされた量を取得
    // 今回は中身が変わるから「let」を作る。
    // let scrolly の中にはどれくらいスクロールしたのか
    const topButton = document.querySelector(".topButton");
    // topButtonを取得したら.activeをつける

    if (scrollY > 200) {
        // スクロール量が200ピクセル以上ならば
        topButton.classList.add("active"); // .active を付ける
        // window.removeEventListener("scroll", siteScroll);
    } else {
        // 200よりも上のとき、トップに戻ったらボタン消えるようにする
        topButton.classList.remove("active");
    }
}

window.addEventListener("scroll", siteScroll);
