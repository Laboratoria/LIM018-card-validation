const validator = {
  
  isValid : (n)=> {
    let digits = n.toString().split('').map(Number);
    //console.log(typeof digits)
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
    let digits= Array.from(n);
    digits.map((acc, i)=>i<digits.length-4?digits[i]='#':digits)

      //for (let i = 0; i< digits.length-4;i++){
      //digits[i] = '#';
       
    //}
    return digits.toString().replace(/,/g,"");
        

  },
  
  };


export default validator;

