import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TextInput, SafeAreaView, NativeModules, Platform, Alert } from 'react-native';
import { Button, ActivityIndicator, Colors, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome from '../components/TabBarIconFontAwesome';

import MainNavigator from '../navigation/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from '../config/firebase';
import * as GoogleSignIn from 'expo-google-sign-in'
import * as Facebook from 'expo-facebook';

import Resources from './../config/resources/resources';
import Separator from '../components/Separator';

import base from './../constants/styles/Styles';

const Stack = createStackNavigator();

export default class NavigationTop extends React.Component {

  constructor(props) {
    super(props)
    this.title = props.title;
    this.button = props.button;
    this.screen = props.screen;
  }

  showButton() {
    if (this.button) {
      return (
        <Button style={{position: 'absolute', bottom: 7, borderRadius: 0}} onPress={() => this.redirecTo()}>
            <IconFontAwesome color="rgb(97,174,172)" size={14} name={'chevron-left'}/>
        </Button>
      )
    }
  }

  redirecTo(){
    this.props.navigation.navigate(this.screen)
  }

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.navigationTop}>
          {this.showButton()}
          <Card.Title titleStyle={{color: 'white'}} title={this.title} style={styles.navigationTitle}/>
        </Card>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginBottom: 250,
  },
  navigationTop:{
    backgroundColor: '#2069b2',
    borderRadius: 0,
    height: 65,
  },
  navigationTitle:{
    position: 'absolute',
    left: 40,
    bottom: 0,
  }
});
