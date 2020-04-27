import 'react-native';
import LoginScreen from '../screens/LoginScreen';

var log = new LoginScreen();

log.setState({email: "test@test.com"});
log.setState({password: "Asdqwe123"});

const login = jest.fn(log.state.email, log.state.password);

// Correo correcto
test('Correct Mail', () => {
  expect(login(log.state.email, log.state.password)).toBe(login("test@test.com", "Asdqwe123"));
  expect(login).toHaveBeenCalledTimes(2);
  expect(login).toHaveBeenCalledWith("test@test.com", "Asdqwe123");
});

// Correo vacio
test('Empty Test', () => {
  expect(login("", "")).toBe(login(log.state.email, log.state.password));
});

// Correo no existente
test('Wrong Test', () => {
  expect(login("t@t.com", log.state.password)).toBe(login(log.state.email, log.state.password));
});

// Correo bien escrito
test('Correct syntax Test', () => {
  expect("test@test.com").toContain("@");
  expect("test@test.com").toContain(".");

  expect("test@testcom").toContain("@");
  expect("testtest.com").toContain(".");
});

// Correo mal escrito
function validateEmail() {
  const expression = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  if (!expression.test(String("testtest.com").toLowerCase())) {
    throw new SyntaxError('error, correo incompleto');
  }
}

test('Incorrect syntax Test', () => {
  function validate() {
    validateEmail();
  }

  expect(validate).toThrowError(SyntaxError);
});

// Error en el metodo registrar con Correo
test('Throw email error', () => {
  expect(log.funcSing).toEqual({"_40": 0, "_55": null, "_65": 0, "_72": null});
});