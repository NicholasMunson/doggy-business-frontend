import React, {Component } from 'react';
import { StyleSheet, Text } from 'react-native';
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
    
    }
    reset = () => {
        console.log("reset function ");
        
        this.setState({
        
            name:"",
            toy: "",
            nickname: ""
        })
    }
    
    render() {
        
        return (
            <Container style={style.container}>
                <Content >
                    <Form ref={(ref) => this.formRef = ref} className="profile-form">
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

    }
        })  
export default DogForm