import validator from "./validator.js";

const input = document.getElementById("inputNumber");
const botonPagar = document.getElementById("btn-pagar");
const validacion = document.getElementById("validacion");

botonPagar.addEventListener("click", (e) => {
  e.preventDefault();
  let number = input.value;

  if (validator.isValid(number)) {
    validacion.innerHTML = "TARJETA VÁLIDA";
    //alert("tarjeta válida");
    //obtener el número enmascarado
    const maskNumber = validator.maskify(number);
    //actualizar el input con el valor enmascarado
    input.value = maskNumber;
  } else {
    validacion.innerHTML = "TARJETA INVÁLIDA";
    //alert("tarjeta inválida");
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
