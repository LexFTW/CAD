import React, {Component} from 'react';

import { View, Image, SafeAreaView } from 'react-native';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';
import Separator from '../components/Separator';

import Resources from './../config/resources/resources';

import { createStackNavigator } from '@react-navigation/stack';

import firebase from '../config/firebase';

import base from './../constants/styles/Styles';

import { signInWithEmailAndPassword } from '../functions/LoginWithEmailAndPassword';
import { signInWithFacebook } from '../functions/LoginWithFacebook';

import TextInputLoginEmail from '../components/TextInputLoginEmail';
import TextInputLoginPass from '../components/TextInputLoginPass';

const Stack = createStackNavigator();

export default class LoginScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
      password: true,
      auth: false,
    }
  }

  async componentDidMount(){
    await this.isAuthentication();
  }

  async isAuthentication(){
    await firebase.auth().onAuthStateChanged((user) => {
      if (user || this.state.auth) {
        this.redirectIfIsAuthentication();
      }else{
        this.isLoading(true);
      }
    });
  }

  redirectIfIsAuthentication(){
    this.props.navigation.navigate('Home');
  }

  isLoading(value){
    this.setState({loading: value});
  }

  onSingUp() {
    this.props.navigation.navigate('Register')
  }

  async setStateFromInput(name, value) {
    this.setState({[name]: value});
  }

  currentRender(){
    if(!this.state.loading){
      return <ActivityIndicator animating={true} size={100} color={Colors.blue700} />
    }else{
      return <View>
        <View>
          <Image source={require('../assets/images/splash.png')} style={base.logo} />
          <TextInputLoginEmail iconName={'user'} resources={Resources.LOGIN_EMAIL} textContentType={'emailAddress'} label={'email'} value={this.state.email} onChange={this.setStateFromInput.bind(this)} />
          <TextInputLoginPass iconName={'lock'} resources={Resources.LOGIN_PASSWORD} textContentType={'none'} label={'password'} value={this.state.password} onChange={this.setStateFromInput.bind(this)} showPassword={this.state.password} />
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
      </View>
    }
  }

  render() {
    return(
      <SafeAreaView style={base.container}>
        {this.currentRender()}
      </SafeAreaView>
    );
  }
}
