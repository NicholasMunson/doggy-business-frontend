import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Dashboard from './components/Dashboard.js'
import CreateDogProfile from './components/CreateDogProfile.js';
import DogCard from './components/DogCard.js'
import Reminder from './components/Reminder.js'; 
const URL = "https://doggy-business-backendsql.herokuapp.com/dog-profile"

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
            modalVisible: false,
        } 
    }

componentWillMount(){
    fetch(URL)
    .then(res => res.json())
    .then(dogData => this.setState({
        dogDataInfo: dogData
    }))
}
    render() {
        const dogDataInfo = this.state.dogDataInfo
        return (
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
                            component={() => <Dashboard component={() => <DogCard dogDataInfo={dogDataInfo} /> } /> }
                            title='Dashboard'
                            initial="initial" 
                            style={styles.navigation} />
                        <Scene 
                            key='reminder' 
                            component={Reminder} 
                            title='Business Reminder'
                            style={styles.navigation} />
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