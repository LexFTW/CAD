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

    this.times = props.times;
    this.values = props.values;

    this.state = {
      eag: null,
      hba1c: null,
      hyperglycemia: 0,
      hyperglycemia_details: [0, 0, 0, 0],
      hypoglycemia: 0,
      hypoglycemia_details: [0, 0, 0, 0],
    }
  }

  componentDidMount(){
    this.generateDayReport();
  }


  generateDayReport(){
    var glucoseAverageDay = 0;

    for (var i = 0; i < this.values.length; i++) {
      glucoseAverageDay += this.values[i];
    }

    glucoseAverageDay = glucoseAverageDay / this.values.length;

    this.setState({eag: (glucoseAverageDay).toFixed(2) });
    this.countHypoglycemiaAndHyperglucemia();
    this.setState({hba1c: ((46.7 + glucoseAverageDay) / 28.7).toFixed(2) });
  }

  countHypoglycemiaAndHyperglucemia(){
    for (var i = 0; i < this.values.length; i++) {
      if(this.values[i] > 150){
        this.setState({hyperglycemia: this.state.hyperglycemia + 1})
        console.warn(this.state.hyperglycemia_details[i])
        this.state.hyperglycemia_details[i] = 1;
        console.warn(this.state.hyperglycemia_details[i])
      }else if(this.values[i] < 80){
        this.setState({hypoglycemia: this.state.hypoglycemia + 1})
        this.state.hypoglycemia_details[i] = 1;
      }
    }
  }

  render(){
    return (
      <View style={[s.scene, {flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}]}>
        <HistoryComponent title={'eag'} value={this.state.eag} />
        <HistoryComponent title={'hba1c'} value={this.state.hba1c} />
        <MultipleHistoryComponent title={'hyperglycemia'} value={this.state.hyperglycemia} titleChilds={['Brekfast', 'Food', 'Snack', 'Dinner']} childs={[1, 2, 3, 4]}/>
        <MultipleHistoryComponent title={'hypoglycemia'} value={this.state.hypoglycemia} titleChilds={['Brekfast', 'Food', 'Snack', 'Dinner']} childs={[1, 2, 3, 4]} />
      </View>
      );
  }
}

function HistoryComponent({title, value}) {
  return (
      <View style={{width: Dimensions.get('window').width / 2.01, height: 170, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, borderRightWidth: 0}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 23, textAlign: 'center'}}>{title}</Text>
        {value != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{value}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
      </View>
  )
}

function MultipleHistoryComponent({title, value, titleChilds, childs}) {
  return (
      <View style={{width: Dimensions.get('window').width, height: 170, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, borderRightWidth: 0}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 23, textAlign: 'center'}}>{title}</Text>
        {value != null ? <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{value}</Text> : <ActivityIndicator animating={true} size={20} color={Colors.blue700} />}
        <View style={{flexDirection: 'row', paddingVertical: 15}}>
          {renderChilds(titleChilds, childs)}
        </View>
      </View>
  )
}

function renderChilds(titleChilds, childs){
  var size = childs.length;
  var component = [];
  for (var i = 0; i < childs.length; i++) {
    component.push(<View style={{width: Dimensions.get('window').width / size, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 15, textAlign: 'center'}}>{titleChilds[i]}</Text>
      <Text style={{textTransform: 'uppercase', color: '#adccea', fontSize: 18}}>{childs[i]}</Text>
    </View>);
  }

  return component;
}
