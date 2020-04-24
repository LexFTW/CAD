import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  Dimensions,
  Alert
} from 'react-native';
import { Button, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  input: {
    width: 285,
    height: 40,
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#2069b2',
    paddingLeft: 40,
    backgroundColor: 'rgba(178, 178, 178, 0.2)',
    color: 'gray',
  },

  inputIcon: {
    position: 'absolute',
    top: 5,
    left: 12,
    color: '#2069b2',
  },
  inputIconRight: {
    position: 'absolute',
    top: 1.5,
    right: 0,
    color: '#fff',
    backgroundColor: '#2069b2',
    borderRadius: 0,
    justifyContent: 'center',
  },
})

export default class TextInputIcon extends Component{

  constructor(props){
    super(props);
    this.icon = props.icon;
    this.placeholder = props.placeholder;
    this.textContentType = props.textContentType;
    this.secureTextEntry = props.secureTextEntry;
    this.id = props.id;
    this.showPassword = props.showPassword;
    this.value = props.value;
  }

  iWantButtonForShowPassword(){
    if(this.showPassword){
      return <Button
        icon="eye"
        mode="contained"
        style={styles.inputIconRight}
        labelStyle={{marginRight: 0}}
        onPress={() => this.showPasswordInTheInput.bind(this)}
      />
    }
  }

  showPasswordInTheInput(){
    Alert.alert(this.props)
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
          id={this.id}
          value={this.value}
        />
        {this.iWantButtonForShowPassword()}
      </View>
    );
  }
}
