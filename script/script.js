const gallary = new Swiper(".gallary", {
  // Optional parameters
  direction: "horizontal",
  loop: true /* Круговая система */,
  speed: 1500 /* скорость пролистования */,
  effect: "slids",
  // effect:"flip", /* Переворот карточки. */
  // effect:"fade", /* Расстворение */
  // effect: "cards", /* Карты */
  // effect: "cube", /* Кубик */
  // effect:"coverflow", /* Что-то типо страниц книги или ...красота */
  spaceBetween: 10,
  // slidesPerView: 3 /* По сколько карточек показывать */,
  // centeredSlides:true, /* При slidesPerView покажет центральную и половинки по бокам */
  // slidesPerGroup:2,

  // initialSlide:2, /*  С какого слайда начинать показывать */
  freeMode: true /* Не долистывает карты автоматически */,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",

    clickable: true /*  Можно листать погинацией */,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  // Автоматическое пролистывание слайдера
  //   autoplay: {
  //     delay: 2000,
  //   },
  // breakpoints: {
  //   1251: {
  //     spaceBetween: 20,
  //     slidesPerView: 3,
  //   },
  //   951: {
  //     spaceBetween: 10,
  //     slidesPerView: 2,
  //   },
  //   0: {
  //     spaceBetween: 5,
  //     slidesPerView: 1,
  //   },
  // },
});
