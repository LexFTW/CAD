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
      hyperglycemia: 0,
      hypoglycemia: 0,
    }
  }

  componentDidMount(){
    this.generateDayReport();
  }


  generateDayReport(){
    const glucoseAverageDay = (parseInt(this.collection.brekfastValue) + parseInt(this.collection.foodValue) + parseInt(this.collection.snackValue) + parseInt(this.collection.dinnerValue)) / 4
    this.setState({eag: (glucoseAverageDay).toFixed(2) });
    this.countHypoglycemia();
    this.countHyperglycemia();
    this.setState({hba1c: ((46.7 + glucoseAverageDay) / 28.7).toFixed(2) });
  }

  countHypoglycemia(){
    if(this.collection.brekfastValue < 80){
      this.setState({hypoglycemia: this.state.hypoglycemia + 1})
    }

    if(this.collection.foodValue < 80){
      this.setState({hypoglycemia: this.state.hypoglycemia + 1})
    }

    if(this.collection.snackValue < 80){
      this.setState({hypoglycemia: this.state.hypoglycemia + 1})
    }

    if(this.collection.dinnerValue < 80){
      this.setState({hypoglycemia: this.state.hypoglycemia + 1})
    }
  }

  countHyperglycemia(){
    if(this.collection.brekfastValue > 150){
      this.setState({hyperglycemia: this.state.hyperglycemia + 1})
    }

    if(this.collection.foodValue > 150){
      this.setState({hyperglycemia: this.state.hyperglycemia + 1})
    }

    if(this.collection.snackValue > 150){
      this.setState({hyperglycemia: this.state.hyperglycemia + 1})
    }

    if(this.collection.dinnerValue > 150){
      this.setState({hyperglycemia: this.state.hyperglycemia + 1})
    }
  }

  render(){
    return (
      <View style={[s.scene, {flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}]}>
        <View style={{width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height / 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRightWidth: 0}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 25}}>eAG</Text>
          {this.state.eag != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{this.state.eag}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height / 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd'}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 25}}>hba1c</Text>
          {this.state.hba1c != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{this.state.hba1c}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height / 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRightWidth: 0, borderTopWidth: 0}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 20}}>hyperglycemia</Text>
          {this.state.hyperglycemia != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{this.state.hyperglycemia}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
        <View style={{width: Dimensions.get('window').width / 2, height: Dimensions.get('window').height / 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderTopWidth: 0}}>
          <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 20}}>hypoglycemia</Text>
          {this.state.hypoglycemia != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{this.state.hypoglycemia}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        </View>
      </View>
      );
  }

}
