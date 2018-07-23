import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';

const DogCard = (props) => {
    let dog = props.dogProfile
    let id = dog.id
    return (
        <CardItem style={styles.card}>
            <View>
                <Icon light style={styles.gear} name='cog' onIconClicked={ (id) => props.handleProfileOptions} />
            </View>
            <View style={styles.dogInfo}>
                <Text style={styles.text}>{dog.name}</Text>
                <Text style={styles.text}>Nickname: {dog.nickname}</Text>
                <Text style={styles.text}>Favorite Toy: {dog.toy}</Text>
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
        fontSize: 15,
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
        backgroundColor: "yellow",
        margin: "0%",
    }
});
export default DogCard
