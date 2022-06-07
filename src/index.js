import validator from './validator.js';
let title = document.getElementById("title");
let reservation = document.getElementById("reservation");
let correct = document.getElementById("correct");
let incorrect = document.getElementById("incorrect");
let btn_yes = document.getElementById("btn_yes");
let form_f = document.getElementById("form_f")
let form_s = document.getElementById("form_s")
let input_validation = document.getElementById("input_validation");
let btn_correct = document.getElementById("btn_correct");
let btn_incorrect = document.getElementById("btn_incorrect");

//window.addEventListener("load", () => {
    //console.log("Todos los recursos terminaron de cargar!")
  //  form_s.style.display= "none";
  //  correct.style.display= "none";
  //  incorrect.style.display="none";
//});

btn_yes.addEventListener(("click"), () => {
    //console.log("hola");
    title.style.display="none";
    reservation.style.display= "none";
    correct.style.display= "none";
    incorrect.style.display="none";
    //console.log(form_f);
    reservation.textContent = form_s;
    
 });
//parent.getElementByTagName();
//parent.getElementByClassName();
//document.querySelector();
//document.querySelectorAll();
//validator.isValid('4083952015263');
//validator.isValid('79927398713');
//validator.isValid('1234567890');
//
//validator.maskify('4556364607935616');
//validator.maskify('1');
//validator.maskify("helloworld");
//validator.isValid()
//validator.maskify('4083952015263');
//validator.isValid('4083952015263');
//console.log(validator);
//let ccv= document.getElementById('ccv')



