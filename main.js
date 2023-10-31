
const slides = document.getElementsByClassName("imagen");
let currentSlide = 0;

function ver_catalogo() {
    console.log("CATALOGO!!");
}

function showSlide() {
for (let i=0; i < slides.length; i++) {
slides[i].style.display="none";
}
slides[currentSlide].style.display="block";
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

function previousSlide() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide= slides.length -1;
    }
    showSlide();

}

showSlide();

function validateForm() {
    let x = document.forms["formulario_validacion"]["nombre"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    x = document.forms["formulario_validacion"]["Apellido"].value;
    if (x == "") {
      alert("Apellido must be filled out");
      return false;
    }

    x = document.forms["formulario_validacion"]["telefono"].value;
    if (x == "" ) {
      alert("Telefono must be filled out");
      return false;
    }
  }