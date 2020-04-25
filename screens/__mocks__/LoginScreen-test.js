import * as React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import LoginScreen from '../LoginScreen';

const mockLoginScreenFile = jest.fn();

jest.mock('../LoginScreen', () => {
  return jest.fn().mockImplementation(() => {
    return {loginFile: mockLoginScreenFile};
  });
});

jest.mock('../LoginScreen');

// Correcto
describe('Correct LoginScreen', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders the root without loading screen`, () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Error
describe('LoginScreen throws an error', () => {
  beforeAll(() => {
    LoginScreen.mockImplementation(() => {
      return {
        loginFile: () => {
          throw new Error('Test error');
        },
      };
    });
  });

  it('Should throw an error when calling playSomethingCool', () => {
    const loginScreen = new LoginScreen();
    expect(() => loginScreen.playSomethingCool()).toThrow();
  });
});
