import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TextInput, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

import firebase from '../config/firebase';
import * as GoogleSignIn from 'expo-google-sign-in'
import * as Facebook from 'expo-facebook';

import styles from '../components/TextInputIcon';
import Separator from '../components/Separator';
import Resources from './../config/resources/resources';

import base from './../constants/styles/Styles';

const Stack = createStackNavigator();

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: '', error: '', auth: false, showPassword: true }
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
        this.onLoginSuccess.bind(this)
      }
    } catch ({ message }) {
      this.onLoginFailure.bind(this)(message);
    }
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, auth: false });
    Alert.alert(errorMessage);
  }

  onLoginSuccess() {
    this.props.navigation.navigate('Home')
  }

  showPasswordInTheInput(){
    if(this.state.showPassword){
      this.setState({showPassword: false})
    }else{
      this.setState({showPassword: true})
    }
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

      <View>
        <Icon name={'user'} size={28} style={styles.inputIcon}/>
        <TextInput
          placeholder={Resources.LOGIN_EMAIL}
          placeholderTextColor="#adadad"
          underlineColorAndroid='transparent'
          textContentType={'emailAddress'}
          secureTextEntry={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </View>
      <View>
        <Icon name={'lock'} size={28} style={styles.inputIcon}/>
        <TextInput
          placeholder={Resources.LOGIN_PASSWORD}
          placeholderTextColor="#adadad"
          underlineColorAndroid='transparent'
          textContentType={'none'}
          secureTextEntry={this.state.showPassword}
          showPassword={false}
          style={styles.input}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Button
          icon="eye"
          mode="contained"
          style={styles.inputIconRight}
          labelStyle={{marginRight: 0}}
          onPress={() => this.showPasswordInTheInput(this)}
        />
      </View>
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
      <SafeAreaView style={base.container}>
        {this.renderCurrentState()}
      </SafeAreaView>
    );
  }
}
