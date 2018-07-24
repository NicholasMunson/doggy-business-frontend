import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'
import { Content, Card,  Text, Button } from 'native-base';


const Dashboard = (props) =>{
    const dogData = !props.loadData === true ? 
            console.log("loading...") : 
            props.dogDataInfo.profile.map(dog => <DogCard key={dog.id} style={styles.dogCard}  
            handleProfileOptions={props.handleProfileOptions} 
            removeProfile={props.removeProfile} 
            dogProfile={dog}

            />)
        
    return (
        <View style={styles.container}>
            <Text style={styles.topObj}>Welcome to the Dash</Text>
            <Content style={styles.dogsObj}>
                <Card>
                {dogData}
                </Card>
            </Content>
            <Text style={styles.bottomObj}></Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#CDD5D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dogCard: {
        fontSize: 20,
    },
    topObj:{
        flex:.2,
    },
    dogObj:{
        flex:5,
    },
    bottomObj:{
        flex:.2,
    }

});
export default Dashboard