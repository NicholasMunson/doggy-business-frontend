import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Reminder = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Business</Text>
            <Text
            onPress={() => Actions.dashboard()}
            > 
            Dashboard
            </Text>
        </View>
    )

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