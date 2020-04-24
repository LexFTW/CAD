import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, StatusBar } from 'react-native';
import Resources from './../config/resources/resources';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ReaderScreen from '../screens/ReaderScreen';
import UserScreen from '../screens/UserScreen';
import TabBarIconFoundation from '../components/TabBarIconFoundation';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';
import TabBarIconIonicons from '../components/TabBarIconIonicons';

const Tab = createBottomTabNavigator();

export default class HomeScreen extends React.Component {

  render(){
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#ccc',
          }}
        >
          <Tab.Screen
            name="Reader"
            component={ReaderScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIconIonicons focused={focused} name="md-wifi" />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={UserScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIconFontAwesome size={24} focused={focused} name="user" />,
            }}
          />
        </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
