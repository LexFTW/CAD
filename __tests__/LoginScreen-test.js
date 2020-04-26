import 'react-native';
import LoginScreen from '../screens/LoginScreen';

const login = jest.fn(x, y);

var log = new LoginScreen();

// Static tests
test('Correct Mail', () => {
  expect(login("test@test.com", "Asdqwe123")).toBe(true);
  expect(login("", "")).toBe(true);
  expect(login).toHaveBeenCalledTimes(2);
  expect(login).toHaveBeenCalledWith(x, y);
});

test('Empty Test', () => {
  expect(login("", "")).toBe(false);
});

test('Wrong Test', () => {
  expect(login("test@test.com", "Asdqwe123")).toBe(false);
});

// Dinamic tests
test('Correct syntax Test', () => {
  expect(log.state.email).toContain("@");
  expect(log.state.email).toContain(".");
});

test('Incorrect syntax Test', () => {
  function syntaxScan() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(log.state.email)){
      
     } else {
      throw new ErrorObject('Syntax error');
     }
  }

  expect(syntaxScan()).toThrowError(ErrorObject);
});

test('Throw email error', () => {
  const loginScreen = new LoginScreen();
  expect(() => loginScreen.signInWithEmail()).toThrow();
})

test('Throw facebook error', () => {
  const loginScreen = new LoginScreen();
  expect(() => loginScreen.signInWithFacebook()).toThrow();
})