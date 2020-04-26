import * as React from 'react';
import { Text, SafeAreaView, Alert, View  } from 'react-native';
import  base  from '../constants/styles/Styles';
import { IconButton, Colors, Divider, Avatar } from 'react-native-paper';
import NavigationTop from './../components/NavigationTop';
import Resources from './../config/resources/resources';
import firebase from '../config/firebase';

export default class UserScreen extends React.Component {
  onSignOut(){
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert(error);
      });
  }

  render(){
    return (
      <SafeAreaView>
        <View style={{backgroundColor: '#2069b2', alignSelf: 'stretch', textAlign: 'center', height: 250}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, marginTop: 25,}}>
            <IconButton
            icon="settings"
            color={Colors.white}
            size={20}
            />
            <View style={{justifyContent:'center', alignItems: 'center'}}>
              <Avatar.Text size={125} style={{borderWidth: 2, borderColor: 'white', padding: 5}} label="AM" labelStyle={{padding: 10, fontSize: 45}} />
              <Text style={{color: 'white', fontSize: 22, marginTop: 10}}>Alexis Mengual</Text>
              <Text style={{color: 'white', fontSize: 14, fontStyle: 'italic'}}>Diabetes Tipo 1</Text>
            </View>
            <IconButton
            icon="logout"
            color={Colors.white}
            size={20}
            onPress={() => this.onSignOut()}
            />
          </View>
        </View>
          <View style={{padding: 10}}>
          <View style={{paddingTop: 15, paddingLeft: 15, paddingRight: 15, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
            <Text style={{paddingTop: 8, fontSize: 15}}>{Resources.PROFILE_SETTINGS_PROFILE}</Text>
            <IconButton
              icon="pencil"
              color={'#333333'}
              size={20}
            />
          </View>
          <Divider />
          <View style={{paddingTop: 15, paddingLeft: 15, paddingRight: 15, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
            <Text style={{paddingTop: 8, fontSize: 15}}>{Resources.PROFILE_SETTINGS_MEDICATION}</Text>
            <IconButton
              icon="pencil"
              color={'#333333'}
              size={20}
              animated={true}
            />
          </View>
          <Divider />
        </View>
      </SafeAreaView>
    );
  }
}
