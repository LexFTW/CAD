import * as React from 'react';

import { View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../components/TextInputIcon';

export default class TextInputLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            resources: props.resources,
            iconName: props.iconName,
            textContentType: props.textContentType,
            setState: props.setState,
            label: props.label,
        }
    }

    onChangeTextInput(name, value) {
        this.props.onChange(name, value);
        this.setState({value: value});
    }

    render() {
        return (
            <View>
                <Icon name={this.state.iconName} size={28} style={styles.inputIcon}/>
                <TextInput
                    placeholder={this.state.resources}
                    placeholderTextColor="#adadad"
                    underlineColorAndroid='transparent'
                    textContentType={this.state.textContentType}
                    secureTextEntry={false}
                    style={styles.input}
                    value={this.state.value}
                    onChangeText={(value) => this.onChangeTextInput(this.state.label, value)}
                />
            </View>
        )
    }
}