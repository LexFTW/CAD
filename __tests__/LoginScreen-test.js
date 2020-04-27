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

// Correo bacio
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
});

// Correo mal escrito
test('Incorrect syntax Test', () => {
  function syntaxScan() {
    throw new LoginScreen(log.setState({error: "Syntax error"}));
  }

  expect(syntaxScan()).toThrowError(LoginScreen);
});

// Errir en el metodo registrar con Correo
test('Throw email error', () => {
  const loginScreen = new LoginScreen();
  expect(() => loginScreen.signInWithEmail()).toThrow();
})

// Errir en el metodo registrar con Facebook
test('Throw facebook error', () => {
  const loginScreen = new LoginScreen();
  expect(() => loginScreen.signInWithFacebook()).toThrow();
})
