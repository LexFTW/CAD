import * as React from 'react';

import { Alert, View, Text } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import email from 'react-native-email'
import { HitTestResultTypes } from 'expo/build/AR';

export default class MailComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      cc: [],
      body: props.body,
    }
  }

  handleMailing = () => {    
    console.log(this.state.body)
    email('hola', {
      subject: 'Report',
      body: '1. EAG: ' + this.state.body.statePartialEag + '\n'
          + '2. HBA1C: ' + this.state.body.statePartialHba1c + '\n'
          + '3. HYPERGLYCEMIA: ' + this.state.body.hyperglycemiaTotal + '\n'
          + '   3.1. BREAKFAST: ' + this.state.body.hyperglycemiaBre + '\n'
          + '   3.2. FOOD: ' + this.state.body.hyperglycemiaFoo + '\n'
          + '   3.3. SNACK: ' + this.state.body.hyperglycemiaSna + '\n'
          + '   3.4. DINNER: ' + this.state.body.hyperglycemiaDin + '\n'
          + '4. HIPOGLYCEMIA: ' + this.state.body.hypoglycemiaTotal + '\n'
          + '   4.1. BREAKFAST: ' + this.state.body.hypoglycemiaBre + '\n'
          + '   4.2. FOOD: ' + this.state.body.hypoglycemiaFoo + '\n'
          + '   4.3. SNACK: ' + this.state.body.hypoglycemiaSna + '\n'
          + '   4.4. DINNER: ' + this.state.body.hypoglycemiaDin + '\n'
    }).catch(console.warn('Error'))
  }

  render(){
    return(
      <View>
        <IconButton
          icon={'share'}
          size={20}
          color={Colors.white}
          onPress={() => this.handleMailing()}
        />
      </View>
    );
  }
}
