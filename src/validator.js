const validator = {
  isValid(CardNumber){
    //Convertiendo CardNumber en un array de numeros
    let Numbers = Array.from(CardNumber, Number);
    return Numbers;

  },
  maskify(){
    return String;
  }
};


export default validator;
