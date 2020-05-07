import React, { Component } from 'react';

import { Alert, Text, TextInput, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default class HistoryChart extends Component {

    constructor(props) {
        super(props);
        this.labels = props.labels;
        this.values = props.values;
    }

    render() {
        return (
            <ScrollView horizontal={true} style={{marginTop: 5}}>
                <BarChart
                    data={{
                        labels: this.labels,
                        datasets: [
                        {
                            data: this.values
                        }
                        ]
                    }}
                    width={Dimensions.get("window").width}
                    height={300}
                    chartConfig={{
                        backgroundGradientFrom: "#2069b2",
                        backgroundGradientTo: "#2069b2",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    bezier
                />
            </ScrollView>
        )
    }
}
