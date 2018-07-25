import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { Actions } from 'react-native-router-flux'


const DogCard = (props) => {
    let dog = props.dogProfile
    let id = dog.id
    return (
        <CardItem style={styles.card} id={id} >
            <View style={styles.dogInfo}>
                <Text style={styles.text} value={dog.name}>{dog.name}</Text>
                <Text style={styles.text} value={dog.nickname}>Nickname: {dog.nickname}</Text>
                <Text style={styles.text} value={dog.toy}>Favorite Toy: {dog.toy}</Text>
                <View style={styles.btnContainer}>
                    <Button block success style={styles.btnLRG} onPress={() => {props.handleCaptureTimeEvent()}} >
                        <Text>WALK!</Text>
                    </Button>
                    <View>
                        <Button block primary style={styles.btn} onPress={() => { props.handleChangeEvent({dog}) ; props.handleModelView(true, {dog}) }} >
                            <Text>Edit</Text>
                        </Button>
                        <Button block danger style={styles.btn} onPress={() => {props.alert({dog})}} >
                            <Text>delete</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </CardItem>    
    ) 
} 
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        width: 100,
        flexDirection: "row",
    },
    text: {
        fontSize: 20,
        color:'#CDD5D1',
        width:"100%",
        textAlign: 'center',
        
    },
    dogInfo:{
        width:"90%",
        margin: 10,
    },
    card:{
        flex: 1,
        flexDirection:"row-reverse",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#372772",
        margin: 10,
        borderRadius: 30,
    },
    btnContainer:{
        flexDirection:"row-reverse",
        justifyContent:"space-evenly",
    
    },
    btnLRG:{
        height:100,
        width:100,
        margin:5,
    },
    btn:{
        margin:5,
        zIndex: 50
    },
});
export default DogCard
