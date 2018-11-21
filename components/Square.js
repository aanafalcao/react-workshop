import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        let size = this.props.size;
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
        let type = this.props.type;

        if (type == 0) {
            return (<View style={this.squareStyles.board}></View>)
        }else if (type == 1) {
            return (<View style={this.squareStyles.snake}></View>)
        }else{
            return (<View style={this.squareStyles.food}></View>)
        }
    }

}
