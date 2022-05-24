import validator from "./validator.js";

console.log(validator);

/* Muestra pantalla 2 */
const boton = document.getElementById("btn-comprar");

function comprar() {
  document.getElementById("paso1").style.display = "none";
  document.getElementById("paso2").style.display = "block";
}

boton.addEventListener("click", comprar);

