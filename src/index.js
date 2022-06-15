import validator from "./validator.js";
let title = document.getElementById("title");
let reservation = document.getElementById("reservation");
let correct = document.getElementById("correct");
let incorrect = document.getElementById("incorrect");
let btn_yes = document.getElementById("btn_yes");
//let btn_correct = document.getElementById("btn_correct");
//let btn_incorrect =document.getElementById("btn_incorrect");
//let form_f = document.getElementById("form_f");
let form_s = document.getElementById("form_s");
let numberCard = document.getElementById("numberCard");
let btn_validator = document.getElementById("input_validation")
const message = document.getElementById("message");
//variable boton validar
// eslint-disable-next-line no-console
//console.log(btn_validator);
//let input_validation = document.getElementById("input_validation");
//let btn_correct = document.getElementById("btn_correct");
//let btn_incorrect = document.getElementById("btn_incorrect");

 form_s.style.display= "none";
 correct.style.display= "none";
 incorrect.style.display = "none";
btn_yes.addEventListener("click", () => {
  
 title.style.display = "none";
 reservation.style.display = "none";
  form_s.style.display="inline-flex";
 //correct.style.display = "none";
  //incorrect.style.display = "none";

 //reservation.textContent = form_s;

  // eslint-disable-next-line no-console
  //console.log(form_s);
}

);


btn_validator.addEventListener("click", (event) => {
  event.preventDefault()
  let inputNumberCard = numberCard.value;
  let muskify= validator.maskify(inputNumberCard);
  //let n = document.getElementById("card");
  if (inputNumberCard === ""){
      message.innerText = "Ingrese un número de tarjeta";
  }
  else {
   if (validator.isValid(inputNumberCard)){
    //document.getElementById("numberCard").textContent = validator.maskify(muskify);
    //alert(muskify);
   //form_s.style.display = "none"; // display: block
  //correct.style.display = "none";
  //incorrect.style.display = "none";
//visibility: hidden : visible

    //form_s.textContent = correct;
   document.getElementById("numberCard").value = muskify;
   //correct.style.display = "inline-flex";
    message.innerHTML = "Tajerta válida"; 
  } else {
    //form_s.style.display = "none";
    //correct.style.display = "none";
  //incorrect.style.display = "none";
    message.innerText = "Tarjeta inválida";
    //form_s.textContent = incorrect;
    //alert("incorrecto");
  }
  }
  //console.log(muskify);
  //validator.maskify(inputNumberCard);
  //let form_s = document.getElementById("form_s");
  
 /*  validator.isValid("hola"); */
/*   let bonito = document.getElementById("bonito");
  bonito.innerHTML = "<h3> hola </h3>" */
  //evitar recargar página investigar
})

/* //boton pagar: sección válida la compra
let refresh_btn_incorrect = document.getElementById('btn_incorrect');
refresh_btn_incorrect.addEventListener('click', () => {
            location.reload();
                   
});  */

//darle estilos a los botones desde CSS 

let refresh_btn_correct = document.getElementById('btn_correct');
refresh_btn_correct.addEventListener('click',
 () => {
            location.reload();
});
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
