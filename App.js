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

import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'
import logo from './images/logo.png';

export default function App() {

  Font.loadAsync({
      'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
      'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  function Separator() {
    return <View style={styles.separator} />;
  }

  function checkData(){
    if(Platform.OS === 'web'){
      alert('Iniciando Sesión')
    }else{
      Alert.alert('Iniciando Sesión')
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <View style={styles.card}>
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
            style={styles.button}
            color="#1b5b9b"
            onPress={() => checkData()}
          />
          <Separator />
          <Button
            title="Registrarse"
            style={styles.button}
            color="#1b5b9b"
            onPress={() => Alert.alert('Botón para registrarse')}
          />
        </View>
      </View>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3686db',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    ...Platform.select({
      web: {
        width: screenWidth * 0.3,
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

  separator: {
    marginVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});
