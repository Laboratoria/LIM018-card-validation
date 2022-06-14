import validator from './validator.js';

// console.log(validator.isValid("4083952015263")) 

// Obtener los datos de los inputs

const nombres = document.querySelector("#nombre");
const numero = document.querySelector("#numero");
const fecha = document.querySelector("#fecha");
const cvv = document.querySelector("#cvv");

const pago = document.querySelector("#pago");

pago.addEventListener('click', () => {
  
   if(nombres.value.length === 0 ){
     alert('Debe ingresar su nombre!')
     return;
   } 

   if(numero.value.length === 0){
     alert('Ingrese su numero de tarjeta!')
     return;
   }

   if(fecha.value.length === 0){
     alert('Ingrese su fecha!')
     return;
   }

   if(cvv.value.length !== 3){
     alert('CVV Invalido!')
     cvv.value = ''
     return;
   }
//argumento de la funcion isValid
  const validar = validator.isValid(numero.value);
  
   if(validar) {
     const tarjetamaskify = validator.maskify(numero.value);
     alert(`Pago procesado! \n${tarjetamaskify}`)
     //programar aqui modificacion input//
     document.getElementById("numero").value = tarjetamaskify; 
     console.log (document.getElementById("numero").value)

   }
   else{
     alert('Tarjeta no valida!')
   }


})






































