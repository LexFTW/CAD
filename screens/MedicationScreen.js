import React, {Component} from 'react';

import { Text, ScrollView, View, TextInput, Alert, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

import Resources from './../config/resources/resources';

import NavigationTop from './../components/NavigationTop';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/UserStyles';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default class MedicationScreen extends Component {

  constructor(props){
    super(props);
    this.state = ({
      interval_min: "",
      interval_max: "",
      hc_brekfast: "",
      hc_food: "",
      hc_snack: "",
      hc_dinner: "",
      insulin_brekfast: "",
      insulin_food: "",
      insulin_snack: "",
      insulin_dinner: "",
      range_over_hc: "",
      range_under_hc: "",
      range_over_insulin: "",
      range_under_insulin: "",
    });
  }

  async componentDidMount(){
    const user = firebase.auth().currentUser;

    await firestore
    .collection('userParametersMedication')
    .doc(user.uid)
    .get()
    .then(doc => {
      if (doc.exists) {
        this.setState({interval_max: doc.data().GlucoseIntervalMax});
        this.setState({interval_min: doc.data().GlucoseIntervalMin});
        this.setState({hc_brekfast: doc.data().HCBaseBrekfast});
        this.setState({hc_food: doc.data().HCBaseFood});
        this.setState({hc_snack: doc.data().HCBaseSnack});
        this.setState({hc_dinner: doc.data().HCBaseDinner});
        this.setState({insulin_brekfast: doc.data().InsulinBaseBrekfast});
        this.setState({insulin_food: doc.data().InsulinBaseFood});
        this.setState({insulin_snack: doc.data().InsulinBaseSnack});
        this.setState({insulin_dinner: doc.data().InsulinBaseDinner});
        this.setState({range_over_hc: doc.data().RangeHCHypers});
        this.setState({range_under_hc: doc.data().RangeHCHipos});
        this.setState({range_over_insulin: doc.data().RangeInsulinHypers});
        this.setState({range_under_insulin: doc.data().RangeInsulinHipos});
        this.setState({diabetes_type: doc.data().Type});
      }
    });
  }

  async saveChangesInFirestore(){
    const user = firebase.auth().currentUser;
    const doc = firestore.collection('userParametersMedication').doc(user.uid);

    await doc.set({
      GlucoseIntervalMax: this.state.interval_max,
      GlucoseIntervalMin: this.state.interval_min,
      HCBaseBrekfast: this.state.hc_brekfast,
      HCBaseDinner: this.state.hc_dinner,
      HCBaseFood: this.state.hc_food,
      HCBaseSnack: this.state.hc_snack,
      InsulinBaseBrekfast: this.state.insulin_brekfast,
      InsulinBaseDinner: this.state.insulin_dinner,
      InsulinBaseFood: this.state.insulin_food,
      InsulinBaseSnack: this.state.insulin_snack,
      RangeHCHipos: this.state.range_under_hc,
      RangeHCHypers: this.state.range_over_hc,
      RangeInsulinHipos: this.state.range_under_insulin,
      RangeInsulinHypers: this.state.range_over_insulin,
    });
  }

  render(){
    return (
        <View style={styles.containterBody}>
          <View style={styles.containerComp}>
            <HistoryComponentX2 title={Resources.MEDICATION_GLUCOSE_INTERVAL_MAX} value={this.state.interval_max} change={interval_max => this.setState({ interval_max })} />
            <HistoryComponentX2 title={Resources.MEDICATION_GLUCOSE_INTERVAL_MIN} value={this.state.interval_min} change={interval_min => this.setState({ interval_min })} />
          </View>
          <View style={styles.containerComp}>
            <HistoryComponentX4 title={Resources.MEDICATION_HC_BASE_BREKFAST} value={this.state.hc_brekfast} change={hc_brekfast => this.setState({ hc_brekfast })} />
            <HistoryComponentX4 title={Resources.MEDICATION_HC_BASE_FOOD} value={this.state.hc_food} change={hc_food => this.setState({ hc_food })} />
            <HistoryComponentX4 title={Resources.MEDICATION_HC_BASE_SNACK} value={this.state.hc_snack} change={hc_snack => this.setState({ hc_snack })} />
            <HistoryComponentX4 title={Resources.MEDICATION_HC_BASE_DINNER} value={this.state.hc_dinner} change={hc_dinner => this.setState({ hc_dinner })} />
          </View>
          <View style={styles.containerComp}>
            <HistoryComponentX4 title={Resources.MEDICATION_INSULIN_BASE_BREKFAST} value={this.state.insulin_brekfast} change={insulin_brekfast => this.setState({ insulin_brekfast })} />
            <HistoryComponentX4 title={Resources.MEDICATION_INSULIN_BASE_FOOD} value={this.state.insulin_food} change={insulin_food => this.setState({ insulin_food })} />
            <HistoryComponentX4 title={Resources.MEDICATION_INSULIN_BASE_SNACK} value={this.state.insulin_snack} change={insulin_snack => this.setState({ insulin_snack })} />
            <HistoryComponentX4 title={Resources.MEDICATION_INSULIN_BASE_DINNER} value={this.state.insulin_dinner} change={insulin_dinner => this.setState({ insulin_dinner })} />
          </View>
          <View style={styles.containerComp}>
            <HistoryComponentX2 title={Resources.MEDICATION_RANGE_HC_UNDER_INTERVAL_MIN} value={this.state.range_under_hc} change={range_under_hc => this.setState({ range_under_hc })} />
            <HistoryComponentX2 title={Resources.MEDICATION_RANGE_HC_OVER_INTERVAL_MAX} value={this.state.range_over_hc} change={range_over_hc => this.setState({ range_over_hc })} />
          </View>
          <View style={styles.containerComp}>
            <HistoryComponentX2 title={Resources.MEDICATION_RANGE_INSULIN_UNDER_INTERVAL_MIN} value={this.state.range_under_insulin} change={range_under_insulin => this.setState({ range_under_insulin })} />
            <HistoryComponentX2 title={Resources.MEDICATION_RANGE_INSULIN_OVER_INTERVAL_MAX} value={this.state.range_over_insulin} change={range_over_insulin => this.setState({ range_over_insulin })} />
          </View>
          <Button
            style={base.btnPrimary}
            color={'white'}
            onPress={() => this.saveChangesInFirestore()}
          >
            Insertar
          </Button>
        </View>
    );
  }

}

