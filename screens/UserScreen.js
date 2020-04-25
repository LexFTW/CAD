import * as React from 'react';
import { Text, SafeAreaView, Alert  } from 'react-native';
import  base  from '../constants/styles/Styles';
import { IconButton, Colors } from 'react-native-paper';
import NavigationTop from './../components/NavigationTop';
import Resources from './../config/resources/resources';
import firebase from '../config/firebase';

export default class UserScreen extends React.Component {
  onSignOut(){
    firebase
      .auth()
      .signOut()
      .then(() => {
        Alert.alert('You Sign Out!');
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        // An error happened.
        console.log("error logging out" + error);
      });
  }

  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.PROFILE_HEADER}
        />
        <Text>{Resources.PROFILE_HEADER}</Text>
        <IconButton
          icon="logout"
          color={Colors.white500}
          size={20}
          onPress={() => this.onSignOut()}
        />
      </SafeAreaView>
    );
  }
}
