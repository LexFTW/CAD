import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Dimensions,
  Platform,
  Alert
} from 'react-native';

export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
export const STYLES = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3686db',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    ...Platform.select({
      web: {
        width: SCREEN_WIDTH * 0.3,
        paddingTop: 150,
        paddingBottom: 150
      }
    }),
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5
  },

  logo: {
    width: 250,
    height: 250,
  },

  button: {
    textTransform: 'lowercase',
    borderRadius: 0
  },

});
