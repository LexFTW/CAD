import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Colors } from 'react-native-paper';

export default function NavigationTop(props) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      marginBottom: 250,
    },
    navigationTop:{
      paddingTop: 20,
      justifyContent: 'center',
      marginBottom: 25,
      backgroundColor: '#2069b2',
      borderRadius: 0,
    },
    navigationTitle:{
      textAlign: 'center',
    }
  });

  return (
    <View style={styles.container}>
      <Card style={styles.navigationTop}>
        <Card.Title titleStyle={{color: 'white'}} title={props.title} style={styles.navigationTitle}/>
      </Card>
    </View>
  );
}
