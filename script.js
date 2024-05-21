window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
    var backToTopBtn = document.getElementById("btnBacktoTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function backToTop() {
    document.documentElement.scrollTop = 0;
}

