import * as React from 'react';

import { Dimensions, StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  col_2: {
    width: Dimensions.get('window').width / 2,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRightWidth: 0,
  },
  col_4: {
    width: Dimensions.get('window').width / 4,
    height: 190,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRightWidth: 0,
  }
});

export default class TextInputBox extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      class: props.class,
      title: props.title,
      label: props.label,
      value: props.value,
      onChange: props.change,
    }
  }

  onChangeTextInput(name, value){
    this.props.onChange(name, value);
    this.setState({value: value});
  }

  render(){
    return (
      <View style={this.state.class == 'col_2' ? styles.col_2 : styles.col_4}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 10, textAlign: 'center'}}>{this.state.title}</Text>
        <TextInput style={{textTransform: 'uppercase', color: '#8db1d3', fontSize: 15, textAlign: 'center', paddingVertical: 5}} keyboardType={'numeric'} placeholder={'Value'} placeholderTextColor={'#444'} value={this.state.value} onChangeText={(value) => this.onChangeTextInput(this.state.label, value)}/>
      </View>
    )
  }

}
