// 黄色マーカー
const allTarget = document.querySelectorAll(".marker");

function observation() {
    allTarget.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();

        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add("on");
        } else {
            target.classList.remove("on");
        }
    });
}

window.addEventListener("scroll", observation);
