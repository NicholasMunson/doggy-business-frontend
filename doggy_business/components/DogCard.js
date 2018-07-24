import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { Actions } from 'react-native-router-flux'


const DogCard = (props) => {
    let dog = props.dogProfile
    let id = dog.id
    return (
        <CardItem style={styles.card}>
            <View style={styles.dogInfo}>
                <Text style={styles.text}>{dog.name}</Text>
                <Text style={styles.text}>Nickname: {dog.nickname}</Text>
                <Text style={styles.text}>Favorite Toy: {dog.toy}</Text>
                <Button></Button>
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
    gear:{
        top:"0%",
        right:"0%",
        color: "lightgrey"
    },
    dogInfo:{
        width:"90%"
    },
    card:{
        flex: 1,
        flexDirection:"row-reverse",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "#372772",
        margin: "0%",
    },
    btn:{
        margin:10,
        zIndex: 50
    },
});
export default DogCard
