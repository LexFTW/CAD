import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  input: {
    ...Platform.select({
      android: {
        width: 250,
      },
      web: {
        width: screenWidth * .25,
      }
    }),
    height: 40,
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 40,
    backgroundColor: 'rgba(178, 178, 178, 0.2)',
    fontFamily: 'nunito-light',
    color: 'gray'
  },

  inputIcon: {
    position: 'absolute',
    top: 5,
    left: 12,
    color: 'rgba(178, 178, 178, 0.5)',
  },
})

export default class TextInputIcon extends Component{

  constructor(props){
    super(props);
    this.icon = props.icon;
    this.placeholder = props.placeholder;
    this.textContentType = props.textContentType;
    this.secureTextEntry = props.secureTextEntry;
  }

  render(){
    return(
      <View>
        <Icon name={this.icon} size={28} style={styles.inputIcon}/>
        <TextInput
          placeholder={this.placeholder}
          placeholderTextColor="#adadad"
          underlineColorAndroid='transparent'
          secureTextEntry={this.secureTextEntry}
          style={styles.input}
          textContentType={this.textContentType}
        />
      </View>
    );
  }
}
