import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
const timer = require('react-native-timer');
const URLTime = "https://doggy-business-backendsql.herokuapp.com/business-time"
class Reminder extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.currentState)
        // console.log(this.props.timeData.map(time => time.name))
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Business Reminders</Text>
            </View>
        )
    }   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    }
});
export default Reminder