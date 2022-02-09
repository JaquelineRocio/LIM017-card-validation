const validator = {
  isValid(CardNumber){
    if(CardNumber=='')
    {
      alert("Debe ingresar un numero")
    }
    else
    {
    //Convertiendo CardNumber en un array de numeros e invertiendo orden
    let Numbers = Array.from(CardNumber, Number).reverse();
    //Multiplicar por dos las posiciones pares y sumar los numeros mayores o igual a 10
    let BigNumber = 0;
    let total = 0;
    for(let i=0; i<Numbers.length; i++)
    {
      if((i+1)%2 == 0 ){
        BigNumber = Numbers[i]*2;
        
        if(BigNumber >= 10)
          {
            let Nums = Array.from( String(BigNumber), Number);
            let sum=0;
            for(let num of Nums){
                sum=sum+num;
            }
            Numbers[i]=sum;
          }
        else
        {
          Numbers[i]=BigNumber;
        }
          
      }
    }
    //Sumando los elementos de array Numbers
    total = Numbers.reduce((a, b) => a + b, 0);
    //validando la tarjeta
    return total%10==0 ?  true : false;
  }
  },
  maskify(CardNumber){
    //Obtener el largo del card number
    let lengthCN = CardNumber.length;
    //Se hace una copia de una parte del string de acuerdo a su longitud
    let last4Numbers = CardNumber.slice(lengthCN-4,lengthCN+1);
    //Crear una nuevo string para almacenar la cantidad de X de acuerdo al length 
    let xString='';
    for(let i=0; i< lengthCN-4; i++){
      xString=xString+'#';
    }
    //concatenar ambos strings
    let hideCardNumber = xString.concat(last4Numbers);
    return hideCardNumber ;
  }
};


export default validator;
