import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Square from './components/Square';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  container: {
      backgroundColor: '#a5d6a7',
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      height:'100%'
  },
  text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: '#75a478', 
      fontSize: 45
  }
});