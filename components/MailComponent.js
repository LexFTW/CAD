import * as React from 'react';

import { Alert, View, Text } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import email from 'react-native-email'

export default class MailComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      to: props.to,
      cc: [],
      subject: props.subject,
      body: props.body,
    }
  }

  handleMailing(){
    email(this.state.to, {
      subject: this.state.subject,
      body: this.state.body
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
