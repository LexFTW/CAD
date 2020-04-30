import * as React from 'react';
import { ScrollView, Text, TextInput, SafeAreaView, Alert, View  } from 'react-native';
import  base  from '../constants/styles/Styles';
import { IconButton, Colors, Divider, Avatar, Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
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
        <View style={{alignItems: "center", flex: 1, justifyContent: "center", marginVertical: 15}}>
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
          <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <View style={{width: 350, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 40, backgroundColor: "#adccea", flex: 1, flexDirection: "row"}}>
              <Text
                style={{fontSize: 20, textTransform:"uppercase"}}
              >{"hola"}</Text>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
              />
            </View>
          </View>
        </View>
      </ScrollView >
    );
  }
}

const UserSettings = ({lines, text, number}) => (
  <View style={{marginBottom: 10 ,width: 350, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 40, paddingVertical: 5, backgroundColor: "#adccea", flex: 1, flexDirection: "row"}}>
    <Text style={{fontSize: 20, textTransform:"uppercase"}}
    >{text}</Text>
    <TextInput
      //multiline
      numberOfLines={lines}
      editable
      onChangeText={number => onChangeText(number)}
      
      style={{fontSize: 15}}
      placeholder={"Values"}
      placeholderTextColor={"grey"}
    />
  </View>
)
