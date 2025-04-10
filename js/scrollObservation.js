//  トップボタン 
function siteScroll() {
    let scrollY = window.scrollY;
    const topButton = document.querySelector(".topButton");

    if (scrollY > 200) {
        topButton.classList.add("btnActive"); 
    } else {
        topButton.classList.remove("btnActive");
    }
}

window.addEventListener("scroll", siteScroll);



// Animait css アニメーション
const allTargets = document.querySelectorAll(".target");

function observation() {
    allTargets.forEach(function (targets) {
        const targetRect = targets.getBoundingClientRect();

        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            targets.classList.add("fadeInUpSmall"); 
        }
    });
}

window.addEventListener("scroll", observation);
