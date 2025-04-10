// WORKS 横線
const allTarget = document.querySelectorAll(".border");

function observation() {
    allTarget.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();

        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add("line");
        } else {
            target.classList.remove("line");
        }
    });
}

window.addEventListener("scroll", observation);