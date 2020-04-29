import * as React from 'react';
import { ScrollView, Text, TextInput, SafeAreaView, Alert, View  } from 'react-native';
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
      <ScrollView>
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
        </View>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
        <UserSettings lines={2} text={"hola"} number={"1"}/>
      </ScrollView >
    );
  }
}
/*<Button
              onPress={() => this.props.navigation.navigate('Profile')}
              color={'white'}
            >
              Perfil
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Medication')}
              color={'#72a2d3'}
            >
              Tratamiento
            </Button>
*/
const UserSettings = ({lines, text, number}) => (
  <View style={{marginTop: 35, paddingTop: 10, paddingHorizontal: 40, backgroundColor: "white", borderBottomColor: '#000000', borderWidth: 1, flex: 1}}>
    <Text>{text}</Text>
    <TextInput
      //multiline
      numberOfLines={lines}
      editable
      onChangeText={number => onChangeText(number)}
      value={number}
    />
  </View>
)
