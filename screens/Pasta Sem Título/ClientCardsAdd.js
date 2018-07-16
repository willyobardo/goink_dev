import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions, AsyncStorage } from 'react-native';
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
          Input
        } from 'native-base';
import Swiper from 'react-native-swiper';
import HeaderGoInk from '../components/HeaderGoInk'

const { width, height } = Dimensions.get('screen');

export default class ClientCardsAdd extends Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('dados');

    return(
      <Container>
      <HeaderGoInk abrindoDrawerPeloHeader={this.props.navigation.openDrawer}/>
        <Content>
            <Text>Adicione um novo cartão
            </Text>

              <Input placeholder="Nome do titular" />
              <Input placeholder="Número do cartão" />
              <Input placeholder="Código de segurança" />
              <Input placeholder="Validade do cartão" />

              <Button dark>
                <Text> Adicionar cartão</Text>
              </Button>
        </Content>
      </Container>
    )  
  }
}

const styles = StyleSheet.create({
   wrapper: {
  },
  content: {
    flex: 1,
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
  }

});
