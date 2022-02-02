import validator from './validator.js';

//console.log(validator);
let btnVerify=document.getElementById('btnVerify');
const CardNumber=document.getElementById('CardNumber');
let divVerified = document.getElementById('divVerified');

btnVerify.addEventListener('click',()=>{
    //obtener el Numero de Tarjeta e insertarlo en un div del index.html
    divVerified.innerHTML=validator.isValid(CardNumber.value);
    
    validator.maskify();
});
