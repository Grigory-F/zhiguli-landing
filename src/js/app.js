import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'

import { Modal } from 'bootstrap'
import Swiper, {
  Navigation,
  Pagination,
  Thumbs,
  Controller,
  Autoplay,
} from 'swiper'

let listNames = [
  'Главное',
  'Транспорт',
  'Клиенты',
  'Безопасность',
  'Сотрудники',
]

let mainSlider = new Swiper('.main-slider', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 10000,
  },
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn',
  },
  pagination: {
    el: '.custom-pagination__ul',
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + listNames[index] + '</li>'
    },
  },
})

let headerBurger = document.querySelector('.header-burger')
let hiddenNav = document.querySelector('.hidden-nav')

headerBurger.addEventListener('click', (e) => {
  headerBurger.classList.toggle('header-burger--open')
  hiddenNav.classList.toggle('hidden-nav--open')
})

// listLinkNav.forEach((element, index) => {
//   element.addEventListener('click', () => {
//     headerBurger.classList.remove('header-burger--open')
//     headerNav.classList.remove('header-nav--open')
//     overflowMenu.classList.remove('header-nav__overflow--open')
//   })
// })

// overflowMenu.addEventListener('click', (e) => {
//   overflowMenu.classList.remove('header-nav__overflow--open')
//   headerBurger.classList.remove('header-burger--open')
//   headerNav.classList.remove('header-nav--open')
// })

// portfolioBlockEnterBtn.addEventListener('mousedown', () => {
//   portfolioBlockEnterBtn.src = './images/button-down.png'
// })
// portfolioBlockEnterBtn.addEventListener('mouseup', () => {
//   portfolioBlockEnterBtn.src = './images/button.png'
// })

window['FLS'] = location.hostname === 'localhost'
