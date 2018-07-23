import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';

const DogCard = (props) => {
    let dog = props.dogProfile
    return (
        <CardItem style={styles.card}>
            <Icon />
            <Text style={styles.text}>{dog.name}</Text>
            <Text style={styles.text}>Nickname: {dog.nickname}</Text>
            <Text style={styles.text}>Favorite Toy: {dog.toy}</Text>
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
        textAlign: 'center',
    },
    card:{
        flex: 1,
        flexDirection:"column",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "yellow",
        margin: "0%",


    }
});
export default DogCard
{/* <Text>{dogProfile.name}</Text> */}
// <Container>
//     <Content>
//         <Card>
//             <CardItem>
//                 <Icon />
//                 <Text>{dog.name}</Text>
//                 <Right>
//                 <Text>Favorite Toy: {dog.toy}</Text>
//                 </Right>
//                 <Text>Nickname: {dog.nickname}</Text>
//             </CardItem>
//         </Card>
//     </Content>
// </Container>
// <View style={styles.container}>
//     <Text style={styles.card}>{dog.name}</Text>
// </View>