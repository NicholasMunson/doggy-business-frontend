import React, { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base';
import { Action, Actions } from 'react-native-router-flux'
const URL = "https://doggy-business-backendsql.herokuapp.com/dog-profile"



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
        }).then(this.reset)
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
            <Container style={style.container}>
                <Image source={require("./images/dog_running_in_water.jpg")}
                        style={{flex:1, height: undefined, width: "100%"}}
                        resizeMode="contain"
                        style={style.img}
                        />
                <Content >
                    <Form className="profile-form">
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
                        <Button block primary onPress={(event) => {this.handlePostRequest(event);}} >
                            <Text>Create Dog Profile</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}   

    const style= StyleSheet.create({
    container:{
        backgroundColor:"chartreuse",

    },
    img:{
        flex:1, 
        height: undefined, 
        width: undefined,
        marginTop:"0%"
    }
        })  
export default DogForm