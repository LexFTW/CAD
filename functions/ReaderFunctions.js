let value = 0;

export default {
  connectionToNFCDevice(){
    return true;
  },
  getValueFromNFCDevice(){
    value = Math.floor(Math.random() * (300 - 65)) + 65;

    return value;
  },
  setValueMeal(value){
    if(value >= 0 && value <= 4){
      return true;
    }

    throw 'Formato no válido';
  },
  setValueCarbohydrats(value){
    if(value != null || value != undefined){
      return true;
    }

    throw 'El valor no puede estar vacío.';
  },
  saveInDatabase(value, meal, carbohydrats){
    return true;
  }
}
