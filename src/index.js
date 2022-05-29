import validator from './validator.js';

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

  const validar = validator.validarCard(numero.value);
  
   if(validar) {
     const tarjetaMask = validator.tarjetaMask(numero.value);
     alert(`Pago procesado! \n${tarjetaMask}`)
   }
   else{
     alert('Tarjeta no valida!')
   }


})
