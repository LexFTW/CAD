import * as React from 'react';

import { ScrollView, View, Text } from 'react-native'
import { ActivityIndicator, Colors, IconButton } from 'react-native-paper';

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

    this.isChart(true);
    this.isMail(true);
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

  renderChart(){
    if(!this.state.chart){
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} style={{paddingVertical: 50}} />
    }

    return <HistoryChart labels={this.state.labels} values={this.state.values} />
  }

  renderReports(){
    if(this.state.reports == false){
      return <ActivityIndicator animating={true} size={'large'} color={Colors.blue700} style={{paddingVertical: 50}} />
    }

    return <HistoryTabView onTrigger={this.setCollection.bind(this)} date={this.state.date}/>
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
            {this.state.mail != false ? <MailComponent to={'lexmengual@gmail.com'} subject={'Testing'} body={'testeo'} /> : <Text>''</Text>}
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
