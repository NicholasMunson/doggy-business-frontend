import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'
// console.log(dogProfile);


const Dashboard = (props) =>{
    // const dogProfile = props.dogDataInfo.map(profile => <DogCard  profile={profile} key={profile.id} />)
    const dogData = !props.loadData === true ? console.log("loading...") : props.dogDataInfo.profile.map(dog => dog)
    console.log(dogData)

    
    return (
        <View style={styles.container}>
            {/* {dogProfile} */}
        </View>
    )

}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    }
});
export default Dashboard