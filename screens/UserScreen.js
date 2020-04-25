import * as React from 'react';
import { Text, SafeAreaView  } from 'react-native';
import  base  from '../constants/styles/Styles';
import NavigationTop from './../components/NavigationTop';
import Resources from './../config/resources/resources';

export default class UserScreen extends React.Component {
  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.PROFILE_HEADER}
        />
        <Text>{Resources.PROFILE_HEADER}</Text>
      </SafeAreaView>
    );
  }
}
