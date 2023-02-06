import validator from "./validator.js";
function init(){  

let form_s = document.getElementById("form_s");
form_s.style.display = "none";
let pay_s = document.getElementById("pay_s");
pay_s.style.display = "none";

let btn_yes = document.getElementById("btn_yes");
btn_yes.addEventListener("click", hiddenReservationForm)
let btn_validator = document.getElementById("input_validation");
btn_validator.addEventListener("click", validation)
//const btn_pay = document.getElementById("btn_pay");
let btn_end = document.getElementById("btn_end");
btn_end.addEventListener("click", backInit);

}

//evento que me permite pasar a la siguiente vista
function hiddenReservationForm(){
  const reservation_s = document.getElementById("reservation_s");
  reservation_s.style.display = "none";
  const form_s = document.getElementById("form_s");
  form_s.style.display = "flex";
}
//evento que me permite pasar a validar el número de tarjeta
function validation(event){
  event.preventDefault()
  const numberCard = document.getElementById("numberCard");
  let inputNumberCard = numberCard.value;
  const message = document.getElementById("message");
  let muskify = validator.maskify(inputNumberCard);
  if (inputNumberCard === "") {
    message.innerText = "Ingrese un número de tarjeta";
    //¿Por qué estoy usando inner.Text y no inner.HTML?
  } else {
    if (validator.isValid(inputNumberCard)) {
      document.getElementById("numberCard").value = muskify;
      message.innerHTML = "Tarjeta válida";
   
   
    } else {
      message.innerText = "Tarjeta inválida";
    }
  }

  endReservation()
}


//evento para finalizar
function endReservation(){

  const reservation_s = document.getElementById("reservation_s");
  const form_s = document.getElementById("form_s");
  const pay_s = document.getElementById("pay_s");
 
   
  reservation_s.style.display = "none";
  form_s.style.display = "none";
  pay_s.style.display = "flex";
 
}

function backInit(){  
    location.reload();
}

window.addEventListener('load', init)
