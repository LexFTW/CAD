import React, {Component} from 'react';

import { View, Image, Text, StyleSheet, TextInput, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Separator from '../components/Separator';

import Resources from './../config/resources/resources';

import { createStackNavigator } from '@react-navigation/stack';

import firebase from '../config/firebase';
import * as Facebook from 'expo-facebook';

import styles from '../components/TextInputIcon';
import base from './../constants/styles/Styles';

import { signInWithEmailAndPassword } from '../functions/LoginWithEmailAndPassword';
import { signInWithFacebook } from '../functions/LoginWithFacebook';

import TextInputLoginEmail from '../components/TextInputLoginEmail';
import TextInputLoginPass from '../components/TextInputLoginPass';

const Stack = createStackNavigator();

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: '', error: '', auth: false, showPassword: true }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user || this.state.auth) {
          this.props.navigation.navigate('Home');
        }
     });
  }

  onSingUp() {
    this.props.navigation.navigate('Register')
  }

  async setStateFromInput(name, value) {
    this.setState({[name]: value});
  }

  render() {
    return(
      <SafeAreaView style={base.container}>
        <View>
          <Image source={require('../assets/images/splash.png')} style={base.logo} />
          <TextInputLoginEmail iconName={'user'} resources={Resources.LOGIN_EMAIL} textContentType={'emailAddress'} label={'email'} value={this.state.email} onChange={this.setStateFromInput.bind(this)} />
          <TextInputLoginPass iconName={'lock'} resources={Resources.LOGIN_PASSWORD} textContentType={'none'} label={'password'} value={this.state.password} onChange={this.setStateFromInput.bind(this)} showPassword={this.state.showPassword} />
          <Separator />
          <Button
            mode="contained"
            style={base.btnPrimary}
            onPress={() => signInWithEmailAndPassword(this.state.email, this.state.password, this.props)}
          >
            {Resources.LOGIN_SIGNIN}
          </Button>
          <Button
            icon="google"
            mode="contained"
            style={base.btnGoogle}
            >
              {Resources.LOGIN_SIGNIN_GOOGLE}
          </Button>
          <Button
            icon="facebook"
            mode="contained"
            style={base.btnFacebook}
            onPress={() => signInWithFacebook(this.props)}
            >
              {Resources.LOGIN_SIGNIN_FACEBOOK}
          </Button>
          <Separator />
          <Button mode="contained" style={base.btnPrimary}
            onPress={() => this.onSingUp()}>
            {Resources.LOGIN_REGISTER}
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
