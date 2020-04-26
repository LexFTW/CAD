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
    if (/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test("test@test.com")){
      
     } else {
      throw new LoginScreen(log.setState({error: "Syntax error"}));
     }
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