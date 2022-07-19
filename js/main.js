/* VARIABLES Y CONSTANTES */
const hamburguer = document.getElementById("hamburguer");
const listLinks = document.getElementById("listLinks");

/* EVENTOS */
/* Expand or collapse the nav bar */
hamburguer.addEventListener('click', () => listLinks.classList.toggle("navBar__listLinks--active") );

/* Generate iFrame when the picture be clicked */
videoContainer.addEventListener('click', function() {
    videoContainer.innerHTML = ('<div class="whatMakesDifferent__img"><iframe width="560" height="315" src="https://www.youtube.com/embed/OA5v-bK67jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>') ;  
});

