import * as React from 'react';

import { Text, TextInput, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { Button, IconButton, Colors } from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';

export default class HistoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      date: "",
    }
  }

  handleConfirm(date){
    this.setState({
      date: moment(date).format('DD-MM-yyyy')
    });
    hideDatePicker();
  }

  showDatePicker(){
    this.setState({
      isVisible: true
    });
  }

  hideDatePicker(){
    this.setState({
      isVisible: false
    });
  }

  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />
        <ScrollView>
          <View style={{marginTop: 65, backgroundColor: 'lightblue', height: 350, width: Dimensions.get('window').width}}>
            <View style={{backgroundColor: '#2069b2', paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <IconButton
                icon="calendar"
                color={Colors.white}
                size={20}
                onPress={() => this.showDatePicker()}
              />
              <DateTimePickerModal
                isVisible={this.state.isVisible}
                mode="date"
                onConfirm={(date) => this.handleConfirm(date)}
                onCancel={() => this.hideDatePicker()}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: 270, height: 35, paddingLeft: 20}}>{this.state.date}</Text>
                <IconButton
                icon="calendar-search"
                color={Colors.black}
                style={{backgroundColor: 'white', borderRadius: 0, borderTopRightRadius: 10, borderBottomRightRadius: 10, margin: 0, height: 35}}
                size={20}
                />
              </View>
            </View>
          </View>
          <View style={{padding: 20}}>
            <View style={{backgroundColor: '#2069b2'}}>
              <Text style={{textTransform: 'uppercase', fontSize: 16, fontWeight: 'bold', color: 'white', padding: 5}}>Informe</Text>
            </View>
            <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>hba1c</Text>
              <Text style={{textTransform: 'uppercase', padding: 5}}>7.23</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Button icon="file" mode="contained" style={base.btnPrimary}>
                <Text>Generar Informe</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

}