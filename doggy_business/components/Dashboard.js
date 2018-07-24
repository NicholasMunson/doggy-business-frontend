import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Actions } from 'react-native-router-flux'
import DogCard from './DogCard.js'
import { Content, Card,  Text, Button } from 'native-base';
<<<<<<< HEAD
import ProfileSettings from '../components/ProfileSettings.js'
=======
>>>>>>> dbd098e2781dc722bd5aa1e741580382a3ba666f


const Dashboard = (props) =>{

    const dogData = !props.loadData === true ? 
            console.log("loading...") : 
            props.dogDataInfo.profile.map(dog => <DogCard key={dog.id} style={styles.dogCard}  
            handleProfileOptions={props.handleProfileOptions} 
            removeProfile={props.removeProfile} 
            dogProfile={dog}
            modalState={props.modalState}
            handleProfileOptions={props.handleProfileOptions}
            removeProfile={props.removeProfile}
            handleModelView={props.handleModelView}
            handleChangeEvent={props.handleChangeEvent} 
            />)
        
        const dogProfileView = props.modalState === false ? 
                <Content style={styles.dogsObj}>
                    <Card>
                    {dogData}
                    </Card>
                </Content> : 
                <ProfileSettings  
                handleProfileOptions={props.handleProfileOptions} 
                removeProfile={props.removeProfile} 
                dogProfile={dog}
                modalState={props.modalState}
                handleProfileOptions={props.handleProfileOptions}
                removeProfile={props.removeProfile}
                handleModelView={props.handleModelView}
                handleChangeEvent={props.handleChangeEvent}  
                />
    
    return (

        <View style={styles.container}>
            <Text style={styles.topObj}>Welcome to the Dash</Text>
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