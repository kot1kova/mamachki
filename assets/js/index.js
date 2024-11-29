// document
// 	.querySelector('.header__toggle')
// 	.addEventListener('click', function () {
// 		document.querySelector('.header-wrapper').classList.toggle('active')
// 		this.classList.toggle('active')
// 	})


// const mobileMenu = document.querySelector('.header-wrapper'); // Ваше мобильное меню
// const menuToggle = document.querySelector('.header__toggle'); // Кнопка открытия/закрытия меню

// // Открытие/закрытие меню
// menuToggle.addEventListener('click', () => {
//   const isOpen = mobileMenu.classList.toggle('open'); // Переключаем класс меню
//   document.body.classList.toggle('no-scroll', isOpen); // Блокируем прокрутку страницы
// });

// // Закрытие меню при клике вне меню или на ссылку
// mobileMenu.addEventListener('click', (e) => {
//   // Если клик был по ссылке или вне основного содержимого меню
//   if (e.target.tagName === 'A' || !e.target.closest('.mobile-menu')) {
//     mobileMenu.classList.remove('open'); // Закрываем меню
//     document.body.classList.remove('no-scroll'); // Включаем прокрутку страницы
//   }
// });

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
});
