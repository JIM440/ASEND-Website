// menu section
const close = document.querySelector('.bx-x');
const mobileNav = document.querySelector('.mobile-nav-menu')
const menu = document.querySelector('.bx-menu')
const body = document.querySelector('.desktop-nav')

close.addEventListener('click', ()=>{
mobileNav.classList.remove('active')
menu.style.display = 'block'
body.classList.remove('active')
})
menu.addEventListener('click', ()=>{
    mobileNav.classList.add('active')
    body.classList.add('active')
menu.style.display = 'none'
    })

// faqs section
const faqs = document.querySelectorAll('.faqs')

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active')
    })
})

// swiper js
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });