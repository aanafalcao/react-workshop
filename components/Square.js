import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        let size = 20;
        this.squareStyles = StyleSheet.create({
            board: {
                width: size,
                height: size
            },
            snake: {
                width: size,
                height: size,
                backgroundColor: '#29b6f6'
            },
            food: {
                width: size,
                height: size,
                backgroundColor: '#FFF',
                borderRadius: size
            }
        });
    }
    render() {
        // console.log(this.squareStyles);
        return(<View></View>);
    }

}
