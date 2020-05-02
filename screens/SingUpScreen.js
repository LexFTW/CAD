import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TextInput, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { IconButton, Button, ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationTop from './../components/NavigationTop';

import { createStackNavigator } from '@react-navigation/stack';

import firebase from '../config/firebase';
import * as GoogleSignIn from 'expo-google-sign-in'
import * as Facebook from 'expo-facebook';

import styles from '../components/TextInputIcon';
import Resources from './../config/resources/resources';
import Separator from '../components/Separator';

import base from './../constants/styles/Styles';

const Stack = createStackNavigator();

export default class SingUpScreen extends Component {

  constructor(props){
    super(props);
    this.state = {userName: '', email: '', password: '', confPassword: '', error: '', auth: false, showPassword: true}
  }

  showPasswordInTheInput(){
    if(this.state.showPassword){
      this.setState({showPassword: false})
    }else{
      this.setState({showPassword: true})
    }
  }

  signUpWithEmail() {
    if (this.state.userName === '' || this.state.email === '' || this.state.password === '' || this.state.confPassword === '') {
      Alert.alert('Por favor, rellene todos los campos.');
    } else {
      this.setState({
        auth: true
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        Alert.alert(this.state.email + ' - ' + this.state.password);
        res.user.updateProfile({
          displayName: this.state.userName
        })
        Alert.alert('Usuario registrado.');
        this.setState({
          auth: false,
          userName: '',
          email: '',
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => Alert.alert(error.message))
    }
  }

  renderCurrentState(){
    return <View>
        <View style={{marginTop: 60, alignItems: 'center'}}>
          <Image source={require('../assets/images/splash.png')} style={{width: 250, height: 200, marginBottom: 15}} />
          <View style={{marginTop: 20}}>
            <View>
              <Icon name={'user'} size={28} style={styles.inputIcon}/>
              <TextInput
                placeholder={Resources.LOGIN_USERNAME}
                placeholderTextColor="#adadad"
                underlineColorAndroid='transparent'
                textContentType={'username'}
                secureTextEntry={false}
                style={styles.input}
                value={this.state.userName}
                onChangeText={userName => this.setState({ userName })}
              />
            </View>
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
            <View>
              <Icon name={'lock'} size={28} style={styles.inputIcon}/>
              <TextInput
                placeholder={Resources.LOGIN_CONFPASSWORD}
                placeholderTextColor="#adadad"
                underlineColorAndroid='transparent'
                textContentType={'none'}
                secureTextEntry={this.state.showPassword}
                showPassword={false}
                style={styles.inputPassword}
                value={this.state.confPassword}
                onChangeText={confPassword => this.setState({ confPassword })}
              />
            </View>
          </View>
        </View>

        <Separator />
            <Button mode="contained" style={{backgroundColor: '#2069b2', borderRadius: 0, marginBottom: 50}}
              onPress={() => this.signUpWithEmail()}>
              {Resources.LOGIN_REGISTER}
            </Button>
          <Separator />
      </View>
  }

  render() {
    return(
      <SafeAreaView style={base.container}>
        {this.renderCurrentState()}
        <NavigationTop
            title={Resources.SINGUP_READER}
            button={true}
            screen={'Login'}
        />
      </SafeAreaView>
    );
  }
}
