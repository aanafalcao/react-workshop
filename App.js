import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import Game from './components/Game.js';
import Menu from './components/Menu.js';
import Lose from './components/Lose.js';
import Win from './components/Win.js';


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={Menu} />
          <Route path="/game" component={Game} />
          <Route path="/lose" component={Lose} />
          <Route path="/win" component={Win} />
          
        </View>
      </NativeRouter>
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
