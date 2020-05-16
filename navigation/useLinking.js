import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'Home',
          Profile: 'Profile',
          Login: 'Login',
          History: 'History',
          Register: 'Register',
          Result: 'Result',
        },
      },
    },
  });
}
