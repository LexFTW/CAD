import * as React from 'react';

import { View } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import Resources from './../config/resources/resources';

import DailyHistoryPartial from './../screens/partials/DailyHistoryPartial';

export default class HistoryTabView extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      chart: false,
      index: 0,
      routes: [
        { key: 'first', title: Resources.HISTORYTABVIEW_TITLE_ROUTE_DAILY  },
      ],
    };

    this.renderScene = this.renderScene.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  setDaily(data, times){
    this.props.onTrigger(data, times);

    this.state.dailyData = data;
    this.state.dailyTimes = times;
    this.isChart(true)
  }

  setMonthly(data, times){
    this.state.monthlyData = data;
    this.state.monthlyTimes = times;
    this.isChart(true)
  }

  isChart(chart){
    this.setState({chart: chart});
  }

  setStateFromPartial(eag, hba1c) {
    this.props.onReport(eag, hba1c);
  }

  renderScene({ route }){
    if (!route.key) return null;

    switch(route.key){
      case 'first':
        return <DailyHistoryPartial returnState={this.setStateFromPartial.bind(this)} onTrigger={this.setDaily.bind(this)} date={this.props.date} />;
    }
  }

  renderLabel({ route }, props) {
    const { index } = this.state;
    const selected = route.key === props.navigationState.routes[index].key;

    return (
      <View>
        <Text>
          {route.title.toUpperCase()}
        </Text>
      </View>
    );
  }

  renderTab() {
    return (
      <TabView
        navigationState={this.state}
        onIndexChange={this.onTabChange}
        renderScene={this.renderScene}
        renderTabBar={props => (
          <TabBar
            {... props}
            indicatorStyle={{ backgroundColor: 'yellow' }}
            style={{ backgroundColor: '#2069b2' }}
          />
        )}
      />
    );
  }

  onTabChange(index) {
   this.setState({ index });
   this.setValuesToChart(index);
  }

  setValuesToChart(index){
    if(this.state.chart){
      switch (index) {
        case 0:
            this.props.onTrigger(this.state.dailyData, this.state.dailyTimes);
          break;
        default:
          this.props.onTrigger(this.state.monthlyData, this.state.monthlyTimes);
      }
    }
  }

  render(){
    return(
      <View>
        {this.renderTab()}
      </View>
    );
  }

}
