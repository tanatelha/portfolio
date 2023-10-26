const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/*Responsividade usando JS*/
function adjustSlidesPerView() {
        if (window.innerWidth <= 400) {
            document.querySelector('.swiper-container').setAttribute('slides-per-view', '1.5');
        } else {
            document.querySelector('.swiper-container').setAttribute('slides-per-view', '2.5');
        }
    }

    // Chame a função quando a página carregar e quando a janela for redimensionada
    window.addEventListener('load', adjustSlidesPerView);
    window.addEventListener('resize', adjustSlidesPerView); 