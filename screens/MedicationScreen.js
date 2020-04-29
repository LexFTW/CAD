import * as React from 'react';
import { Text, SafeAreaView, Alert, View  } from 'react-native';
import  base  from '../constants/styles/Styles';
import { IconButton, Colors, Divider, Avatar, Button } from 'react-native-paper';
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
        <View style={{backgroundColor: '#2069b2', alignSelf: 'stretch', textAlign: 'center', height: 325}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, marginTop: 25,}}>
            <IconButton
            icon="settings"
            color={'#2069b2'}
            size={20}
            />
            <View style={{justifyContent:'center', alignItems: 'center', marginTop: 15}}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 15, marginTop: 25,}}>
            <Button
              onPress={() => this.props.navigation.navigate('Profile')}
              color={'#72a2d3'}
            >
              Perfil
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Medication')}
              color={'white'}
            >
              Tratamiento
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

/*<Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>{Resources.PROFILE_SETTINGS_PROFILE}</Text>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>{Resources.PROFILE_SETTINGS_MEDICATION}</Text>*/
