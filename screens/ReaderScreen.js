import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Button} from 'react-native-paper';
import NavigationTop from './../components/NavigationTop';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';
import  base  from '../constants/styles/Styles';
import  styles  from '../constants/styles/ReaderStyles';
import Resources from './../config/resources/resources';

export default class ReaderScreen extends React.Component {

  render(){
    return (
      <SafeAreaView style={base.container}>
        <NavigationTop
          title={Resources.READER_HEADER}
        />
        <TabBarIconFontAwesome style={styles.icon} name="wifi" size={200} color="rgb(97,174,172)" />
        <Text style={styles.textIcon}>{Resources.READER_TITLE}</Text>
        <Button
          mode="contained"
          style={{backgroundColor: '#2069b2', borderRadius: 0, marginTop: 35}}
        >
          <Text style={{fontSize: 25}}>{Resources.READER_TEXT_BUTTON}</Text>
        </Button>
      </SafeAreaView>
    );
  }
}
