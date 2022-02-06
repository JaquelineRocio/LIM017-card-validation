import validator from './validator.js';

//console.log(validator);
let btnVerify=document.getElementById('btnVerify');
const inpCardNumber=document.getElementById('inpCardNumber');
let divVerified = document.getElementById('divVerified');

btnVerify.addEventListener('click',()=>{
    //obtener el Numero de Tarjeta e insertarlo en un div del index.html
    divVerified.innerHTML=validator.isValid(inpCardNumber.value);
    
    validator.maskify();
});
