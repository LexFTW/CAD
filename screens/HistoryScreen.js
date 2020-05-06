import * as React from 'react';

import { Alert, Text, TextInput, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { ActivityIndicator, Button, IconButton, Colors } from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

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

  async searchRegisterByDate(){
    const user = firebase.auth().currentUser;

    await firestore
    .collection('userHistory')
    .where('uid', '==', user.uid)
    .where('createdAt', '==', this.state.date)
    .get()
    .then(snapshot => {
      if(snapshot.empty){
        console.warn('Datos no encontrados.')
      }

      snapshot.forEach(doc => {
        var currentDocument = doc.data();
        this.saveDocumentInState(currentDocument);
        this.generateDayReport();
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

  generateDayReport(){
    const glucoseAverageDay = (parseInt(this.state.brekfastValue) + parseInt(this.state.foodValue) + parseInt(this.state.snackValue) + parseInt(this.state.dinnerValue)) / 4
    this.setState({eag: (glucoseAverageDay).toFixed(2) });
    this.setState({hypoglycemia: 0 });
    this.setState({hyperglycemia: 2 });
    this.setState({hba1c: ((46.7 + glucoseAverageDay) / 28.7).toFixed(2) });
    this.setState({report: true});
  }

  renderChart(){
    if(this.state.report){
      return <Text>Graficazo to flama</Text>
    }else{
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} />
    }
  }

  renderReport(){
    if(this.state.report){
      return <View style={{padding: 20}}>
        <View style={{backgroundColor: '#2069b2'}}>
          <Text style={{textTransform: 'uppercase', fontSize: 16, fontWeight: 'bold', color: 'white', padding: 5}}>Informe</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>eAG</Text>
          <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.eag}</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>HBA1C</Text>
          <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.hba1c}</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>hypoglycemia</Text>
          <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.hypoglycemia}</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>hyperglycemia</Text>
          <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.hyperglycemia}</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Button icon="file" mode="contained" style={base.btnPrimary}>
            <Text>Generar Informe</Text>
          </Button>
        </View>
      </View>
    }
  }

  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />
        <ScrollView>
          <View style={{marginTop: 65, backgroundColor: '#2069b2', paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
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
              onPress={() => this.searchRegisterByDate()}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', height: 300, width: Dimensions.get('window').width}}>
            {this.renderChart()}
          </View>
          {this.renderReport()}
        </ScrollView>
      </SafeAreaView>
    );
  }

}
