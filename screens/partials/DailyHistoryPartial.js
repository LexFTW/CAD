import * as React from 'react';

import { SafeAreaView, View } from 'react-native';

import { HistoryComponent, MultipleHistoryComponent } from './../../components/HistoryComponent';

import firebase from './../../config/firebase';
import 'firebase/firestore';

import Resources from './../../config/resources/resources';

const firestore = firebase.firestore();

export default class DailyHistoryPartial extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      data: [],
      times: [],
    }
  }

  async componentDidMount(){
    await this.getCollectionHistory();
    this.props.onTrigger(this.state.data, this.state.times);
    this.props.returnState(this.state.eag, this.state.hba1c);
  }

  async componentDidUpdate(oldProps){
    if(oldProps.date != this.props.date){
      await this.getCollectionHistory();
      this.props.onTrigger(this.state.data, this.state.times);
      this.props.returnState(this.state.eag, this.state.hba1c);
    }
  }

  async getCollectionHistory(){
    const auth = firebase.auth().currentUser;

    await firestore
    .collection('userHistory')
    .where('uid', '==', auth.uid)
    .where('createdAt', '==', this.props.date)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        var currentDocument = doc.data();
        this.setCollection(currentDocument);
        this.generateReport();
      });

      })
    .catch(error => {
      console.warn(error);
    });
  }

  setCollection(doc){
    this.setState({data: doc.data});
    this.setState({times: doc.time});
  }

  generateReport(){
    const average = this.getGlucoseAverage();

    this.setEag(average);
    this.setHba1c(average);
  }

  setHba1c(average){
    this.setState({hba1c: ((46.7 + average) / 28.7).toFixed(2) });
  }

  setEag(average){
    this.setState({eag: (average).toFixed(2) });
  }

  getGlucoseAverage(){
    var average = 0;
    for (var i = 0; i < this.state.data.length; i++) {
      average += this.state.data[i];
    }

    average = average / this.state.data.length;

    return average;
  }

  render(){
    return(
      <SafeAreaView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <HistoryComponent title={'eag'} value={this.state.eag} />
          <HistoryComponent title={'hba1c'} value={this.state.hba1c} />
          <MultipleHistoryComponent title={Resources.HISTORY_REPORT_HYPERGLYCEMIA} value={0} titleChilds={[Resources.BREAKFAST, Resources.FOOD, Resources.SNACK, Resources.DINNER]} childs={[0,0,0,0]}/>
          <MultipleHistoryComponent title={Resources.HISTORY_REPORT_HYPOGLYCEMIA} value={0} titleChilds={[Resources.BREAKFAST, Resources.FOOD, Resources.SNACK, Resources.DINNER]} childs={[0,0,0,0]}/>
        </View>
      </SafeAreaView>
    );
  }

}
