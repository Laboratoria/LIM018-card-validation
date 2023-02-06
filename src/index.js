import validator from "./validator.js";
function init(){  

let form_s = document.getElementById("form_s");
form_s.style.display = "none";
let btn_yes = document.getElementById("btn_yes");
btn_yes.addEventListener("click", hiddenReservationForm)
let btn_validator = document.getElementById("input_validation");
btn_validator.addEventListener("click", validation)
let btn_pay = document.getElementById("btn_pay");
btn_pay.addEventListener("click", endReservation)
btn_pay.style.display = "none";
let end_s = document.getElementById("end_s");
end_s.style.display = "none";

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
function validation(){
  event.preventDefault();
  let btn_pay = document.getElementById("btn_pay");
  let numberCard = document.getElementById("numberCard");
  let inputNumberCard = numberCard.value;
 console.log('antes',inputNumberCard)
  const message = document.getElementById("message");
  let muskify = validator.maskify(inputNumberCard);
  if (inputNumberCard === "") {
    message.innerHTML = "Ingrese un número de tarjeta";
    
  } else {
    if ((inputNumberCard.length>18 && inputNumberCard.length <=19)^(inputNumberCard.length>15 && inputNumberCard.length <=16)) {
      let input_validation = numberCard.value;
      numberCard.value = input_validation.replace(/\s/g, '') 
	// Eliminamos espacios en blanco
	    console.log(numberCard.value)
      if(muskify != " "){
        numberCard.value = muskify
        console.log(numberCard.value)
        message.innerHTML = "Tarjeta válida";
        btn_pay.style.display = "flex";
      }

   
    } else {
      message.innerHTML = "Tarjeta inválida";
    }
  }

  
}


//evento para finalizar
function endReservation(){
    event.preventDefault();
    const reservation_s = document.getElementById("reservation_s");
    const form_s = document.getElementById("form_s");
    const end_s = document.getElementById("end_s");
    
    reservation_s.style.display = "none";
    form_s.style.display = "none";
    end_s.style.display = "flex";
  
 
}



function backInit(){  
    location.reload();
}

window.addEventListener('load', init)
