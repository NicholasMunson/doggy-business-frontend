import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

const CreateDogProfile = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Create Dog Profile</Text>
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
        height: "20%",
        width: 'auto',  
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
export default CreateDogProfile