import validator from './validator.js';
const inpCN = document.getElementById('inpCardNumber');

//objeto de marcas
const issuers = [
{
    name: 'JTBC',
    value: 1800,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/JTBC_logo.svg/300px-JTBC_logo.svg.png'
   
},
{
    name: 'Diners Club / enRoute',
    value: 2014,
    img: 'img/diners_club_.png'
},
{
  name: 'JBC',
  value: 2131,
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/300px-JCB_logo.svg.png'
},
{
name:  'Diners Club / enRoute',
value: 2149,
img: 'img/diners_club_.png'
},
{
   name: 'Diners Club / Carte Blanche',
   value: [300, 301, 302, 303, 304, 305],
   img: 'img/diners_club_.png'
},
  {
    name: 'Diners Club / International',
    value: 36,
    img: 'img/diners_club_.png'
  },
  {
    name: 'Diners Club / Carte Blanche',
    value: 38,
    img: 'img/diners_club_.png'
  },
  {
    name: 'JCB',
    value: [31,32,33,35,39],
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/300px-JCB_logo.svg.png'
  },
  
{
    name: 'visa',
    value: 4,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/300px-Visa.svg.png'},
{
    name: 'mastercard',
    value: [51, 52, 53, 54, 55],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/300px-Mastercard_2019_logo.svg.png'
},
{
    name: 'americanexpress',
    value: 34,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/225px-American_Express_logo_%282018%29.svg.png'
},
  {
    name: 'Discover',
    value: 6011,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/263px-Discover_Card_logo.svg.png'
  }
];
const divGetIssuer= document.getElementById('divGetIssuer');
let newImg = document.createElement("img");
let antes = document.getElementById('antes');
    inpCN.addEventListener('keyup', ()=>{
    let isFind = validator.getIssuerOne(issuers, inpCN.value);
    issuerStyle(isFind);
    
   
})
function issuerStyle(find){
  if(find)
  { 
      newImg.classList.add('issuerDesign');
    newImg.src = find.img;
    divGetIssuer.insertBefore(newImg,antes);
    antes.innerText = "";
    
  }
  else{
    newImg.src='https://programacion.net/files/article/20160819020822_image-not-found.png';
    if(inpCN.value=='')
        antes.innerText = '';
    else
       antes.innerText = "Not Found";
    
  }
}
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

let userInput=document.getElementById('userInput');

btnVerify.addEventListener('click',()=>{

         //obtener el Numero de Tarjeta e insertarlo en un div del index.html
         if(validator.isValid(inpCardNumber.value))
         {
            divVerified.innerHTML= "Numero de tarjeta VALIDO ✅";
            userInput.innerHTML = validator.maskify(inpCardNumber.value);
            userInput.classList.add('userCardNumber');
            let found=validator.getIssuerSecond(inpCardNumber.value,issuers);
            issuerStyle(found);
         }
         else
         {
            divVerified.innerHTML="Numero de tarjeta INVALIDO ❌";
            divGetIssuer.style.display = "none";
         }
   
 
   
});
