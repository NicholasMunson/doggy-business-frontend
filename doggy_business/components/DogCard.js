import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { Actions } from 'react-native-router-flux'


const DogCard = (props) => {
    let dog = props.dogProfile
    let id = dog.id
    return (
<<<<<<< HEAD
        <CardItem style={styles.card} id={id} button onPress={() => { props.handleChangeEvent({dog}) ; props.handleModelView(true)  } }>
=======
        <CardItem style={styles.card} id={id} button onPress={() => { props.handleChangeEvent({dog}) } }>
>>>>>>> dbd098e2781dc722bd5aa1e741580382a3ba666f
            <View style={styles.dogInfo}>
                <Text style={styles.text} value={dog.name}>{dog.name}</Text>
                <Text style={styles.text} value={dog.nickname}>Nickname: {dog.nickname}</Text>
                <Text style={styles.text} value={dog.toy}>Favorite Toy: {dog.toy}</Text>
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
    btn:{
        margin:10,
        zIndex: 50
    },
});
export default DogCard
