/*ESERCIZIO 1 JS */ 
 /* function noLink() {
    const twitter = document.querySelector(
      "div .p-4:nth-of-type(3) ol.list-unstyled li:nth-of-type(2) a"
    );
    twitter.style.display = "none";
  }

  window.addEventListener("load", noLink);*/

window.onload=function (){
    document.querySelector("div .p-4:nth-of-type(3) ol.list-unstyled li:nth-child(2) a").remove()
    
/* ESERCIZIO 2 JS */

const continuaALeggere1 = document.querySelector(".jumbotron a");
const continuaALeggere2 = document.querySelector(
  ".col-md-6:nth-of-type(1) a.stretched-link"
);
const continuaALeggere3 = document.querySelector(
  ".col-md-6:nth-of-type(2) a.stretched-link"
);

function setContinuaALeggere(e) {
  e.target.parentNode.parentNode.parentNode.style.display = "none";
}

continuaALeggere1.addEventListener("click", setContinuaALeggere);
continuaALeggere2.addEventListener("click", setContinuaALeggere);
continuaALeggere3.addEventListener("click", setContinuaALeggere);

/* ESERCIZIO 3 JS */

/*for (let author of document.querySelectorAll(".blog-post-meta a"))
    author.addEventListener("mouseover", function (event) {
    alert(event.target.innerText);
    });*/


    const primoAutore = document.querySelector(".blog-post:nth-of-type(1) .blog-post-meta a");
      const secondoAutore = document.querySelector(".blog-post:nth-of-type(2) .blog-post-meta a");
      const terzoAutore = document.querySelector(".blog-post:nth-of-type(3) .blog-post-meta a");

      function setAlert(e) {
        if (e.target) {
          return alert(`${e.target.innerText} è l'autore dell'articolo.`);
          console.log(e.target);
        }
      }

      primoAutore.addEventListener("mouseover", setAlert);
      secondoAutore.addEventListener("mouseover", setAlert);
      terzoAutore.addEventListener("mouseover", setAlert);


}