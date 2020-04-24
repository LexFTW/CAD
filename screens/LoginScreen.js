import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';
import TextInputIcon from '../components/TextInputIcon';
import Separator from '../components/Separator';
import Resources from './../config/resources/resources';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: '', error: '', auth: false }
  }

  onPressSignIn(){
    this.setState({auth: true});
  }

  onSignUpPress(){
    this.setState({auth: true});
  }

  renderCurrentState(){
    if(this.state.auth){
        return <View>
          <ActivityIndicator size={90} color={Colors.blue800}/>
        </View>
    }
    return <View>
      <Image source={require('../assets/images/CAD_Logo.png')} style={{width: 250, height: 200, marginBottom: 15}} />
      <TextInputIcon
        icon={'user'}
        placeholder={Resources.LOGIN_EMAIL}
        textContentType={'emailAddress'}
        secureTextEntry={false}
        showPassword={false}
      />
      <TextInputIcon
        icon={'lock'}
        placeholder={Resources.LOGIN_PASSWORD}
        textContentType={'none'}
        secureTextEntry={true}
        showPassword={true}
      />
      <Separator />
      <Button
        mode="contained"
        style={{backgroundColor: '#2069b2', borderRadius: 0, marginBottom: 5}}
        onPress={() => this.onPressSignIn()}
      >
        {Resources.LOGIN_SIGNIN}
      </Button>
      <Button icon="google" mode="contained" style={{backgroundColor: '#DB4437', borderRadius: 0}} onPress={() => this.onPressSignIn()}>
        {Resources.LOGIN_SIGNIN_GOOGLE}
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

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
