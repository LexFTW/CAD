import React, {Component} from 'react';

import { ScrollView, Text, Alert, View } from 'react-native';
import { IconButton, Colors, Avatar } from 'react-native-paper';

import TabView from '../components/UserTabView';

import  styles  from '../constants/styles/UserStyles';

import Resources from './../config/resources/resources';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default class UserScreen extends Component {

  constructor(props){
    super(props);
    this.state = ({
      diabetes_type: "Unknown",
      user_title_profile: "?",
    });
  }

  async componentDidMount(){
    const user = firebase.auth().currentUser;

    await firestore
    .collection('userParametersMedication')
    .doc(user.uid)
    .get()
    .then(doc => {
      if (doc.exists) {
        this.setState({diabetes_type: doc.data().Type});
      }
    });

    if(user.displayName != null){
      this.setState({user_title_profile: user.displayName.charAt(0)});
    }else{
      this.setState({user_title_profile: '?'});
    }
  }

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
        <View style={styles.containerHead}>
          <View style={styles.viewHead}>
            <IconButton
              icon="settings"
              color={"#2069b2"}
              size={20}
            />
            <View style={styles.viewAvatar}>
              <Avatar.Text size={125} style={styles.avatar} label={this.state.user_title_profile} labelStyle={{padding: 10, fontSize: 45}} />
              <Text style={styles.name}>{firebase.auth().currentUser.displayName}</Text>
            </View>
            <IconButton
              icon="logout"
              color={Colors.white}
              size={20}
              onPress={() => this.onSignOut()}
            />
          </View>
          <TabView state={this.state}/>
        </View>
      </ScrollView>
    );
  }
}
