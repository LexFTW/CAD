import React, {Component} from 'react';

import { Button, Text, SafeAreaView, Alert, View } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';

export default class ReaderScreen extends Component {

  scannButton() {
    Alert.alert("Hola");
  }

  /**<Button
          mode="contained"
          style={base.btnPrimary}
        >
          <Text style={{fontSize: 25}}>{Resources.READER_TEXT_BUTTON}</Text>
        </Button>
 */

  render(){
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />

        <IconButton
          icon="wifi"
          color={Colors.blue600}
          size={150}
          onPress={() => this.scannButton()}
        />
                 
        <View style={{paddingTop: 20}}>
          <HistoryComponent text={"BrekfastValue"} value={"Valor 1"}/>
          <HistoryComponent text={"FoodValue"} value={"Valor 2"}/>
          <HistoryComponent text={"SnackValue"} value={"Valor 3"}/>
          <HistoryComponent text={"DinnerValue"} value={"Valor 4"}/>
        </View>
      </SafeAreaView>
    );
  }

}

function HistoryComponent({text, value}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{paddingRight: 20}}>{text}</Text>
        <Text>{value}</Text>
    </View>
  );
}
