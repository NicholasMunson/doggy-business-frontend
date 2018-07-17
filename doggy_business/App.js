import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './app/Dashboard.js'
import { Router, Scene } from 'react-native-router-flux'
import CreateDogProfile from './app/CreateDogProfile.js';
import Reminder from './app/Reminder.js'; 



const TabIcon = ({selected, title}) => {
  return (
    <Text style={{color: selected ? "green" : "black"}}>{title}</Text>
  )
}

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene 
                      key="tabBard"
                      tabs
                      style={TabIcon} 
                      > 
                        <Scene
                            key='dashboard'
                            component={Dashboard}
                            title='Dashboard'
                            initial="initial" />
                        <Scene 
                            key='profile' 
                            component={CreateDogProfile} 
                            title='Create Dog Profile' />
                        <Scene 
                            key='reminder' 
                            component={Reminder} 
                            title='Business Reminder' />
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
  }
});

{/* <View style={styles.container}>
  <Text style={styles.welcome}>Hello world suck my taint</Text>
  <Dashboard />
</View> */}