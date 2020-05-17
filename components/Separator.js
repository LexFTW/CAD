import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

const STYLES = StyleSheet.create({
  separator: {
    marginVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default class Separator extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={STYLES.separator} />
    );
  }
}
