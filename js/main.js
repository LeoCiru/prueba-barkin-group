/* VARIABLES Y CONSTANTES */
const hamburguer = document.getElementById("hamburguer");
const listLinks = document.getElementById("listLinks");

hamburguer.addEventListener('click', function () {
    listLinks.classList.toggle("navBar__listLinks--active");
});



