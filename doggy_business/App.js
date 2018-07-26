import React, { Component } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Dashboard from './components/Dashboard.js'
import CreateDogProfile from './components/CreateDogProfile.js';
import DogCard from './components/DogCard.js'
import Reminder from './components/Reminder.js'; 
const URL = "https://doggy-business-backendsql.herokuapp.com/dog-profile"
const URLTime = "https://doggy-business-backendsql.herokuapp.com/business-time"
const timer = require('react-native-timer');
import Auth from './components/Auth.js'
import Moment from 'react-moment';
var moment = require('moment');
console.disableYellowBox = true;

const TabIcon = ({selected, title}) => {
    return (<Text
        style={{
            color: selected
                ? "green"
                : "black"
        }}>{title}</Text>)
}

export default class App extends Component {
    constructor(props){
        super(props)

        this.state ={
            dogDataInfo: [],
            timeData:[],
            name: '',
            walkTime: '',
            toy:'',
            nickname: '',
            loadData: false,
            auth: false,   
            modelView: false,    
        } 
    }


componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(res => res.profile)
    .then(dogProfile => this.setState({
        dogDataInfo: dogProfile, 
        loadData: true
    }))
    fetch(URLTime)
    .then(res => res.json())
    .then(res => res.time)
    .then(walkTimes => this.setState({
        timeData: walkTimes
    }))
}

handleModelView = (change, doggy) => {
    let dog = doggy.dog
    this.setState({
        modelView: change,
        name: dog.name,
        nickname: dog.nickname,
        toy: dog.toy,
        
    })
}

alert = (dog) =>{ 
    let id = dog.dog.id
    Alert.alert(
    'Hold up...',
    `Are you sure you want to delete ${dog.dog.name}'s profile?`,
    [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {this.handleDogProfileDelete(id)}},
    ],
    { cancelable: false }
    )
}

walkAlert = (dog, currentTime) =>{ 
    console.log(dog.name);
    
    Alert.alert(
    `New walk alarm created for ${dog.name}! `,
    `press OK to set or Cancel to cancel. `,
    [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {this.handleAlarmCreate(dog)}},
    ],
    { cancelable: false }
    )
}

handleAlarmCreate = (dog) => {
    timer.setTimeout("walkAlarm", () => this.walkDogAlarm(dog), 3000);

}
walkDogAlarm = (dog) => {
    Alert.alert(
        `Time to take ${dog.name} for a walk! `,
        `press OK to go! or cancel to clean up pee... `,
        [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('Going Pee!'), style: 'cancel'},
        ],
        { cancelable: false }
        )

}

handleChangeEvent = (dog) => {
    console.log(dog.dog.name);
    

}

handleCaptureTimeEvent = (doggy) =>{
    let currentTime = moment(new Date().getTime()).format("MM-DD-YYYY hh:mm:ss")
    let dog = doggy.dog
    this.setState({
        name:dog.name,
        walkTime: currentTime
    })

            fetch(URLTime ,{
            method:"POST",
            body: JSON.stringify({
                name:`${dog.name}`,
                time:`${currentTime}`
            }),
            headers: new Headers({
                "content-type" : "application/json"
            })
        }).then(this.reset)
        .catch(err => {
            console.error(err)
        }).then(()=> this.walkAlert(dog, currentTime))
    
}

handleProfileOptions = (id) => {

}

handleDogProfileDelete = (id) => {
    let deleteUrl = `${URL}/${id}`
    const currentProfileList = this.state.dogDataInfo
    let currentDog = this.state.dogDataInfo.filter(dog => dog.id == id)[0]
    currentProfileList.splice(currentProfileList.indexOf(currentDog), 1)
    this.setState({
        dogDataInfo: currentProfileList
    })
    fetch(deleteUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    .then(this.handleErrors)
    .then(res => res.json())
    .then(console.log)

}

handleAuth = (authOk) => {
    this.setState({
        auth: authOk
    })
}
    render() {
        const modalState = this.state.modelView
        const dogDataInfo = this.state.dogDataInfo
        const loadData = this.state.loadData
        const auth = this.state.auth
        const removeProfile = this.handleDogProfileDelete
        const handleProfileOptions = this.handleProfileOptions
        const handleModelView = this.handleModelView
        const handleChangeEvent = this.handleChangeEvent
        const currentState = this.state
        const alert = this.alert
        const walkAlert = this.walkAlert
        const handleCaptureTimeEvent = this.handleCaptureTimeEvent
        const timeData = this.state.timeData
    
        
        return (
            auth === false ?
                <Auth handleAuth={this.handleAuth} /> :
            <Router>
                <Scene key='root'>
                    <Scene 
                        key="tabBar"
                        tabs
                        style={TabIcon} 
                        > 
                        <Scene 
                            key='profile' 
                            component={() => <CreateDogProfile 
                            dogDataInfo={dogDataInfo} 
                            /> }  
                            title='Create Dog Profile'
                            style={styles.navigation}  
                            />
                        <Scene
                            key='dashboard'
                            component={() => <Dashboard 
                            dogDataInfo={dogDataInfo} 
                            loadData={loadData} 
                            modalState={modalState}
                            handleProfileOptions={handleProfileOptions}
                            removeProfile={removeProfile}
                            handleModelView={handleModelView} 
                            handleChangeEvent={handleChangeEvent}
                            currentState={currentState}
                            alert={alert}
                            handleCaptureTimeEvent={handleCaptureTimeEvent}
                            currentState={currentState} 
                            walkAlert={walkAlert} 
                            /> }
                            
                            title='Dashboard'
                            initial="initial" 
                            style={styles.navigation}
                            />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a5d9f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome:{
        fontSize: 20,
        textAlign: 'center',
    },
    navigation:{
        
    }
});

{/* <View style={styles.container}>
<Text style={styles.welcome}>Hello world suck my taint</Text>
<Dashboard />
</View> */}
{/* <Scene 
    key='reminder' 
    component={ () => 
    <Reminder 
    timeData={timeData} 
    currentState={currentState}     
    />} 
    title='Business Reminder'
    style={styles.navigation} 
    /> */}