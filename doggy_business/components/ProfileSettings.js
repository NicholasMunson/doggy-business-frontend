import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions } from 'react-native-router-flux'

class ProfileSettings extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            walkTime: '',
            toy:'',
            nickname: '',
        }
    }
    render(){  
        let dog = this.props.currentState
        console.log(dog.name)
            return(
            <Container style={styles.container}>
                <Content >
                    <Form className="profile-form">
                        <Item inlineLabel >
                            <Label>Name</Label>
                            <Input onChangeText={(name) => this.setState({name})} defaultValue={dog.name} value={this.state.name} />
                        </Item>
                        <Item inlineLabel>
                            <Label>Favorite Toy</Label>
                            <Input onChangeText={(toy) => this.setState({toy})} defaultValue={dog.toy} value={this.state.toy} />
                        </Item>
                        <Item inlineLabel last>
                            <Label>Nickname</Label>
                            <Input onChangeText={(nickname) => this.setState({nickname})} defaultValue={dog.nickname} value={this.state.nickname}  />
                        </Item>
                        <Button block primary onPress={() => {this.props.handleModelView(false)}} >
                            <Text>Create Dog Profile</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
            )
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#DDF8E8",
        flex:1

    },
    img:{
        flex:1, 
        height: undefined, 
        width: undefined,
        marginTop:"0%"
    },
    title:{
        top: 0,
        fontSize: 50,
    },
    background:{
        width:"100%", 
        height:"100%",
    },
})


export default ProfileSettings