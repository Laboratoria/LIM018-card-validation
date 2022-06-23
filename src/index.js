import validator from './validator.js';

let bttninicio = document.getElementById("bttn-inicio");
//let pantalla = document.getElementById("pantalla");
//let pantallaInicio = document.getElementById("pantalla-inicio");
bttninicio.addEventListener("click", (e) =>{
    e.preventDefault();
    
    document.getElementById('pantalla').style.display = 'block';
    document.getElementById('pantalla-inicio').style.display = 'none';


});


let Creditcard =document.getElementById("Creditcard");
let btn = document.getElementById("botonIngresar");
let mensajeFi = document.getElementById("mensajeFinal");
btn.addEventListener("click",(e)=>{
    e.preventDefault();

  if (validator.isValid(Creditcard.value) == true){
    mensajeFi.textContent="¡TU TARJETA ES VALIDA, YA SE ENCUENTRA PROTEGIDA!"
  }
  else {
    mensajeFi.textContent="LO SENTIMOS, TU TARJETA ES INVALIDA. INTENTA NUEVAMENTE"
  }
});

// numero de tarjeta y mascara
let formulario=document.getElementById("formulario-tarjeta");
let numTarjeta =document.getElementById("numeroTarjeta");
let nameUser =document.getElementById("nombreTarjeta");
formulario.Creditcard.addEventListener("keyup", (e) => {
    let valorCreditcard = e.target.value;
let maskCreditcard = validator.maskify(Creditcard.value);

    formulario.Creditcard.value = valorCreditcard.replace(/\s/g, "").replace(/\D/g, "");

    console.log(maskCreditcard);
    numTarjeta.textContent=maskCreditcard;

    if(valorCreditcard == ""){
        numTarjeta.textContent = "#### #### #### ####";
    }

});

//nombre de tarjeta
formulario.inputnombre.addEventListener("keyup", (e) =>{
    let valorInputnombre  = e.target.value;

    formulario.inputnombre.value = valorInputnombre.replace(/\d/g,"");
    nameUser.textContent= valorInputnombre;

    if(valorInputnombre == ""){
        nameUser.textContent = "Cosme Fulanito";
    }
})

let mesExpira = document.querySelector("#tarjeta #expiracion .mes");
let yearExpira = document.querySelector("#tarjeta #expiracion .year");


formulario.selectMes.addEventListener("change", (e) =>{
    mesExpira.textContent = e.target.value;
})

formulario.selectyear.addEventListener("change",(e) => {
    yearExpira.textContent =e.target.value;
})


