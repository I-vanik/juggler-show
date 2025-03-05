const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
    scrollCheck()
}

function scrollCheck() {
    if (document.documentElement.scrollTop > 100 || document.scrollTop > 100) {
        backToTopBtn.style.display = 'block'
    } else {
        backToTopBtn.style.display = 'none'
    }
}


backToTopBtn.onclick = function () {
    document.documentElement.scrollTop = 0;
    document.scrollTop = 0
}

