// ドロワーボタン
const button = document.getElementById("drawerButton");
const headermenu = document.getElementById("menu");

button.addEventListener("click", drawermenu);
function drawermenu() {
    button.classList.toggle("close");
    headermenu.classList.toggle("open");
    for (let i = 0; i < drawerButton; i++) {
        drawerButton[i].classList.toggle("drawerButton");
    }
}
