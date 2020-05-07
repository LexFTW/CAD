import * as React from 'react';

import { Alert, Text, TextInput, SafeAreaView, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { ActivityIndicator, Button, IconButton, Colors } from 'react-native-paper';

import Resources from './../config/resources/resources';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';

import moment from 'moment';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();
const s = StyleSheet.create({
  scene: {
    flex: 1,
  }
});

export default class DailyReportComponent extends React.Component {
  constructor(props){
    super(props);
    this.collection = props.collection;

    this.state = {
      eag: null,
      hba1c: null,
      hyperglycemia: null,
      hypoglycemia: null,
    }
  }

  componentDidMount(){
      this.generateDayReport();
  }


  generateDayReport(){
    const glucoseAverageDay = (parseInt(this.collection.brekfastValue) + parseInt(this.collection.foodValue) + parseInt(this.collection.snackValue) + parseInt(this.collection.dinnerValue)) / 4
    this.setState({eag: (glucoseAverageDay).toFixed(2) });
    this.setState({hypoglycemia: 0 });
    this.setState({hyperglycemia: 2 });
    this.setState({hba1c: ((46.7 + glucoseAverageDay) / 28.7).toFixed(2) });
  }

  render(){
    return (
      <View style={[s.scene, {padding: 20}]}>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>eAG</Text>
            {this.state.eag != null ? <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.eag}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>HBA1C</Text>
            {this.state.eag != null ? <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.hba1c}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>hypoglycemia</Text>
            {this.state.eag != null ? <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.hypoglycemia}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', padding: 5}}>hyperglycemia</Text>
            {this.state.eag != null ? <Text style={{textTransform: 'uppercase', padding: 5}}>{this.state.hyperglycemia}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{marginTop: 20}}>
          <Button icon="file" mode="contained" style={base.btnPrimary}>
          <Text>Generar Informe</Text>
          </Button>
        </View>
      </View>
      );
  }

}
