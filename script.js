// Mensaje de bienvenida
window.onload = function() {
    alert("¡Bienvenido a mi blog de razas favoritas de animales!");
};

// Galerías de imágenes automáticas
const perrosImgs = ["img/labrador1.jpg","img/pastor1.jpg"];
const gatosImgs = ["img/siames1.jpg","img/main-coon1.jpg","img/bosque-noruega1.jpg"];
const caballosImgs = ["img/percheron1.jpg","img/arabe1.jpg"];

let iPerros = 0;
let iGatos = 0;
let iCaballos = 0;

const imgPerros = document.getElementById("perros-img");
const imgGatos = document.getElementById("gatos-img");
const imgCaballos = document.getElementById("caballos-img");

setInterval(() => {
    // Perros
    imgPerros.src = perrosImgs[iPerros];
    iPerros = (iPerros + 1) % perrosImgs.length;

    // Gatos
    imgGatos.src = gatosImgs[iGatos];
    iGatos = (iGatos + 1) % gatosImgs.length;

    // Caballos
    imgCaballos.src = caballosImgs[iCaballos];
    iCaballos = (iCaballos + 1) % caballosImgs.length;

}, 3000);
