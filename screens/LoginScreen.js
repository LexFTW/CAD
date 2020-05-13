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
