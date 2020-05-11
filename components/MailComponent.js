import * as React from 'react';

import { Alert, View, Text } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import Resources from '../config/resources/resources';

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
    email('noreply@dca.com', {
      subject: Resources.MAIL_SUBJECT,
      body: this.state.body,
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
