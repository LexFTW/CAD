let value = 0;

export default {
  connectionToNFCDevice(){
    return true;
  },
  failedConnectionToNFCDevice(){
    throw 'La conexión al dispositivo a fallado, revisa que este todo bien';
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
    if(value != null || value != undefined || meal != null || meal != undefined || carbohydrats != null || carbohydrats != undefined){
      return true;
    }

    throw 'No pueden haber valores sin definir, compruebe que ha seguido los pasos correctamente.';
  },
  failedToSaveInDatabaseTimeOut(value, meal, carbohydrats){
    throw 'El tiempo de espera se ha agotado, pruebe otra vez y revise su conexión a Internet';
  }
}
