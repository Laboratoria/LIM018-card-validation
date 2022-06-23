const validator = {
  isValid: (creditCardNumber)=>{
 let strCreditcard =creditCardNumber.split("").reverse().join("");
let arrCreditcard = Array.from(strCreditcard);
let totalPar = 0;
let totalimPar = 0;

  for(var i=0; i < arrCreditcard.length; i++){
    if(i%2 ===1){
      if(arrCreditcard[i]*2>9){
        totalPar += arrCreditcard[i]*2-9;
      }
      else {
        totalPar += arrCreditcard[i]*2;
      }
    }
    else {
      totalimPar += parseInt(arrCreditcard[i]);
      
    }
  
  }
 
  if ((totalPar + totalimPar)%10 ===0){
   return true;
  }
  else{
    return false; 
  }
  },

  maskify:(valorCreditcard)=>{
    let mascara = valorCreditcard.slice(0,-4).replace(/\w/g,"#");
    let numeroslibres=valorCreditcard.slice(-4);
    let maskCreditcard=mascara + numeroslibres;
  
    return maskCreditcard ;
  }
  
};

export default validator;
