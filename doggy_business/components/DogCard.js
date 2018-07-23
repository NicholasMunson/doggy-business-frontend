import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

const DogCard = (props) => {
    let dog = props.dogProfile
    return (
        <CardItem style={styles.card}>
            <Icon />
            <Text>{dog.name}</Text>
            <Text>Favorite Toy: {dog.toy}</Text>
            <Text>Nickname: {dog.nickname}</Text>
        </CardItem>    
    ) 
} 
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        width: 100,
        flexDirection: "row",
        
        
        
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    card:{
        flex: 1,
        flexDirection:"column",
        justifyContent: "space-between",
        textAlign: "center"
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