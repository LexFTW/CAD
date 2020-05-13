import React, {Component} from 'react';

import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TabBarIconFoundation from '../components/TabBarIconFoundation';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';
import TabBarIconIonicons from '../components/TabBarIconIonicons';

import Resources from './../config/resources/resources';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReaderScreen from '../screens/ReaderScreen';
import ReaderScreenResult from '../screens/ReaderScreenResult';
import UserScreen from '../screens/UserScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {

  render(){
    return (
        <Tab.Navigator
          initialRouteName='Reader'
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#72a2d3',
          }}
        >
          <Tab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIconFontAwesome size={24} focused={focused} name="heartbeat" />,
            }}
          />
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
