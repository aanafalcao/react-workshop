import React from 'react';
import {Text, View, StyleSheet, Dimensions, PanResponder} from 'react-native';
import  {Redirect}  from "react-router-native";
import {gameStyles} from "./styleSheets.js"
import Square from './Square.js'

/*
board:  0 => empty board
        1 => snake
        2 => Food

win:    0 => Game
        1 => WIN
        -1 => LOSE
*/

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        const width = Dimensions.get('window').width - 20;
        const speed = 300;
        const gridSize = 18;

        let board = new Array(gridSize);
        for (let i = 0; i < gridSize; i++){
            board[i] = (new Array(gridSize)).fill(0);
        }

        //let snake = this.generateRandomPosition(gridSize);
        //Cabeça da cobra
        let snake =[Math.round(gridSize/2), Math.round(gridSize/2)];
        board[snake[0]][snake[1]] = 1;

        let food = this.generateFood(board, gridSize);
        board[food[0]][food[1]] = 2;

        //Posição de todas as partes da cobra
        let snakeBody = [];
        snakeBody.push(snake);

        //Inicialmente a cobra anda para a direita
        //Direção [x, y]
        let snakeDirection = [0, 1];


        this.state = {
            gridSize: gridSize,
            food: food,
            width: width,
            board: board,
            snakeBody: snakeBody,
            speed: speed,
            direction: snakeDirection,
            score: 0,
            win: 0
        }

        // handle Swipes
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
            },
            onPanResponderMove: (evt, gestureState) => {
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)){
                    console.log("Movimento sexy! Horizontal")
                  if (gestureState.dx > 0){
                      this.onSwipeRight();
                  }else{
                      this.onSwipeLeft();
                  }
                }else{
                  if (gestureState.dy > 0){
                      this.onSwipeDown();
                  }else{
                      this.onSwipeUp();
                  }
                }  
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
              return true;
            },
          });
    }

    componentDidMount() {
        let intervalId = setInterval(() => this.update(), this.state.speed);
        this.setState({intervalId: intervalId});  
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    update() {
        let snakeBody = this.state.snakeBody;
        let oldSnakePosition = snakeBody[snakeBody.length - 1].slice();
        let direction = this.state.direction;
        let score = this.state.score;
        let newSnakePosition = []

        newSnakePosition.push((oldSnakePosition[0] + direction[0] + this.state.gridSize) % this.state.gridSize);
        newSnakePosition.push((oldSnakePosition[1] + direction[1] + this.state.gridSize) % this.state.gridSize);

        let board = this.state.board.slice();

        if (board[newSnakePosition[0]][newSnakePosition[1]] == 1){
            // Loose! bit it's own tail :(
            this.state.win = -1;
        }else{
            if (board[newSnakePosition[0]][newSnakePosition[1]] == 2){
                let food = this.generateFood(board, this.state.gridSize);
                board[food[0]][food[1]] = 2;
                score++;
            }else{
                board[snakeBody[0][0]][snakeBody[0][1]] = 0;
                snakeBody.shift();
            }

            board[newSnakePosition[0]][newSnakePosition[1]] = 1;
            snakeBody.push(newSnakePosition);
        }
        this.setState(prevState => ({
            board:board,
            snakeBody:snakeBody,
            score: score
        }));
    }


    render() {
        if (this.state.win == 1){
            return (<View><Redirect to="/win"/></View>);
        }else if (this.state.win == -1) {
            return (<View><Redirect to="/lose"/></View>);
        }



        return (
            <View {...this._panResponder.panHandlers}>
                <Text style={gameStyles.score}>Score: {this.state.score}</Text>
                {this.renderBoard()}
            </View>
        );
    }

    renderSquare(type, id) {
        let size = Math.round(this.state.width / this.state.gridSize);
        return(<View key={id}><Square size={size} type={type}></Square></View>);
    }

    renderRow(j) {
        let squares = [];
        for (let i = 0; i < this.state.gridSize; i++){
            squares.push(<View key={i}>{this.renderSquare(this.state.board[i][j], i)}</View>)
        }
        return(<View>{squares}</View>)
    }

    renderBoard() {
        let rows = [];
        for (let i = 0; i < this.state.gridSize; i++){
            rows.push(<View key={i}>{this.renderRow(i)}</View>)
        }
        return(<View style={gameStyles.grid}>{rows}</View>);
    }

    onSwipeUp() {
        if (this.state.direction[0] != 1)
            this.state.direction = [-1, 0];
    }

    onSwipeDown() {
        if (this.state.direction[0] != -1)
            this.state.direction = [1, 0];
    }

    onSwipeLeft() {
        if (this.state.direction[1] != 1)
            this.state.direction = [0, -1];
    }

    onSwipeRight() {
        if (this.state.direction[1] != -1)
            this.state.direction = [0, 1];
    }

    generateColor () {
        return '#' +  Math.random().toString(16).substr(-6);
    }

    generateRandomNumber(max) {
        let min = 0;
        return Math.round(min + Math.random() * (max - min));
    }

    generateRandomPosition(max){
        return [this.generateRandomNumber(max), this.generateRandomNumber(max)];
    }

    generateFood(board, max) {
        let foodLocations = []

        // generate possible food locations
        for (let  i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                if (board[i][j] == 0){
                    foodLocations.push([i, j]);
                }
            }
        }

        if (foodLocations.length == 0){
            // WIN
            this.state.win = 1;
            return;
        }

        let loc = this.generateRandomNumber(foodLocations.length);
        // console.log(foodLocations[loc]);
        return foodLocations[loc];
    }

}
