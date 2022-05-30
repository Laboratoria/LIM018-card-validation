const validator = {
  
  isValid : (n)=> {
    let digits = n.toString().split('').map(Number);
      // condition 
    if (digits.length>15){
      
            //double position par
            digits = digits.reverse().map((digit,i)=> i%2===0?digit*2:digit);
            
      //console.log(digits)
    } 
    
    //fix the double digits
    digits = digits.map(digit=> digit>9 ? digit-9: digit);
    //console.log(digits)
    //sume all digits
      const sum= digits.reduce((acumulation,digit)=> acumulation== digit, 0);
    return sum%10===0;
  
    
  },
  maskify : (n)=>{
  let digits = n.toString().split('');
  console.log(digits);
  digits.map((digit,i)=> i<15?digit="#":digit)
    
    
    console.log(digits);
  
    
// recorrer el array con map()
// filtrar con filter()las posiciones 0 al 12 del arreglo
// Reemplazar con replace() con #
// Llegué hasta aquí
  },
  
  };


export default validator;

