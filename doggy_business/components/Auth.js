import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base';

const Auth = (props) => {
    console.log(props.handleAuth);
    
    return(
        <Container>
            <ImageBackground source={require('./images/dog.png')} style={styles.background}>
                <Content style={styles.container}>
                    <Text style={styles.spacing}>Welcome to Doggy Business</Text>  
                    <Form style={styles.form}>
                        <Item>
                            <Input placeholder="Username" style={styles.input}  required/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password"  style={styles.input}   required/>
                        </Item>
                    </Form>
                    <Button block primary style={styles.btn}  onPress={() => props.handleAuth(true)} >
                        <Text>Login</Text>
                    </Button> 
                    <Button block primary style={styles.btn} >
                        <Text>Sign up</Text>
                    </Button>     
                    <Text style={styles.spacing} />    
                </Content>
            </ImageBackground>
        </Container>
    )
    
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"rgba(0, 0, 0, 0.5)",
    },
    background:{
        width:"100%", 
        height:"100%",
    },
    spacing:{
        justifyContent: "center",
        textAlign: "center",
        color:"#372772",
        fontSize: 50,
        margin: 20,
        shadowColor: "white",
        shadowOpacity: 10,
        shadowRadius: 4,
    },
    form:{
        flex: .5,
        height:"20%",
        backgroundColor:"#CDD5D1",
        margin:10,
    },
    btn:{
        margin:10,
    },
    input:{
        backgroundColor:"#CDD5D1",
        marginRight:10,
    }

})  

export default Auth