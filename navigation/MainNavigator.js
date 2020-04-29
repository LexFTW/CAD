import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabBarIconFoundation from '../components/TabBarIconFoundation';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';
import TabBarIconIonicons from '../components/TabBarIconIonicons';

import LoginScreen from '../screens/LoginScreen';
import MedicationScreen from '../screens/MedicationScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function MainNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
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
        <Stack.Screen name="Medication" component={MedicationScreen} />
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
    case 'Medication':
      return 'Medication';
  }
}
