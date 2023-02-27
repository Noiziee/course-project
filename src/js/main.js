// accordion
let acc = document.getElementsByClassName('accordion__title')
let i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    let accordionСontent = this.nextElementSibling
    if (accordionСontent.style.display === 'block') {
      accordionСontent.style.display = 'none'
    } else {
      accordionСontent.style.display = 'block'
    }
  })
}


// Swiper
const swiper = new Swiper('.reviews__slider', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button-right',
    prevEl: '.reviews__button-left',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Burger

const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.burger-menu__btn')

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')

  })

  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}

// ================================================

const anchors = document.querySelectorAll('a[href*="#"')

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

