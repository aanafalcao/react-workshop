import {StyleSheet} from 'react-native'
export const gameStyles = StyleSheet.create({
    container: {
        backgroundColor: '#424242',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    grid : {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#29b6f6'
    },
    score: {
        fontSize: 20,
        color: '#29b6f6',
        padding: 10
    }
});


export const stylesWin  = StyleSheet.create({
    container: {
        backgroundColor: '#a5d6a7',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    link: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },  
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#75a478', 
        fontSize: 45
    }

});

export const stylesLose  = StyleSheet.create({
    container: {
        backgroundColor: '#f05545',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    link: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },  
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#b71c1c', 
        fontSize: 45
    }

});


export const stylesMenu = StyleSheet.create({
    container: {
        backgroundColor: '#424242',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    link: {
        backgroundColor:'#29b6f6',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 2
    },  
    textLink: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#424242', 
        fontSize: 30
    },
    textString: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#29b6f6',
        fontSize: 18,
        padding: 28 
    },
    img: {
        width: 300
    }

});