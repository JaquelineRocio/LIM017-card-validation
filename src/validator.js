const validator = {
  isValid(CardNumber){
    //Convertiendo CardNumber en un array de numeros e invertiendo orden
    let Numbers = Array.from(CardNumber, Number).reverse();
    //Multiplicar por dos las posiciones pares y sumar los numeros mayores o igual a 10
    let BigNumber = 0;
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

    return Numbers;

  },
  maskify(){
    return String;
  }
};


export default validator;
