const creditCardNumberExample = "1234567890";
const validator = {
  isValid: (creditCardNumber) => {
    const length = creditCardNumber.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
      let currentDigit = parseInt(creditCardNumber[i]);
      if ((i + 1) % 2 == 0) {
        if ((currentDigit = currentDigit * 2) > 9)
          currentDigit = currentDigit - 9;
        count = count + currentDigit;
      }
      return count % 10 === 0;
    }
  },

};
console.log("validar", validator.isValid(creditCardNumberExample));

export default validator;
