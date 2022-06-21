import validator from "./validator.js";
//secciones 
const reservation_s = document.getElementById("reservation_s");
const form_s = document.getElementById("form_s");
const pay_s = document.getElementById("pay_s");
const end_s =document.getElementById("end_s");
//botones para los eventos

const btn_yes = document.getElementById("btn_yes");
const btn_validator = document.getElementById("input_validation");
const btn_pay = document.getElementById("btn_pay");
const btn_end = document.getElementById("btn_end");
//inputs
const numberCard = document.getElementById("numberCard");
const ccv = document.getElementById("ccv");
//mensajes para el usuario
const message = document.getElementById("message");

// ocultar las secciones que no necesito mostrar al inicio
 form_s.style.display= "none";
 pay_s.style.display= "none";
 end_s.style.display= "none";
 
 //evento que me permite pasar a la siguiente vista
btn_yes.addEventListener("click", () => {
  reservation_s.style.display = "none";
  form_s.style.display="inline-flex";
 }

);
//evento que me permite pasar a validar el número de tarjeta
btn_validator.addEventListener("click", (event) => {
  event.preventDefault()
  let inputNumberCard = numberCard.value;
  let muskify= validator.maskify(inputNumberCard);
  
  if (inputNumberCard === ""){
      message.innerText = "Ingrese un número de tarjeta";
     //¿Por qué estoy usando inner.Text y no inner.HTML?
  } 
  else {
   if (validator.isValid(inputNumberCard)){
   document.getElementById("numberCard").value = muskify;

    message.innerHTML = "Tarjeta válida"; 
  } else {
    
    message.innerText = "Tarjeta inválida";
   
  }
  }
})

//Evento para hacer el pago
btn_pay.addEventListener("click",(event)=> {
  event.preventDefault();
  let ipt_c = ccv.value;
  if(ipt_c!=""){
    form_s.style.display= "none";
    reservation_s.style.display= "none";
    end_s.style.display= "none";
    pay_s.style.display="inline-flex";
    
  } else{
    message.innerHTML= "Complete todos los campos vacíos";
  }
  

})

//evento para finalizar
btn_end.addEventListener("click",(event)=> {
  event.preventDefault();
  
    form_s.style.display= "none";
    pay_s.style.display= "none";
    reservation_s.style.display= "none";
    end_s.style.display= "inline-flex";
})

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
