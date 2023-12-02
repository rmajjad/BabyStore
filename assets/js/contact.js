
const navbar = document.querySelector('.navbar-expand-lg');
const contact = document.querySelector('.contact');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const typeTop = document.querySelector('.contactUs');
const loading = document.querySelector('.loading');


window.addEventListener('scroll', function () {
    if (window.scrollY > contact.offsetTop) {
        navbar.classList.add('fixed-top');
        navbar.style.cssText = `
            box-shadow: 0 2px 5px #bbbbbb;
            transition: 1.5s;
        `;
    }
    else {
        navbar.classList.remove('fixed-top');
    }
    if (window.scrollY > typeTop.offsetTop) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
    }
    else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
    }
});

window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = 'auto';
    }, 500);
});

scrollToTopBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })

});