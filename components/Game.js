import React from 'react';
 
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
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
              return true;
            },
          });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
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
        
        return (
            <View style={gameStyles.container} >
            </View>
        );
    }

    renderSquare(type, id) {
        
    }

    renderRow(j) {
        
    }

    renderBoard() {
        
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