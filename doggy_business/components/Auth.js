import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base';

const Auth = (props) => {
    console.log(props.handleAuth);
    
    return(
        <ImageBackground source={require('./images/dog.png')} style={{width:"100%", height:"100%"}}>
            <Content style={styles.container}>
                <Text style={styles.spacing} />  
                <Form style={styles.form}>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                </Form>
                <Button block primary onPress={() => props.handleAuth(true)} >
                    <Text>Login</Text>
                </Button> 
                <Button block primary >
                    <Text>Sign up</Text>
                </Button>     
                <Text style={styles.spacing} />    
            </Content>
        </ImageBackground>
    )
    
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:"50%",


    },
    spacing:{
        flex: 2,
    },
    form:{
        paddingTop:"50%",
        flex: .5,
        height:"20%",
        backgroundColor:"rgba(0,0,0,0.5)",
    }

})  

export default Auth