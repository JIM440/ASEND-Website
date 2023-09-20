// menu section
const close = document.querySelector('.bx-x');
const mobileNav = document.querySelector('.mobile-nav-menu')
const menu = document.querySelector('.bx-menu')
const blur = document.querySelector('.overlay-nav')

close.addEventListener('click', ()=>{
mobileNav.classList.remove('active')
menu.style.display = 'block'
blur.classList.remove('active')
})
menu.addEventListener('click', ()=>{
    mobileNav.classList.add('active')
blur.classList.add('active')
menu.style.display = 'none'
    })

// faqs section
const faqs = document.querySelectorAll('.faqs')

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active')
    })
})


  // tabs concour page
  const tabs = document.querySelectorAll('[data-tab-target')
  const tabContents = document.querySelectorAll('.tab-content > div')

  tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => tabContent.classList.remove('active'))
      tabs.forEach(tab => tab.classList.remove('active'))
      tab.classList.add('active')
      target.classList.add('active')
    })
  })