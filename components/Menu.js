import React from 'react';
import {Text, View, Image} from 'react-native';
import { Link } from "react-router-native";
import {stylesMenu} from './styleSheets'

export default class Menu extends React.Component {
    render() {
        return (
            <View style={stylesMenu.container}>
                <Image source={require('../assets/snakeGame.png')} style={stylesMenu.img} resizeMode='contain'></Image>
                <Text style={stylesMenu.textString} >My first react app</Text>
                <Link to="/game"  style={stylesMenu.link}>
                    <Text>Play</Text>
                </Link>
            </View>
        );
    }
}
