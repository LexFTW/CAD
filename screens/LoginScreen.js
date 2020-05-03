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

const Stack = createStackNavigator();

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: '', error: '', auth: false, showPassword: true }
    // this.funcSing = this.signInWithEmail();
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user || this.state.auth) {
          this.props.navigation.navigate('Home');
        }
     });
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

  onSingUp() {
    this.props.navigation.navigate('SingUp')
  }

  showPasswordInTheInput(){
    if(this.state.showPassword){
      this.setState({showPassword: false})
    }else{
      this.setState({showPassword: true})
    }
  }

  render() {
    return(
      <SafeAreaView style={base.container}>
        <View>
          <Image source={require('../assets/images/splash.png')} style={base.logo} />

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
            style={base.btnPrimary}
            onPress={() => this.signInWithEmail()}
          >
            {Resources.LOGIN_SIGNIN}
          </Button>
          <Button
            icon="google"
            mode="contained"
            style={base.btnGoogle}
            onPress={() => this.signInWithGoogle()}
            >
              {Resources.LOGIN_SIGNIN_GOOGLE}
          </Button>
          <Button
            icon="facebook"
            mode="contained"
            style={base.btnFacebook}
            onPress={() => this.signInWithFacebook()}
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
