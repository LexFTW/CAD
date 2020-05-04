import React, {Component} from 'react';

import { Text, SafeAreaView } from 'react-native';
import { Button} from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

import  base  from '../constants/styles/Styles';

export default class ReaderScreen extends Component {

  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.REPORT_HEADER}
        />
      </SafeAreaView>
    );
  }

}
