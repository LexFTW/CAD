import React, {Component} from 'react';

import { Text, SafeAreaView } from 'react-native';
import { Button} from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';

export default class ReaderScreen extends Component {

  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />
        <TabBarIconFontAwesome style={styles.icon} name="wifi" size={200} color="rgb(97,174,172)" />
        <Text style={styles.textIcon}>{Resources.READER_TITLE}</Text>
        <Button
          mode="contained"
          style={base.btnPrimary}
        >
          <Text style={{fontSize: 25}}>{Resources.READER_TEXT_BUTTON}</Text>
        </Button>
      </SafeAreaView>
    );
  }

}
