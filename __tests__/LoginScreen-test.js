import 'react-native';

const login = jest.fn(x, y);

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