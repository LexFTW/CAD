import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Colors } from 'react-native-paper';
import IconFontAwesome from '../components/TabBarIconFontAwesome';


export default class NavigationTop extends React.Component {

  constructor(props) {
    super(props)
    this.title = props.title;
    this.button = props.button;
  }

  showButton() {
    if (this.button) {
      return (
        <Button style={{flexDirection: 'row', borderRadius: 0, backgroundColor: '#2069b2'}} >
            <IconFontAwesome color="rgb(97,174,172)" size={14} name={'chevron-left'}/> 
        </Button>
      )
    }
  }

  //<Card.Title titleStyle={{color: 'white'}} title={this.title} style={styles.navigationTitle}/>
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.navigationTop}>
          <View style={{flexDirection: 'row'}}>
            {this.showButton()}
            <Text> sdfsf</Text> 
          </View>
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
    paddingTop: 20,
    justifyContent: 'center',
    marginBottom: 25,
    backgroundColor: '#2069b2',
    borderRadius: 0,
  },
  navigationTitle:{
    textAlign: 'center',
    flexDirection: 'row',
  }
});
