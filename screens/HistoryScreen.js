import * as React from 'react';

import { Alert, Text, TextInput, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { ActivityIndicator, Button, IconButton, Colors } from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';
import HistoryTabView from './../components/HistoryTabView';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default class HistoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      report: false,
      date: "",
    }
  }

  componentDidMount(){
    var date = new Date();
    date.setDate(date.getDate() - 1);

    const format = moment(date).format('MM-DD-yyyy');
    this.searchRegisterByDate(format);
  }

  async handleConfirm(date){
    await this.hideDatePicker();

    this.setState({
      date: moment(date).format('MM-DD-yyyy')
    });
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

  async searchRegisterByDate(date){
    const user = firebase.auth().currentUser;

    await firestore
    .collection('userHistory')
    .where('uid', '==', user.uid)
    .where('createdAt', '==', date)
    .get()
    .then(snapshot => {
      if(snapshot.empty){
        console.warn('Datos no encontrados.', date)
      }

      snapshot.forEach(doc => {
        var currentDocument = doc.data();
        this.saveDocumentInState(currentDocument);
        this.setState({report: true});
      });

    })
    .catch(error => {
      console.warn(error);
    });
  }

  saveDocumentInState(documentReceived){
    this.setState({brekfastValue: documentReceived.BrekfastValue});
    this.setState({brekfastTime: documentReceived.BrekfastTime});
    this.setState({foodValue: documentReceived.FoodValue});
    this.setState({foodTime: documentReceived.FoodTime});
    this.setState({snackValue: documentReceived.SnackValue});
    this.setState({snackTime: documentReceived.SnackTime});
    this.setState({dinnerValue: documentReceived.DinnerValue});
    this.setState({dinnerTime: documentReceived.DinnerTime});
  }

  renderChart(){
    if(this.state.report){
      return <Text>Graficazo to flama</Text>
    }else{
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} />
    }
  }

  render(){
    return (
      <View>
        <ScrollView>
          <View style={{backgroundColor: '#2069b2', paddingVertical: 10, paddingTop: 25, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
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
              <Text style={{backgroundColor: 'white', color: '#222', width: 250, justifyContent:'center', alignItems: 'center', paddingLeft: 10, fontSize: 17, fontWeight: 'bold'}}>{this.state.date}</Text>
              <IconButton
              icon="database-search"
              color={Colors.white}
              style={{backgroundColor: 'lightblue', borderRadius: 0, margin: 0, height: 35, width: 40}}
              size={20}
              onPress={() => this.searchRegisterByDate(this.state.date)}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', height: 300, width: Dimensions.get('window').width}}>
            {this.renderChart()}
          </View>
          {this.state.report ? <HistoryTabView collection={this.state}/> : <View></View>}
        </ScrollView>
      </View>
    );
  }

}
