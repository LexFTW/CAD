import * as React from 'react';

import { Alert, Text, TextInput, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { ActivityIndicator, Button, IconButton, Colors } from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';
import HistoryTabView from './../components/HistoryTabView';
import HistoryChart from './../components/HistoryChart';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default class HistoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: "",
      report: false,
      isVisible: false,
      values: [],
      times: [],
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
      date: moment(date).format('MM-DD-yyyy'),
      report: false,
    });

    this.state.values = [];
    this.state.times = [];
    this.searchRegisterByDate(this.state.date);
  }

  showDatePicker(){
    this.setState({isVisible: true})
  }

  hideDatePicker(){
    this.setState({isVisible: false})
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
        Alert.alert('Datos no encontrados.', date)
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
    this.state.values = documentReceived.data;
    this.state.times = documentReceived.time;
    this.setState({createdAt: documentReceived.createdAt});
  }

  renderChart(){
    if(this.state.report){
      return <HistoryChart labels={this.state.times} values={this.state.values}/>
    }else{
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} />
    }
  }

  renderReports(){
    if(this.state.report){
      return <HistoryTabView values={this.state.values} times={this.state.times}/>
    }else{
      return;
    }
  }

  makeReportFromDate() {

  }

  render(){
    return (
      <View>
        <ScrollView>
          <View style={{backgroundColor: '#2069b2', paddingVertical: 10, paddingTop: 30, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>History: {this.state.createdAt}</Text>
            <View style={{flexDirection: 'row'}}>
              <IconButton
                icon="calendar"
                color={Colors.white}
                size={20}
                onPress={() => this.showDatePicker()}
              />
              <IconButton
                icon="file"
                color={Colors.white}
                size={20}
                onPress={() => this.makeReportFromDate()}
              />
            </View>
            <DateTimePickerModal
              isVisible={this.state.isVisible}
              mode="date"
              onConfirm={(date) => this.handleConfirm(date)}
              onCancel={() => this.hideDatePicker()}
            />
          </View>
          {this.renderReports()}
        </ScrollView>
      </View>
    );
  }

}
