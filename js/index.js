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
  // engineering
  const tabs = document.querySelectorAll('[data-tab-target')
  const tabContents = document.querySelectorAll('.tab-content1 > div')

  tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => tabContent.classList.remove('active'))
      tabs.forEach(tab => tab.classList.remove('active'))
      tab.classList.add('active')
      target.classList.add('active')
    })
  })
  // medicine
  const tabsM = document.querySelectorAll('[data-tab-target1')
  const tabContentsM = document.querySelectorAll('.tab-content2 > div')

  tabsM.forEach(tabM => {
    tabM.addEventListener('click', ()=>{
      const targetM = document.querySelector(tabM.dataset.tabTarget1)
      tabContentsM.forEach(tabContentM => tabContentM.classList.remove('active'))
      tabsM.forEach(tabM => tabM.classList.remove('active'))
      tabM.classList.add('active')
      targetM.classList.add('active')
    })
  })
    // agriculture
    const tabsA = document.querySelectorAll('[data-tab-target2')
    const tabContentsA = document.querySelectorAll('.tab-content3 > div')
  
    tabsA.forEach(tabA => {
      tabA.addEventListener('click', ()=>{
        const targetA = document.querySelector(tabA.dataset.tabTarget2)
        tabContentsA.forEach(tabContentA => tabContentA.classList.remove('active'))
        tabsA.forEach(tabA => tabA.classList.remove('active'))
        tabA.classList.add('active')
        targetA.classList.add('active')
      })
    })