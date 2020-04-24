import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class UserScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Card style={{position: 'relative'}}>
          <Avatar.Text size={90} label="AM"  style={{position: 'absolute', right: 25, bottom: -40, borderWidth: 3, borderColor: 'white', padding: 5}}/>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
