import React, {Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base';
const URL = "https://doggy-business-backendsql.herokuapp.com/dog-profile"

const emptyState ={
    name: "",
    toy: "",
    nickname: ""

} 

class DogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emptyState
        }
        this.formRef = null;
    }
    
    handlePostRequest = (event) => {
        const state = this.state
        console.log(event)
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
        }).then(console.log)
        .then(this.setState({emptyState}))
        
    }
    
    render() {
        return (
            <Container style={style.container}>
                <Content >
                    <Form ref={(ref) => this.formRef = ref} className="profile-form">
                        <Item inlineLabel >
                            <Label>Dog Name</Label>
                            <Input onChangeText={(name) => this.setState({name})}  />
                        </Item>
                        <Item inlineLabel>
                            <Label>Favorite Toy</Label>
                            <Input onChangeText={(toy) => this.setState({toy})} />
                        </Item>
                        <Item inlineLabel last>
                            <Label>Nickname</Label>
                            <Input onChangeText={(nickname) => this.setState({nickname})} />
                        </Item>
                        <Button block primary onPress={ (event) => this.handlePostRequest(event)} >
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