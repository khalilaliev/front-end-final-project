(() =>{
    const openMenu = document.querySelector('.header__box-burger')
    const closeMenu = document.querySelector('.header__nav-close')
    const headerNavigation = document.querySelector('.header__nav')

    openMenu.addEventListener('click', (event) => {
        headerNavigation.classList.add('active')
    })
    closeMenu.addEventListener('click', (event) => {
        headerNavigation.classList.remove('active')
    })
    
})();

(() => {
    const tabsItems = document.querySelectorAll('.tabs__links-item')
    const tabsContents = document.querySelectorAll('.tabs__contents-item')

    tabsItems.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            tabsContents.forEach((content) => {
                content.classList.remove('active')
            })
            tabsItems.forEach((tab) => {
                tab.classList.remove('active')
            })
            tabsItems[index].classList.add('active')
            tabsContents[index].classList.add('active')
        })
    })

})();

const teamSwiper = new Swiper('.team__swiper', {
    loop: true,
    spaceBetween: 40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

const activeSwiper = new Swiper('.achive__swiper', {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: true,


  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
      centeredSlides: false,

    },
  }
});