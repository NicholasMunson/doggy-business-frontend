import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Dashboard from './components/Dashboard.js'
import CreateDogProfile from './components/CreateDogProfile.js';
import DogCard from './components/DogCard.js'
import Reminder from './components/Reminder.js'; 
const URL = "https://doggy-business-backendsql.herokuapp.com/dog-profile"
import Auth from './components/Auth.js'

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
    .then(dogProfile => this.setState({
        dogDataInfo: dogProfile, 
        loadData: true
    }))
}
handleModelView = (change) => {
    this.setState({
        modelView: change
    })

    
}

handleChangeEvent = (dog) => {
    console.log(dog.dog.name);
    

}

handleProfileOptions = (id) => {

}

handleDogProfileDelete = (id) => {

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
                            component={() => <CreateDogProfile /> }  
                            title='Create Dog Profile'
                            style={styles.navigation} 
                            DogProfileForm={this.DogProfileForm}
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
                            /> }
                            
                            title='Dashboard'
                            initial="initial" 
                            style={styles.navigation}
                            />
                        <Scene 
                            key='reminder' 
                            component={Reminder} 
                            title='Business Reminder'
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