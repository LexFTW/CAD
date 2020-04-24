import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, StatusBar } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const themeStatusBarStyle = colorScheme === 'light' ? 'light-content' : 'dark-content';
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <StatusBar barStyle={themeStatusBarStyle} />
      <Text style={[styles.text, themeTextStyle]}>
        Color scheme: {colorScheme}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#eeeeee',
  },
  darkContainer: {
    backgroundColor: '#242C40',
  },
  lightThemeText: {
    color: '#242C40',
  },
  darkThemeText: {
    color: '#D0D0C0',
  },
});
