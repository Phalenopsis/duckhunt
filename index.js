const duck = document.getElementById("duck");
const bullets = document.getElementsByClassName("bullet");

const stepX = 100;
const stepY = 50;
const maxY = 450;
const maxX = 1000;

//write your code below
const screen = document.getElementById("gameScreen");
let screenLimits = screen.getBoundingClientRect();

// on écoute s'il y a un évènement touche du clavier enfoncée
window.addEventListener("keydown", (e) => {
  //quand une touche est enfoncée :
  let duck = document.getElementById("duck");
  let move = duck.getBoundingClientRect(); // on prend les coordonnées du canard

  let left = parseInt(move.left) - parseInt(screenLimits.left); // on prend la gauche du canard moins la gauche de l'écran de jeu - ce sera notre valeur en x (sur le plan horizontal)
  let top = parseInt(move.top); // on prend le top du cannard, ce sera notre valeur en y (sur le plan vertical)
  duck.className = ""; // on retire toutes les classes du canard
  duck.classList.add("duck"); // on lui remet la classe canard

  if (e.key === "ArrowDown") {
    // si la touche est la flèche du bas
    if (move.bottom + 3 * stepY < screenLimits.bottom) {
      //si le canard ne sort pas de la map (pour ce côté, on fait attention à ce qu'il n'aille pas dans l'herbe)
      duck.style.top = top + stepY + "px"; // on change la valeur en y du canard
    }
    duck.classList.add("duck-down"); // on ajoute la class css pour que le canard aille vers le bas
  } else if (e.key === "ArrowUp") {
    //idem qu'au dessus
    if (top - stepY > screenLimits.top) {
      duck.style.top = top - stepY + "px";
    }
    duck.classList.add("duck-up");
  } else if (e.key === "ArrowRight") {
    //idem qu'au dessus
    if (move.right + stepX < screenLimits.right) {
      duck.style.left = left + stepX + "px";
    }
    duck.classList.add("duck-right");
  } else if (e.key === "ArrowLeft") {
    //idem qu'au dessus
    if (move.left - stepX > screenLimits.left) {
      duck.style.left = left - stepX + "px";
    }
    duck.classList.add("duck-left");
  }
});

// écoute du tir (un clic)
window.addEventListener("click", (e) => {
  let rect = duck.getBoundingClientRect(); // on récupère les coordonnées du rect du canard
  if (
    e.clientX > rect.left && // si le tir (le clic) est dans les coordonnées du canard
    e.clientX < rect.right &&
    e.clientY < rect.bottom &&
    e.clientY > rect.top
  ) {
    shoot(); //on shoot
  } else {
    if (!removeBullet()) {
      //s'il n'y a plus de balles
      gameOver(); //game over
    }
  }
});

/**
 * les balles sont des div dans la div bullet-box (allez voir le html)
 * à chaque appel à cette fonction, on retire une balle
 *
 * @returns int le nombre de balles restantes
 */
function removeBullet() {
  const bulletBox = document.getElementById("bullet-box");
  const bullets = document.getElementsByClassName("bullet");

  bulletBox.removeChild(bullets[0]);
  return bullets.length;
}
