var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
        navigation: {
        nextEl: ".swiper-button-next",  // Flecha de navegaci�n hacia adelante
        prevEl: ".swiper-button-prev",  // Flecha de navegaci�n hacia atr�s
    },
    
    
   breakpoints: {
         600: {
            slidesPerView: 1,  // Muestra 2 diapositivas cuando el ancho de la pantalla sea mayor a 768px
            spaceBetween: 40,   // Espacio entre las diapositivas en pantallas medianas
        },
   
       950: {
            slidesPerView: 2,  // Muestra 2 diapositivas cuando el ancho de la pantalla sea mayor a 768px
            spaceBetween: 40,   // Espacio entre las diapositivas en pantallas medianas
        },
        1350: {
            slidesPerView: 3,  // Muestra 3 diapositivas cuando el ancho de la pantalla sea mayor a 991px
            spaceBetween: 60,   // Espacio entre las diapositivas en pantallas grandes
        },
        1500: {
            slidesPerView: 4,  // Muestra 3 diapositivas cuando el ancho de la pantalla sea mayor a 991px
            spaceBetween: 60,   // Espacio entre las diapositivas en pantallas grandes
        },
    },

})