function HistoryComponentX2({title, value, change}) {
  return (
      <View style={{width: 200, height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd'}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 10, textAlign: 'center'}}>{title}</Text>
        <TextInput style={{textTransform: 'uppercase', color: '#8db1d3', fontSize: 15, textAlign: 'center', paddingVertical: 5}} keyboardType={'numeric'} placeholder={'Value'} placeholderTextColor={'#444'} value={value} onChangeText={change}/>
      </View>
  )
}

function HistoryComponentX4({title, value, change}) {
  return (
      <View style={{width: 100, height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ddd'}}>
        <Text style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#2069b2', fontSize: 10, textAlign: 'center'}}>{title}</Text>
        <TextInput style={{textTransform: 'uppercase', color: '#8db1d3', fontSize: 15, textAlign: 'center', paddingVertical: 5}} keyboardType={'numeric'} placeholder={'Value'} placeholderTextColor={'#444'} value={value} onChangeText={change}/>
      </View>
  )
}


/*
<View style={styles.containterBody}>
          <View style={styles.containerComp}>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_GLUCOSE_INTERVAL_MAX}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.interval_max} placeholderTextColor={"#444"} onChangeText={interval_max => this.setState({ interval_max })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_GLUCOSE_INTERVAL_MIN}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.interval_min} placeholderTextColor={"#444"} onChangeText={interval_min => this.setState({ interval_min })} />
            </View>
          </View>
          <View style={styles.containerComp}>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_BREKFAST}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_brekfast} placeholderTextColor={"#444"} onChangeText={hc_brekfast => this.setState({ hc_brekfast })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_FOOD}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_food} placeholderTextColor={"#444"} onChangeText={hc_food => this.setState({ hc_food })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_SNACK}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_snack} placeholderTextColor={"#444"} onChangeText={hc_snack => this.setState({ hc_snack })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_HC_BASE_DINNER}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.hc_dinner} placeholderTextColor={"#444"} onChangeText={hc_dinner => this.setState({ hc_dinner })} />
            </View>
          </View>
          <View style={styles.containerComp}>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_BREKFAST}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_brekfast} placeholderTextColor={"#444"} onChangeText={insulin_brekfast => this.setState({ insulin_brekfast })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_FOOD}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_food} placeholderTextColor={"#444"} onChangeText={insulin_food => this.setState({ insulin_food })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_SNACK}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_snack} placeholderTextColor={"#444"} onChangeText={insulin_snack => this.setState({ insulin_snack })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_INSULIN_BASE_DINNER}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.insulin_dinner} placeholderTextColor={"#444"} onChangeText={insulin_dinner => this.setState({ insulin_dinner })} />
            </View>
          </View>
          <View style={styles.containerComp}>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_RANGE_HC_UNDER_INTERVAL_MIN}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_under_hc} placeholderTextColor={"#444"} onChangeText={range_under_hc => this.setState({ range_under_hc })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_RANGE_HC_OVER_INTERVAL_MAX}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_over_hc} placeholderTextColor={"#444"} onChangeText={range_over_hc => this.setState({ range_over_hc })} />
            </View>
          </View>
          <View style={styles.containerComp}>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_RANGE_INSULIN_UNDER_INTERVAL_MIN}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_under_insulin} placeholderTextColor={"#444"} onChangeText={range_under_insulin => this.setState({ range_under_insulin })} />
            </View>
            <View style={styles.component}>
              <Text style={styles.key}>{Resources.MEDICATION_RANGE_INSULIN_OVER_INTERVAL_MAX}</Text>
              <TextInput keyboardType={'numeric'} placeholder={'Values'} value={this.state.range_over_insulin} placeholderTextColor={"#444"} onChangeText={range_over_insulin => this.setState({ range_over_insulin })} />
            </View>
          </View>
*/