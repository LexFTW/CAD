import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import LoginScreen from '../screens/LoginScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function MainNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Login':
      return 'Login';
    case 'Home':
      return 'Resume';
    case 'Reader':
      return 'Reader';
    case 'Profile':
      return 'Profile';
    case 'Historial':
      return 'Historial';
    case 'Register':
      return 'Register';
  }
}
