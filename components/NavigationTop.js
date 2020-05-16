import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import IconFontAwesome from '../components/TabBarIconFontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class NavigationTop extends React.Component {

  constructor(props) {
    super(props)
    this.title = props.title;
    this.screen = props.screen;
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Card style={styles.navigationTop}>
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
