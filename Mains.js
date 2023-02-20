//const caja = document.querySelector('.caja')
window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carrucel_lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carucel_indicador',
        arrows: {
            prev: '.carrusel_anterior',
            next: '.carrusel_siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
})

// ------------ Hover -----------
//caja.forEach((caja)=> {
  //  caja.addEventListener('mouseenter', (e) =>{
    //    const elemento = e.currentTarget;
      //  setTimeout(() =>{
        //    caja.forEach(caja => caja.remove('hover'));
          //  elemento.classList.add('hover');
        //}, 300);
    // });
//});
