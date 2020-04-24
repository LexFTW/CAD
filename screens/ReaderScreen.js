import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Button} from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';
import { MonoText } from '../components/StyledText';

import  ReaderStyles  from '../constants/styles/ReaderStyles';
import ReaderFunctions from '../functions/ReaderFunctions';

import Resources from './../config/resources/resources';

export default class ReaderScreen extends React.Component {

  render(){
    return (
      <View style={ReaderStyles.container}>
        <TabBarIconFontAwesome style={ReaderStyles.icon} name="wifi" size={200} color="rgb(97,174,172)" />
        <Text style={ReaderStyles.textIcon}>{Resources.READER_TITLE}</Text>
        <View>
        <Button
          mode="contained"
          style={{backgroundColor: '#2069b2', borderRadius: 0, marginTop: 35}}
        >
          <Text style={{fontSize: 25}}>{Resources.READER_TEXT_BUTTON}</Text>
        </Button>
        </View>
      </View>
    );
  }
}
