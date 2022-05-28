//import validator from './validator.js';

//console.log(validator);


// Es el numero de la tarjeta
const num = '4568259713645695';

const validarTarjeta = numCard => {
	// Variables que usaremos
  let array = [], aux = 1, total = 0, validar = false, inicio = 0, salida = '';
      
  const resultado = {
    validar: validar,
    salida: salida
  }
  
	// Validamos que el numero sea exactamente 16 caracteres   
  if(numCard.length !== 16) return resultado;
  
	// Recibimos el numero de la tarjeta en un String luego lo convertimos a un arreglo y lo invertimos 
  array = num.split('').reverse();
  
	// Usamos la funcion map para crear un nuevo arreglo y recorrer el arreglo principal para convertir los elementos a valor numerico
  array = array.map( e => parseInt(e));

	// Multiplicamos por 2 a los numeros que se encuentre en las posiciones pares del arreglo y si el valor al multiplicar fuera mayor o igual a 10 entonces sumar sus digitos   
  array = array.map( e => {
    if(aux % 2 === 0){
      e = e * 2;
      if(e >= 10){
        const newArray = e.toString().split('');
        e = parseInt(newArray[0]) + parseInt(newArray[1]);
      }
    }
    aux++;
    return e;
  });
  
	// Sumar el total de todos los numeros de arreglo
  array.forEach( e => total += e);
  
	// Validar si a la suma total su modulo de 10 es igual sera valido  
  validar = total % 10 === 0? true : false; 
  resultado.validar = validar;
  
	// Imprimir solos los ultimos 4 digitos de la tarjeta
    array= num.split("");
  array.forEach( e => {
    if(array.length - 4 > inicio){
      salida += '*';
    }
    else{
      salida += e;
    }
    inicio++;
  });
  resultado.salida = salida;
  
  return resultado;
}
const salida = validarTarjeta(num);
console.log(salida);
