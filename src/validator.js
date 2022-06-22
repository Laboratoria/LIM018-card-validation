const validator = {
  isValid: (n) => {
    let digits = n.split("").map(Number);

    //console.log(typeof digits)
    //condición general
    if (digits.length > 10) {
      //duplicar posición par
      digits = digits
        .reverse()
        .map((digit, i) => (i % 2 === 1 ? digit * 2 : digit));
    }
    //sumar los dígitos duplicados con 2 dígitos
    digits = digits.map((digit) => (digit > 9 ? digit - 9 : digit));
    //console.log(digits)
    //sumar todos los dígitos
    const sum = digits.reduce((acumulation, digit) => (acumulation += digit));
    //console.log(sum);
    return sum % 10 === 0;
  },
  maskify: (n) => {
    //convierto un string en array
    let digits = Array.from(n);

    digits.map((acc, i) =>
      i < digits.length - 4 ? (digits[i] = "#") : digits
    );

    //for (let i = 0; i< digits.length-4;i++){
    //digits[i] = '#';

    //}
    return digits.toString().replace(/,/g, "");
  },
};
export default validator;
