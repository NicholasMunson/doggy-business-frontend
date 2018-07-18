import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import DogProfileForm from './DogProfileCard';


const CreateDogProfile = () => {
    return (
        <View style={styles.container}> 

        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightblue",
        justifyContent:"space-evenly"
    },
    group:{
        
    },
    input:{
    color:"green",
    fontFamily:"font-awesome"
    }

});
export default CreateDogProfile