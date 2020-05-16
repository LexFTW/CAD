import React, { Component } from 'react';

import { ScrollView, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

export default class HistoryChart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.disableYellowBox = true;
        return (
            <ScrollView horizontal={true} style={{marginTop: 5}}>
                <BarChart
                    data={{
                        labels: this.props.labels,
                        datasets: [
                        {
                            data: this.props.values
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
