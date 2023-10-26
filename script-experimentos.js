/*Responsividade usando JS*/
// Responsividade usando JS
const swiperContainers = document.querySelectorAll('.swiper-container');
const header = document.querySelector('.header')

swiperContainers.forEach(function(swiper) {
  // Execute a lógica de responsividade quando a página é carregada
  const larguraDaJanela = window.innerWidth;

  if (larguraDaJanela <= 750) {
    header.classList.add("selecionado")
    swiper.setAttribute('slides-per-view', '1');
  } else {
    swiper.setAttribute('slides-per-view', '2.5');
  }
});
