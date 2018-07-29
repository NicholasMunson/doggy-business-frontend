import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, KeyboardAvoidingView  } from 'react-native'
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Auth = (props) => {

    
    return(
        <KeyboardAwareScrollView behavior="padding" style={{flex:1}}>
            <Container style={styles.container} >
                    <Image style={styles.image} source={require('./images/imageedit_9_9958397783.png')} />
                    <Content disableKBDismissScroll={true} >
                        <Form style={styles.form}>
                            <Item>
                                <Input placeholder="Username" style={styles.input}  required />
                            </Item>
                            <Item last>
                                <Input placeholder="Password" secureTextEntry style={styles.input}   required/>
                            </Item>
                            <Button block primary style={styles.btn}  onPress={() => props.handleAuth(true)} >
                                <Text>Login</Text>
                            </Button> 
                            <Button block primary style={styles.btn} >
                                <Text>Sign up</Text>
                            </Button>     
                        </Form>
                        <Text style={styles.spacing} />    
                    </Content>
            </Container>
        </KeyboardAwareScrollView>
    )
    
}
const styles= StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor:"#93BEDF"
    },
    image:{
        flex:1,
        height:"90%",
        width:"90%",
        justifyContent:"center",
        left:15,
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
        fontFamily:"AppleSDGothicNeo-Bold",
    },
    form:{
        flex: .5,
        height:"20%",
        backgroundColor:"#CFDBD5",
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