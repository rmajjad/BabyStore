const navbar = document.querySelector('.navbar-expand-lg');
const collectionCaption = document.querySelector('.collection ');
const loading = document.querySelector('.loading');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const typeTop = document.querySelector('.images');


//console.log(collectionCaption);
//console.log(collectionCaption.offsetTop); 
window.addEventListener('scroll', function () {
    if (window.scrollY > collectionCaption.offsetTop) {
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
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
});

window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = 'auto';
    }, 1500);
});

scrollToTopBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })

});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    
});