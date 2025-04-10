// ハートをクリックすると赤色に変わる
const jsHeart = document.querySelectorAll(".heart");
jsHeart.forEach(elm => {
    elm.addEventListener('click', function(){
        this.classList.toggle('redHeart');
    });
});