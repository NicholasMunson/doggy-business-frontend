import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Dashboard = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Hello world</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    }
});
export default Dashboard