import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
// console.log(dogProfile);


const Dashboard = (props) =>{
    const dogData = !props.loadData === true ? console.log("loading...") :  props.dogDataInfo.profile.map(dog => <DogCard key={dog.id} style={styles.dogCard} dogProfile={dog}/>)
    console.log(dogData)

    
    return (
        <ScrollView>
            <Container>
                <Content>
                    <Card>
                    {dogData}
                    </Card>
                </Content>
            </Container>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dogCard: {
        width:100,
        fontSize: 20,
        textAlign: 'center',
    
    }
});
export default Dashboard