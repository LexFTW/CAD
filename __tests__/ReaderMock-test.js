import reader from './../functions/ReaderFunctions';

let value = 0;
let meal = 0;
let carbohydrats = 0;

test('Comprobación de la conexion al Dispositivo NFC', () => {
  expect(reader.connectionToNFCDevice()).toBe(true);
});

test('Fallo de la conexión al Dispositivo NFC', () => {
  expect(() => reader.failedConnectionToNFCDevice().toThrow('La conexión al dispositivo a fallado, revisa que este todo bien'))
})

test('Obtención del dato desde el Dispositivo', () => {
  var value = reader.getValueFromNFCDevice();

  expect(value).toBeGreaterThan(0);
});

test('Guardado el tipo de comida seleccionada (Happy Path)', () => {
  var meal = 1;

  expect(reader.setValueMeal(meal)).toBe(true);
});

test('Guardado el tipo de comida seleccionada (Bad Path)', () => {
  var meal = undefined;

  expect(() => reader.setValueMeal(meal)).toThrow('Formato no válido');
});

test('Guardando el valor númerico de carbohidratos (Happy Path)', () => {
  var carbohydrats = 140;

  expect(reader.setValueCarbohydrats(carbohydrats)).toBe(true);
});

test('Guardando el valor númerico de carbohidratos (Bad Path)', () => {
  var carbohydrats = undefined;

  expect(() => reader.setValueCarbohydrats(carbohydrats)).toThrow('El valor no puede estar vacío.');
});

test('Guardando los valores finales', () => {
  beforeEach(() => {
    value = 150;
    meal = 1;
    carbohydrats = 140;
  });

  expect(reader.saveInDatabase(value, meal, carbohydrats)).toBe(true);
});

test('Error al guardado de los valores finales por valores en null', () => {
  expect(() => reader.saveInDatabase(null, null, null)).toThrow('No pueden haber valores sin definir, compruebe que ha seguido los pasos correctamente.');
});

test('Error al guardado de los valores finales por tiempo de espera', () => {
  beforeEach(() => {
    value = 150;
    meal = 1;
    carbohydrats = 140;
  });

  expect(() => reader.failedToSaveInDatabaseTimeOut(value, meal, carbohydrats)).toThrow('El tiempo de espera se ha agotado, pruebe otra vez y revise su conexión a Internet');
});
