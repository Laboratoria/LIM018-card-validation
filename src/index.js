import validator from "./validator.js";

const input = document.getElementById("inputNumber");
const botonPagar = document.getElementById("btn-pagar");
let valor;

input.addEventListener("click", (e) => {
  valor = input.value; //atrapa los números de la tarjeta de crédito (como string)
});

botonPagar.addEventListener("click", (e) => {
  e.preventDefault();
  let number = valor; // a la variable number se le pasa el valor del input por referencia.

  if (validator.isValid(number)) {
    alert("tarjeta válida");
  } else {
    alert("tarjeta inválida");
  }
});

// invoco a isValid, que recibe un parámetro
//console.log(validator.isValid("5118420403085267"));
//console.log(validator.maskify("51184888861245"));

//Función que cambia de pantalla
const botonPantalla = document.getElementById("btn-comprar");

function cambioPantalla() {
  document.getElementById("paso1").style.display = "none";
  document.getElementById("paso2").style.display = "block";
}

botonPantalla.addEventListener("click", cambioPantalla);
