// CAROUSEL
const myCarouselElement = document.querySelector('#carouselExampleControls')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: true
})



// TOOLTIPS
 new bootstrap.Tooltip($("#EnviarMensaje"), null);


// MODAL

const modalForm = new bootstrap.Modal(document.getElementById("modal-form"), {});

// EVENTO

function formEnviar() {
    modalForm.show();
    $('#formulario')[0].reset();
}
 
 
