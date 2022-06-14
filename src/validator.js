const validator = {
  isValid: (n) => {
    let digits = n.split("").map(Number);

    //console.log(typeof digits)
    // condition
    if (digits.length > 10) {
      //double position par
      digits = digits
        .reverse()
        .map((digit, i) => (i % 2 === 1 ? digit * 2 : digit));
    }
    //fix the double digits
    digits = digits.map((digit) => (digit > 9 ? digit - 9 : digit));
    //console.log(digits)
    //all digits
    const sum = digits.reduce((acumulation, digit) => (acumulation += digit));
    //console.log(sum);
    return sum % 10 === 0;
  },
  maskify: (n) => {
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
