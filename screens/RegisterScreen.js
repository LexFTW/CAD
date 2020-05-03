import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TextInput, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { IconButton, Button, ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Separator from '../components/Separator';

import { createStackNavigator } from '@react-navigation/stack';
import NavigationTop from './../components/NavigationTop';

import firebase from '../config/firebase';
import * as Facebook from 'expo-facebook';

import Resources from './../config/resources/resources';

import base from './../constants/styles/Styles';
import styles from '../components/TextInputIcon';

import {signUpWithEmailAndPassword} from '../functions/RegisterWithEmailAndPassword';

const Stack = createStackNavigator();

export default class RegisterScreen extends Component {

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

  render() {
    return(
      <SafeAreaView style={base.container}>
        <NavigationTop
            title={Resources.SINGUP_READER}
            button={true}
            screen={'Login'}
        />
        <View>
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
                  onPress={() => signUpWithEmailAndPassword(this.state, this.props)}>
                  {Resources.LOGIN_REGISTER}
                </Button>
              <Separator />
          </View>
      </SafeAreaView>
    );
  }
}
