import * as React from 'react';

import { Text, TextInput, Button, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import { IconButton, Colors, Avatar } from 'react-native-paper';

import  styles  from '../constants/styles/UserStyles';

import Resources from './../config/resources/resources';

import DailyReportComponent from './../components/DailyReportComponent';
import MonthlyReportComponent from './../components/MonthlyReportComponent';

export default class HistoryTabView extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'DAILY' },
        { key: 'second', title: 'MONTHLY' },
        { key: 'third', title: 'QUARTER' },
      ],
    };

    this.times = props.times;
    this.values = props.values;

    this.renderScene = this.renderScene.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(index) {
    this.setState({ index });
  }

  renderScene({ route }){
    if (!route.key) return null;

    switch(route.key){
      case 'first':
        return <DailyReportComponent times={this.times} values={this.values} />;
      case 'second':
        return <MonthlyReportComponent times={this.times} values={this.values} />;
      case 'third':
        return <MonthlyReportComponent times={this.times} values={this.values} />;
      default:
        return <DailyReportComponent times={this.times} values={this.values} />;
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

  render() {
    return (
      <View>
        {this.renderTab()}
      </View>
    );
  }
}
