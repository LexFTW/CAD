import * as React from 'react';

import { View, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../components/TextInputIcon';

export default class TextInputRegisterPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            resources: props.resources,
            iconName: props.iconName,
            textContentType: props.textContentType,
            setState: props.setState,
            label: props.label,
            showPassword: props.showPassword,
        }
    }

    onChangeTextInput(name, value) {
        this.props.onChange(name, value);
        this.setState({value: value});
    }

    showPasswordInTheInput(){
        if(this.state.showPassword){
            this.setState({showPassword: false})
        }else{
            this.setState({showPassword: true})
        }
    }

    render() {
        return (
            <View>
                <Icon name={'lock'} size={28} style={styles.inputIcon}/>
                <TextInput
                    placeholder={this.state.resources}
                    placeholderTextColor="#adadad"
                    underlineColorAndroid='transparent'
                    textContentType={this.state.textContentType}
                    secureTextEntry={this.state.showPassword}
                    showPassword={false}
                    style={styles.input}
                    value={this.state.value}
                    onChangeText={(value) => this.onChangeTextInput(this.state.label, value)}
                />
                <Button
                    icon="eye"
                    mode="contained"
                    style={styles.inputIconRight}
                    labelStyle={{marginRight: 0}}
                    onPress={() => this.showPasswordInTheInput(this)}
                />
            </View>
        )
    }
}