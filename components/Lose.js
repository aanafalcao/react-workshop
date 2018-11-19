import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {stylesLose} from './styleSheets.js'

import { Link } from "react-router-native";

export default class Lose extends React.Component {
    render() {
        return (
            <View style={stylesLose.container}> 
                <Link to="/" style={stylesLose.link} >
                    <Text style={stylesLose.text}>You lost!</Text>
                </Link>
            </View>
        );
    }
}


