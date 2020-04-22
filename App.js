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

import TextInputIcon from './components/TextInputIcon';
import Separator from './components/Separator';

import * as LoginConstants from './sources/constants/LoginConstants';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'
import logo from './images/CAD_Logo.svg';

export default function App() {

  Font.loadAsync({
      'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
      'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  const STYLES = LoginConstants.STYLES;

  return (
    <View style={STYLES.body}>
      <View style={STYLES.container}>
        <Image source={logo} style={STYLES.logo}/>
        <View style={STYLES.card}>
          <TextInputIcon
          icon={'user'}
          placeholder={'Correo Electronico'}
          textContentType={'emailAddress'}
          secureTextEntry={false}/>
          <TextInputIcon
          icon={'lock'}
          placeholder={'Contraseña'}
          textContentType={'none'}
          secureTextEntry={true}/>
          <Button
            title="Iniciar Sesión"
            style={STYLES.button}
            color="#1b5b9b"
            onPress={() => checkData()}
          />
          <Separator />
          <Button
            title="Registrarse"
            style={STYLES.button}
            color="#1b5b9b"
            onPress={() => Alert.alert('Botón para registrarse')}
          />
        </View>
      </View>
    </View>
  );
}
