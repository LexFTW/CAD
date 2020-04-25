import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';

import firebase from '../config/firebase';
import * as GoogleSignIn from 'expo-google-sign-in'
import * as Facebook from 'expo-facebook';

import TextInputIcon from '../components/TextInputIcon';
import Separator from '../components/Separator';
import Resources from './../config/resources/resources';

import styles from './../constants/styles/Styles';

const Stack = createStackNavigator();

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {email: 'test@test.com', password: 'Asdqwe123', error: '', auth: false }
  }

  async signInWithEmail() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak Password!');
          } else {
              this.onLoginFailure.bind(this)(errorMessage);
          }
      });
  }

  async signInWithFacebook() {
    try {
    await Facebook.initializeAsync('666200950884855');
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
  }

  async signInWithGoogle() {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      const data = await GoogleSignIn.GoogleAuthentication.prototype.toJSON();
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
        const googleProfileData = await firebase.auth().signInWithCredential(credential);
        this.onLoginSuccess.bind(this);
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, auth: false });
  }

  onLoginSuccess() {
    this.props.navigation.navigate('Home')
  }

  renderCurrentState(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate('Home');
        }
     });

    if(this.state.auth){
        this.props.navigation.navigate('Home');
    }

    return <View>
      <Image source={require('../assets/images/splash.png')} style={{width: 250, height: 200, marginBottom: 15}} />
      <TextInputIcon
        icon={'user'}
        placeholder={Resources.LOGIN_EMAIL}
        textContentType={'emailAddress'}
        secureTextEntry={false}
        showPassword={false}
        defaultValue={'test@test.com'}
        value={'test@test.com'}
      />
      <TextInputIcon
        icon={'lock'}
        placeholder={Resources.LOGIN_PASSWORD}
        textContentType={'none'}
        secureTextEntry={true}
        showPassword={true}
        defaultValue={'Asdqwe123'}
        value={'Asdqwe123'}
      />
      <Separator />
      <Button
        mode="contained"
        style={{backgroundColor: '#2069b2', borderRadius: 0, marginBottom: 5}}
        onPress={() => this.signInWithEmail()}
      >
        {Resources.LOGIN_SIGNIN}
      </Button>
      <Button
        icon="google"
        mode="contained"
        style={{backgroundColor: '#DB4437', borderRadius: 0, marginBottom: 5}}
        onPress={() => this.signInWithGoogle()}
        >
          {Resources.LOGIN_SIGNIN_GOOGLE}
      </Button>
      <Button
        icon="facebook"
        mode="contained"
        style={{backgroundColor: '#3b5998', borderRadius: 0}}
        onPress={() => this.signInWithFacebook()}
        >
          {Resources.LOGIN_SIGNIN_FACEBOOK}
      </Button>
      <Separator />
      <Button mode="contained" style={{backgroundColor: '#2069b2', borderRadius: 0,}}>
        {Resources.LOGIN_REGISTER}
      </Button>
    </View>

  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        {this.renderCurrentState()}
      </SafeAreaView>
    );
  }
}
