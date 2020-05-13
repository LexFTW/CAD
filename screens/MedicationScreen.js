import React, {Component} from 'react';

import { View } from 'react-native';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';

import Resources from './../config/resources/resources';

import TextInputBox from './../components/TextInputBox';

import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/UserStyles';

import firebase from '../config/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default class MedicationScreen extends Component {

  constructor(props){
    super(props);
    this.state = ({
      render: false,
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
        this.setState({render: true});
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

  async onChangeTextInput(name, value){
    await this.setState({[name]: value});
  }

  isRender(){
    if(!this.state.render){
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} style={{marginVertical: 25}} />
    }

    return <View>
      <View style={styles.containerComp}>
        <TextInputBox class={'col_2'} title={Resources.MEDICATION_GLUCOSE_INTERVAL_MAX} label={'interval_max'} value={this.state.interval_max} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_2'} title={Resources.MEDICATION_GLUCOSE_INTERVAL_MAX} label={'interval_min'} value={this.state.interval_min} onChange={this.onChangeTextInput.bind(this)} />
      </View>
      <View style={styles.containerComp}>
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_HC_BASE_BREKFAST} label={'hc_brekfast'} value={this.state.hc_brekfast} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_HC_BASE_FOOD} label={'hc_food'} value={this.state.hc_food} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_HC_BASE_SNACK} label={'hc_snack'} value={this.state.hc_snack} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_HC_BASE_DINNER} label={'hc_dinner'} value={this.state.hc_dinner} onChange={this.onChangeTextInput.bind(this)} />
      </View>
      <View style={styles.containerComp}>
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_INSULIN_BASE_BREKFAST} label={'insulin_brekfast'} value={this.state.insulin_brekfast} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_INSULIN_BASE_FOOD} label={'insulin_food'} value={this.state.insulin_food} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_INSULIN_BASE_SNACK} label={'insulin_snack'} value={this.state.insulin_snack} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_4'} title={Resources.MEDICATION_INSULIN_BASE_DINNER} label={'insulin_dinner'} value={this.state.insulin_dinner} onChange={this.onChangeTextInput.bind(this)} />
      </View>
      <View style={styles.containerComp}>
        <TextInputBox class={'col_2'} title={Resources.MEDICATION_RANGE_HC_UNDER_INTERVAL_MIN} label={'range_under_hc'} value={this.state.range_under_hc} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_2'} title={Resources.MEDICATION_RANGE_HC_OVER_INTERVAL_MAX} label={'range_over_hc'} value={this.state.range_over_hc} onChange={this.onChangeTextInput.bind(this)} />
      </View>
      <View style={styles.containerComp}>
        <TextInputBox class={'col_2'} title={Resources.MEDICATION_RANGE_INSULIN_UNDER_INTERVAL_MIN} label={'range_under_insulin'} value={this.state.range_under_insulin} onChange={this.onChangeTextInput.bind(this)} />
        <TextInputBox class={'col_2'} title={Resources.MEDICATION_RANGE_INSULIN_OVER_INTERVAL_MAX} label={'range_over_insulin'} value={this.state.range_over_insulin} onChange={this.onChangeTextInput.bind(this)} />
      </View>
      <Button
        style={base.btnPrimary}
        color={'white'}
        onPress={() => this.saveChangesInFirestore()}
      >
        {Resources.MEDICATION_SAVE_CHANGES}
      </Button>
    </View>
  }

  render(){
    return (
        <View style={styles.containterBody}>
          {this.isRender()}
        </View>
    );
  }
}
