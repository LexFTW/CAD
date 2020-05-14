import * as React from 'react';

import { Image, ScrollView, View, Text, Alert } from 'react-native'
import { ActivityIndicator, Colors, IconButton } from 'react-native-paper';

import Resources from './../config/resources/resources';

import DateTimePicker from './../components/DateTimePicker';
import HistoryChart from './../components/HistoryChart';
import HistoryTabView from './../components/HistoryTabView';
import MailComponent from './../components/MailComponent';

import  base  from '../constants/styles/Styles';

import moment from 'moment';


export default class HistoryScreen extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      date: '',
      values: [],
      labels: [],
      loading: false,
      chart: false,
      report: false,
      mail: false,
      statePartialEag: '',
      statePartialHba1c: '',
      noDataFound: true,
    }
  }

  async componentDidMount(){
    await this.componentSetDate();
    await this.isReport(true);
  }

  componentSetDate(){
    const date = this.getLastDay();
    const format = this.setFormatDate(date);

    this.setDate(format);
    this.isLoading(true);
  }

  getDateFromDatePicker(date){
    const format = this.setFormatDate(date);

    this.setDate(format);
  }

  getLastDay(){
    const date = new Date();

    return date.setDate(date.getDate() - 1);
  }

  setFormatDate(date){
    return moment(date).format('MM-DD-yyyy');
  }

  setDate(date){
    this.setState({date: date})
  }

  setValuesChart(values){
    this.setState({values: values});
  }

  setLabelsChart(labels){
    this.setState({labels: labels});
  }

  setCollection(data, times){
    this.setState.labels = [];
    this.setState.values = [];

    this.setLabelsChart(times);
    this.setValuesChart(data);

    this.thereAreLabels();
  }
  
  thereAreLabels() {
    if (this.state.labels.length > 0) {
      this.isChart(true);
    }

    this.setState({noDataFound: false})
  }

  isLoading(loading){
    this.setState({loading: loading});
  }

  isChart(chart){
    this.setState({chart: chart});
  }

  isMail(mail){
    this.setState({mail: mail});
  }

  isReport(report){
    this.setState({report: report});
  }

  setStateFromPartial(eag, hba1c) {
    this.setState({eag: eag});
    this.setState({hba1c: hba1c});

    this.isMail(true);
  }

  getBodyForMail(){
    var body = Resources.MAIL_BODY_DATE_1 + this.state.date  + Resources.MAIL_BODY_DATE_2;
    body += Resources.MAIL_BODY_EAG + this.state.eag;
    body += Resources.MAIL_BODY_HBA1C + this.state.hba1c;
    body += Resources.MAIL_BODY_HYPER + 0;
    body += Resources.MAIL_BODY_HYPO + 0;
    body += Resources.MAIL_BODY_END;

    return body;
  }

  renderChart(){
    if(!this.state.chart){
      if (this.state.noDataFound == false) {
      return <Text style={{marginVertical: 50, fontSize: 20, color: 'white', textAlign: 'center'}}>{Resources.HISTORY_NO_DATA_FOUND}</Text>
      }
      return <ActivityIndicator animating={true} size={'large'} color={Colors.white} style={{paddingVertical: 50}} />
    }
    
    return <HistoryChart labels={this.state.labels} values={this.state.values} />
  }

  renderReports(){
    if(this.state.reports == false){
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} style={{paddingVertical: 50}} />
    }

    return <HistoryTabView onReport={this.setStateFromPartial.bind(this)} onTrigger={this.setCollection.bind(this)} date={this.state.date}/>
  }

  loadingScreen(){
    if(!this.state.loading){
      return <View style={base.container}>
        <ActivityIndicator animating={true} size={15} color={Colors.blue700} />
      </View>
    }

    return <View>
      <View style={{backgroundColor: '#2069b2', paddingVertical: 10}}>
        <View style={{paddingHorizontal: 20, paddingTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <DateTimePicker onClick={this.getDateFromDatePicker.bind(this)}/>
            {this.state.mail != false ? <MailComponent body={this.getBodyForMail()} /> : <Text>''</Text>}
          </View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{this.state.date}</Text>
        </View>
        {this.renderChart()}
      </View>
      {this.renderReports()}
    </View>
  }

  render(){
    return(
      <ScrollView>
        {this.loadingScreen()}
      </ScrollView>
    );
  }

}
