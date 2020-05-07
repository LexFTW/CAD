import React, { Component } from 'react';

import { Alert, Text, TextInput, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default class HistoryChart extends Component {

    constructor(props) {
        super(props);
        this.state = props.state;
    }

    render() {
        return (
            <View style={{marginTop: 5}}>
                <BarChart
                    data={{
                        labels: [this.state.brekfastTime, this.state.foodTime, this.state.snackTime, this.state.dinnerTime],
                        datasets: [
                        {
                            data: [
                            this.state.brekfastValue,
                            this.state.foodValue,
                            this.state.snackValue,
                            this.state.dinnerValue,
                           ]
                        }
                        ]
                    }}
                    width={Dimensions.get("window").width}
                    height={300}
                    yAxisInterval={1}
                    chartConfig={{
                        backgroundGradientFrom: "#2069b2",
                        backgroundGradientTo: "#2069b2",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    bezier
                />
            </View>
        )
    }
}
