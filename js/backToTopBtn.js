const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
    scrollCheck()
}

function scrollCheck() {
    if (document.documentElement.scrollTop < 100 || document.scrollTop < 100) {
        backToTopBtn.style.display = 'none'
    } else {
        backToTopBtn.style.display = 'block'
    }
}


backToTopBtn.onclick = function () {
    document.documentElement.scrollTop = 0;
    document.scrollTop = 0
}

