const validator = {

  isValid:function(creditCardNumber){
    // obtener la inversa del numero indicado
    const numReverse= creditCardNumber.split("").reverse();
    const newnumReverse=[];

for (let i=0; i<numReverse.length; i++){
  //validamos que el numero sea par 
  if(i%2!=0){
    let multiplication=numReverse[i]*2;
    if (multiplication>9){
      //va pasar como caracter de texto 
      let convertString=multiplication.toString();

      //ahora convertimos a un numero y sumamos
      let result=parseInt(convertString.charAt(0))+parseInt(convertString.charAt(1));
      newnumReverse.push(result);
    }
    else{
      newnumReverse.push(multiplication);
    }
  }else{
    newnumReverse.push(numReverse[i]);
  }
}
let addition=0;
for (let i=0; i<newnumReverse.length; i++){
  addition=addition+parseInt(newnumReverse[i]);
}
if (addition%10==0){
  return true;
}else{
  return false;
}
  }, 

maskify:function(creditCardNumber){
  let four = creditCardNumber.slice(0,creditCardNumber.length-4);
  let Array=[];
  for (let j=0; j<four.length; i++){
    Array.push("#");
  }
  let textocomplete=Array.join("")+creditCardNumber.slice(-4);
  return textocomplete;
}
}
export default validator; 