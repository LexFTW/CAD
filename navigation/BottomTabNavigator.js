import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIconFoundation from '../components/TabBarIconFoundation';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';
import TabBarIconIonicons from '../components/TabBarIconIonicons';

import HomeScreen from '../screens/HomeScreen';
import ReaderScreen from '../screens/ReaderScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import HistorialScreen from '../screens/HistorialScreen';
import SingUpScreen from '../screens/SingUpScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIconFoundation focused={focused} name="graph-pie" />,
        }}
      />
      <BottomTab.Screen
        name="Historial"
        component={HistorialScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIconFontAwesome focused={focused} size={24} name="heartbeat" />,
        }}
      />
      <BottomTab.Screen
        name="Reader"
        component={ReaderScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIconIonicons focused={focused} name="md-wifi" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIconFontAwesome focused={focused} size={24} name="user" />,
        }}
      />
    </BottomTab.Navigator>
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
    case 'SingUp':
      return 'SingUp';
  }
}
