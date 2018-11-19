import React from 'react';
import {Text, View} from 'react-native';
import { Link } from "react-router-native";
import {stylesWin} from './styleSheets.js'

export default class Win extends React.Component {
    render() {
        return (
            <View style={stylesWin.container}> 
                <Link to="/lose" style={stylesWin.link} >
                    <Text style={stylesWin.text}>You won!</Text>
                </Link>
            </View>
        );
    }
}
  