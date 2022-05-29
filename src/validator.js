const validarCard = (numCard) =>{

  if(isNaN(Number(numCard))) return false;
  
  if(numCard.length !== 16) return false;

  let array = [...numCard].reverse();

  array = array.map( e => Number(e));

  let aux = 1;

  array = array.map( e => {
    if(aux % 2 === 0){
      e = e * 2;
      if(e >= 10){
        e -= 9
      }
    }
    aux++;
    return e;
  })

  let total = 0;
  array.forEach( e => total += e)

  return (total % 10 === 0) ? true : false
}

const tarjetaMask = (numCard) => {
  let array = [...numCard];
  let salida = "";

  let aux = 1;

  for(let a of array){
    if(aux < 13){
      salida += "*";
    }
    else{
      salida += a
    }
    aux++;
  }

  return salida
}

const validator = {
  validarCard,
  tarjetaMask
};

export default validator;
