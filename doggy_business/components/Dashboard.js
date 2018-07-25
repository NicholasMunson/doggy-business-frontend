import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'
import { Content, Card,  Text, Button } from 'native-base';
import ProfileSettings from '../components/ProfileSettings.js'


const Dashboard = (props) =>{

    const dogData = !props.loadData === true ? 
            console.log("loading...") : 
            props.dogDataInfo.map(dog => <DogCard key={dog.id} style={styles.dogCard}  
            handleProfileOptions={props.handleProfileOptions} 
            removeProfile={props.removeProfile} 
            dogProfile={dog}
            modalState={props.modalState}
            handleProfileOptions={props.handleProfileOptions}
            removeProfile={props.removeProfile}
            handleModelView={props.handleModelView}
            handleChangeEvent={props.handleChangeEvent}
            alert={props.alert} 
            />)
        
        const dogProfileView = props.modalState === false ? 
                <Content style={styles.dogsObj}>
                    <Card>
                    {dogData}
                    </Card>
                </Content> : 
                <ProfileSettings
                currentState={props.currentState}  
                handleProfileOptions={props.handleProfileOptions} 
                removeProfile={props.removeProfile} 
                modalState={props.modalState}
                handleProfileOptions={props.handleProfileOptions}
                removeProfile={props.removeProfile}
                handleModelView={props.handleModelView}
                handleChangeEvent={props.handleChangeEvent}  
                />
    
    return (

        <View style={styles.container}>
            <Text style={styles.topObj}>Select a dog below</Text>
            {dogProfileView}
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
        backgroundColor:"#DDF8E8",
    },
    topObj:{
        // flex:.2,
    },
    dogObj:{
        flex:5,
    },
    bottomObj:{
        // flex:.1,
    }

});
export default Dashboard