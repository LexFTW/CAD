import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default class ReaderFunctions extends React.Component{

  Loading(){
    return <View>
      <ActivityIndicator size={90} color={Colors.blue800}/>
    </View>
  }

}
