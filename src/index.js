import validator from './validator.js';

//console.log(validator);
let btnVerify=document.getElementById('btnVerify');
let inpCardNumber=document.getElementById('inpCardNumber');
let divVerified = document.getElementById('divVerified');
let div4HideNumbers = document.getElementById('HideNumbers');
btnVerify.addEventListener('click',()=>{
    //obtener el Numero de Tarjeta e insertarlo en un div del index.html
    divVerified.innerHTML=validator.isValid(inpCardNumber.value);
    div4HideNumbers.innerHTML = validator.maskify(inpCardNumber.value);
    div4HideNumbers.style.display = 'block';
    
});
