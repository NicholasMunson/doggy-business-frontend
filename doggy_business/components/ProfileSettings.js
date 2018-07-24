import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux'

class ProfileSettings extends Component{
    constructor(props){
        super(props)
        console.log(props.currentState)
    }
    render(){  
        let dog = this.props.currentState
            return(
                <ImageBackground source={require('./images/dog.png')} style={styles.background}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{dog.name}</Text>
                        <View>
                        </View>
                    </View>
                </ImageBackground>
            )
    }

}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#CDD5D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        top: 0,
        fontSize: 50,
    },
    background:{
        width:"100%", 
        height:"100%",
    },
})


export default ProfileSettings