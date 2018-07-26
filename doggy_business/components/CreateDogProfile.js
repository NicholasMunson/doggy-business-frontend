import React, { Component } from 'react';
import { StyleSheet, Text, Image, ImageBackground  } from 'react-native';
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base';
import { Action, Actions } from 'react-native-router-flux'
const URL = "https://doggy-business-backendsql.herokuapp.com/dog-profile"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class DogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            toy: "",
            nickname: ""
    
        }
        this.formRef = null;
    }
    
    handlePostRequest = (event) => {
        const state = this.state
            fetch(URL,{
            method:"POST",
            body: JSON.stringify({
                name:`${state.name}`,
                toy:`${state.toy}`,
                nickname:`${state.nickname}`
            }),
            headers: new Headers({
                "content-type" : "application/json"
            })
        }).then(res => {
            console.log(this.props.dogDataInfo)
        })
        .then(this.reset)
        .catch(err => {
            console.error(err)
        })

    }
    reset = () => {
        this.setState({
        
            name:"",
            toy: "",
            nickname: ""
        })
    }
    
    render() {
        return (
            <KeyboardAwareScrollView behavior="padding" style={{flex:1}}>
                <Container style={style.container} >
                    {/* <ImageBackground source={require('./images/dog.png')} style={style.background}> */}
                        <Content >
                            <Form className="profile-form" style={style.form} >
                                <Item inlineLabel >
                                    <Label>Dog Name</Label>
                                    <Input onChangeText={(name) => this.setState({name})} defaultValue={""} value={this.state.name} />
                                </Item>
                                <Item inlineLabel>
                                    <Label>Favorite Toy</Label>
                                    <Input onChangeText={(toy) => this.setState({toy})} defaultValue={""} value={this.state.toy} />
                                </Item>
                                <Item inlineLabel last>
                                    <Label>Nickname</Label>
                                    <Input onChangeText={(nickname) => this.setState({nickname})} defaultValue={""} value={this.state.nickname}  />
                                </Item>
                                <Button style={style.btn} block primary onPress={(event) => {this.handlePostRequest(event);}} >
                                    <Text>Create Dog Profile</Text>
                                </Button>
                            </Form>
                        </Content>
                        <Image style={style.image} source={require('./images/imageedit_9_9958397783.png')} />
                    {/* </ImageBackground> */}
                </Container>
            </KeyboardAwareScrollView>
        )
    }
}   

    const style= StyleSheet.create({
    container:{
        backgroundColor:"#93BEDF",
    },
    image:{
        flex:1,
        height:"70%",
        width:"70%",
        justifyContent:"center",
        left:50,
        bottom:107,
    },
    formContainer:{
        flex: 1,
        height:"20%",
        backgroundColor:"#CDD5D1",
    },
    form:{
        flex: .5,
        height:"20%",
        backgroundColor:"#CFDBD5",
        margin:10,
        top:10,
    },
    btn:{
        margin:10,
    },
        })  
export default DogForm