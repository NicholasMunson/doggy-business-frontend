import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'



const Dashboard = (props) =>{
    const loadData = props.loadData
    const dogCard = (loadData === true ? <DogCard loadData={props.loadData} dogDataInfo={props.dogDataInfo}  /> : "Loading...")
    return (
        <View style={styles.container}>
            {[dogCard]}
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