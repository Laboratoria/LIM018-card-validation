import validator from "./validator.js";
let title = document.getElementById("title");
let reservation = document.getElementById("reservation");
//let correct = document.getElementById("correct");
//let incorrect = document.getElementById("incorrect");
let btn_yes = document.getElementById("btn_yes");
//let form_f = document.getElementById("form_f");
let form_s = document.getElementById("form_s");
let numberCard = document.getElementById("numberCard");
let btn_validator = document.getElementById("input_validation")
//variable boton validar
// eslint-disable-next-line no-console
console.log(btn_validator);
//let input_validation = document.getElementById("input_validation");
//let btn_correct = document.getElementById("btn_correct");
//let btn_incorrect = document.getElementById("btn_incorrect");


btn_yes.addEventListener("click", () => {
  
 title.style.display = "none";
  reservation.style.display = "none";
  //correct.style.display = "none";
  //incorrect.style.display = "none";

  reservation.textContent = form_s;

  // eslint-disable-next-line no-console
  //console.log(form_s);
}

);

btn_validator.addEventListener("click", (event) => {
  event.preventDefault()
  let inputNumberCard = numberCard.value;
  if(validator.isValid(inputNumberCard)){
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  //let form_s = document.getElementById("form_s");
  
 /*  validator.isValid("hola"); */
/*   let bonito = document.getElementById("bonito");
  bonito.innerHTML = "<h3> hola </h3>" */
  //evitar recargar página investigar

  
})

//alert para true or false 
// mensaje

// crear un elemento de HTML para mostrar desde Js 

//parent.getElementByTagName();
//parent.getElementByClassName();
//document.querySelector();
//document.querySelectorAll();
//validator.isValid('4083952015263');
//validator.isValid('79927398713');
//validator.isValid('1234567890');
//
//validator.maskify('4556364607935616');
//validator.maskify('1');
//validator.maskify("helloworld");
//validator.isValid()
//validator.maskify('4083952015263');
//validator.isValid('4083952015263');
//console.log(validator);
//let ccv= document.getElementById('ccv')
