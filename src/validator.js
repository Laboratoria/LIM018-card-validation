const validator = {
  isValid: (creditCardNumber) => {
    const reverseCardNumber = creditCardNumber.split("").reverse();
    console.log(reverseCardNumber);

    let posicionPares = reverseCardNumber.filter(
      (elemento, index) => index % 2 != 0 // :) Posicíon par --> Indice impar
    );
    console.log(posicionPares);

    let posicionImpares = reverseCardNumber.filter(
      (elemento, index) => index % 2 == 0 // Poscicón impar --> índice par
    ); // indice impar tiene las posciones par. Aquellas que serán multiplicados por 2.  )
    console.log(posicionImpares);

    let sumaPosPares = 0;
    let sumaPosImpares = 0;
    let devuelve;

    //posiciones pares
    for (let i = 0; i < posicionPares.length; i++) {
      let convierteInt = parseInt(posicionPares[i]);
      let segundopaso = convierteInt * 2;
      console.log(segundopaso);

      if (segundopaso >= 10) {
        segundopaso = segundopaso - 9;
      }
      sumaPosPares += segundopaso;
    }
    console.log(sumaPosPares);

    //Posiciones impares
    for (let i = 0; i < posicionImpares.length; i++) {
      sumaPosImpares += parseInt(posicionImpares[i]);
    }
    console.log(sumaPosImpares);

    let totalSuma = 0;
    totalSuma = sumaPosPares + sumaPosImpares;

    if (totalSuma % 10 == 0) {
      devuelve = true;
    } else {
      devuelve = false;
    }

    return devuelve;
  },

  maskify: (creditCardNumber) => {
    let reemplazo = "";
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      reemplazo += "#";
    }

    const cuatroDigitos = creditCardNumber.substring(
      creditCardNumber.length - 4,
      creditCardNumber.length
    );
    //const cuatroDigitos = creditCardNumber.slice(-4, 0);
    return reemplazo + cuatroDigitos;
  },
};

export default validator;
