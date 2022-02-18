import validator from './validator.js';
const inpCN = document.getElementById('inpCardNumber');

//objeto de marcas
const issuers = [
{
    name: 'JTBC',
    value: 1800},
{
    name: 'Diners Club / enRoute',
    value: 2014},
{
  name: 'JBC',
  value: 2131
},
{
name:  'Diners Club / enRoute',
value: 2149
},
{
   name: 'Diners Club / Carte Blanche',
   value: [300, 301, 302, 303, 304, 305]
},
  {
    name: 'Diners Club / International',
    value: 36
  },
  {
    name: 'Diners Club / Carte Blanche',
    value: 38
  },
  {
    name: 'JCB',
    value: [31,32,33,35,39]
  },
  
{
    name: 'visa',
    value: 4},
{
    name: 'mastercard',
    value: [51, 52, 53, 54, 55]},
{
    name: 'americanexpress',
    value: 34},
  {
    name: 'Discover',
    value: 6011
  }
];
const pMarca= document.getElementById('pMarca');
    inpCN.addEventListener('keyup', ()=>{
    let isFind = validator.isIssuerValid(issuers, inpCN.value);
    if(isFind)
      pMarca.innerText = 'La marca es: '+isFind.name;
   
})
let btnBuy = document.getElementById('btnBuy');
let divPay = document.getElementById('payPage');
const divHome =document.getElementById('mainPage');
btnBuy.addEventListener('click',()=>{
    divHome.style.display = 'none';
    divPay.style.display = 'block';
})

//console.log(validator);
let btnVerify=document.getElementById('btnVerify');
let inpCardNumber=document.getElementById('inpCardNumber');
let divVerified = document.getElementById('divVerified');
let div4HideNumbers = document.getElementById('HideNumbers');
btnVerify.addEventListener('click',()=>{

         //obtener el Numero de Tarjeta e insertarlo en un div del index.html
         if(validator.isValid(inpCardNumber.value))
         {
            divVerified.innerHTML= "Numero de tarjeta VALIDO ✅";
            div4HideNumbers.innerHTML = validator.maskify(inpCardNumber.value);
            div4HideNumbers.style.display = 'block';
         }
         else
         {
            divVerified.innerHTML="Numero de tarjeta INVALIDO ❌";
            pMarca.style.display = "none";
         }
   
 
   
});
