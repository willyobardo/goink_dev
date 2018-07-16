import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions, AsyncStorage, Switch } from 'react-native';
import {  Content,
          Container,
          Button, 
          Header, 
          View,
          Text, 
          Left, 
          Right, 
          Body, 
          Icon,
          Form,
          ListItem,
          Input,
          Label,
          DatePicker,
          Item
        } from 'native-base';

const { width, height } = Dimensions.get('screen');

export default class ClientAddAddress extends Component {

  static navigationOptions = {
    title: 'Complete seu cadastro!',
  };


  constructor(props) {
    super(props);
  }


  render() {

    const { navigation } = this.props;
    const dados = navigation.getParam('dados');
    let tattoador = dados;
  
    return(
      <Container style={styles.wrapper}>
        <Content>
            <Form>
              <Item floatingLabel>
                <Label>Endereço</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Numero</Label>
                <Input />
              </Item>
             <Item floatingLabel>
                <Label>Complemento</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Bairro</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Cidade</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Estado</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>País</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>CEP</Label>
                <Input />
              </Item>

              <Button style={styles.buttonFinalizar} dark rounded block onPress={()=>  this.props.navigation.navigate('Home')}>
                <Text> Finalizar </Text>
              </Button>
            </Form>
        </Content>
      </Container>
    )  
  }
}



const styles = StyleSheet.create({
   wrapper: {
    backgroundColor:'#fff'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loading:{
    width:50,
    height: 50
  },
  importanteContent:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,

  },
  tattoadorName:{
    marginTop:20
  },
  tattoadorAddress:{
    marginBottom:30
  },
  imageGrid:{
    width:width,
    height:200
  },
  buttonComprar:{
    marginBottom:30
  },
  bold:{
    fontWeight: 'bold'
  },
  buttonFinalizar:{
    margin: 30
  }

});


