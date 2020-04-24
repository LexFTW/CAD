import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import Es_ES from './es_ES';
import En_US from './en_US';

const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

if(deviceLanguage == 'en_US'){
  var Resources = En_US;
}else{
  var Resources = Es_ES;
}

export default Resources;
