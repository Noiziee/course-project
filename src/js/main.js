// accordion
let acc = document.getElementsByClassName('accordion__item-title')
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
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button-right',
    prevEl: '.reviews__button-left',
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});


