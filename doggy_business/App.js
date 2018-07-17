import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './app/Dashboard.js'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world suck my taint</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top:"3%",
    flex: 1,
    backgroundColor: '#a5d9f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    bottom:"3%",
  }
});
