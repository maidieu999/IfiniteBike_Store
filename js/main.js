console.log('ok');

// cursor script
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(e){
    cursor.setAttribute("style","top:"+(e.pageY - 15)+"px; left:"+(e.pageX - 15)+"px;");
})
document.addEventListener('click',function(){
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand')
    },500);
})
// categories section script
$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})
// hmaburger menu
document.addEventListener("DOMContentLoaded", function(){
   const hamburger = document.querySelector('.hambureger-menu');
    const menu = document.querySelector('.header__nav');
    const menuItem = document.querySelector('.nav__menu-item');
    hamburger.onclick = function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
    }
    for (const key in menuItem) {
        const element = menuItem[key];
        element.onclick = function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
    }
    }
    hamburger.onclick = function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
    }
})

//navigation fixed script
const navPane1 = document.querySelector('.header__wrap');
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        navPane1.classList.add('fixed');
    }
    else{
        navPane1.classList.remove('fixed');
    }
})

// contact home bg script, shop home
const imgBg = document.querySelector('.fullscreen-img__wrap img');
imgBg.classList.add('active');
setTimeout(() => {
    cursor.classList.remove('active')

},10000);


