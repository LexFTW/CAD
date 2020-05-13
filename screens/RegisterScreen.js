import React, {Component} from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import {  Button } from 'react-native-paper';
import Separator from '../components/Separator';

import { createStackNavigator } from '@react-navigation/stack';
import NavigationTop from './../components/NavigationTop';

import Resources from './../config/resources/resources';

import base from './../constants/styles/Styles';

import { signUpWithEmailAndPassword } from '../functions/RegisterWithEmailAndPassword';

import TextInputRegisterNameAndEmail from '../components/TextInputRegisterNameAndEmail';
import TextInputRegisterPassword from '../components/TextInputRegisterPassword';

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

  async setStateFromInput(name, value) {
    this.setState({[name]: value});
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
                <TextInputRegisterNameAndEmail iconName={'user'} resources={Resources.LOGIN_USERNAME} textContentType={'username'} label={'userName'} value={this.state.userName} onChange={this.setStateFromInput.bind(this)} />
                <TextInputRegisterNameAndEmail iconName={'user'} resources={Resources.LOGIN_EMAIL} textContentType={'emailAddress'} label={'email'} value={this.state.email} onChange={this.setStateFromInput.bind(this)} />
                <TextInputRegisterPassword iconName={'lock'} resources={Resources.LOGIN_PASSWORD} textContentType={'none'} label={'password'} value={this.state.password} onChange={this.setStateFromInput.bind(this)} showPassword={this.state.showPassword} />
                <TextInputRegisterPassword iconName={'lock'} resources={Resources.LOGIN_CONFPASSWORD} textContentType={'none'} label={'confPassword'} value={this.state.confPassword} onChange={this.setStateFromInput.bind(this)} showPassword={this.state.showPassword} />
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
