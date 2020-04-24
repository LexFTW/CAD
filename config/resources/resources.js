import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import Es_ES from './es_ES';
import En_US from './en_US';
import Ca_ES from './ca_ES';

const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

switch (deviceLanguage) {
  case 'en_US':
    var Resources = En_US;
    break;
  case 'es_ES':
    var Resources = Es_ES;
    break;
  case 'ca_ES':
    var Resources = Ca_ES;
    break;
  default:
    var Resources = En_US;
}

export default Resources;
