import React, {Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Content, Form, Item, Input, Label } from 'native-base';

class DogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            toy: "",
            nickname: ""
        }

    }



    render() {
        console.log(this.state)
        return (
            <Container style={style.container}>
                <Content >
                    <Form>
                        <Item inlineLabel >
                            <Label>Dog Name</Label>
                            <Input onChangeText={(name) => this.setState({name})}  />
                        </Item>
                        <Item inlineLabel>
                            <Label>Favorite Toy</Label>
                            <Input/>
                        </Item>
                        <Item inlineLabel last>
                            <Label>Nickname</Label>
                            <Input/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

    const style= StyleSheet.create({
    container:{
        backgroundColor:"chartreuse"
    }
        })  
export default DogForm