import * as React from 'react';

import { View } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class DateTimePicker extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isVisible: false,
    }
  }

  async handleConfirm(date){
    await this.isVisible(false);

    this.props.onClick(date);
  }

  isVisible(isVisible){
    this.setState({isVisible: isVisible});
  }

  render(){
    console.disableYellowBox = true;
    return(
      <View>
        <IconButton
          icon={'calendar'}
          size={20}
          color={Colors.white}
          onPress={() => this.isVisible(true)}
        />

        <DateTimePickerModal
          isVisible={this.state.isVisible}
          mode="date"
          onConfirm={(date) => this.handleConfirm(date)}
          onCancel={() => this.isVisible(false)}
        />
      </View>
    );
  }

}
