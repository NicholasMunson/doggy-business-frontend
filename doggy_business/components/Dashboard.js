import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'
import { Content, Card,  Text, Button } from 'native-base';
import ProfileSettings from '../components/ProfileSettings.js'


const Dashboard = (props) =>{

    const dogData = !props.loadData === true ? 
            console.log("loading...") : 
            props.dogDataInfo.map(dog => <DogCard key={dog.id} style={styles.dogCard} 
            currentState={props.currentState}  
            handleProfileOptions={props.handleProfileOptions} 
            removeProfile={props.removeProfile} 
            dogProfile={dog}
            walkAlert={props.walkAlert} 
            modalState={props.modalState}
            handleProfileOptions={props.handleProfileOptions}
            removeProfile={props.removeProfile}
            handleModelView={props.handleModelView}
            handleChangeEvent={props.handleChangeEvent}
            alert={props.alert} 
            handleCaptureTimeEvent={props.handleCaptureTimeEvent}
            />)
        
        const dogProfileView = props.modalState === false ? 
                <Content style={styles.dogsObj}>
                    <Card transparent style={{backgroundColor:"#93BEDF"}}>
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
            <Image source={require("./images/doggyBusinessTitle.png") } />>
            {dogProfileView}
            <Text style={styles.bottomObj}></Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#93BEDF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        height:"90%",
        width:"90%",
    },
    dogCard: {
        fontSize: 20,
        backgroundColor:"#DDF8E8",
    },
    topObj:{
        flex:.2,
    },
    dogObj:{
        flex:1,
    },
    bottomObj:{
        flex:.1,
    }

});
export default Dashboard