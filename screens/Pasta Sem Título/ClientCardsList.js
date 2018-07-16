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
        } from 'native-base';
import Swiper from 'react-native-swiper';
import HeaderGoInk from '../components/HeaderGoInk'

const { width, height } = Dimensions.get('screen');

export default class ClientPayment extends Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('dados');

    return(
      <Container>
      <HeaderGoInk abrindoDrawerPeloHeader={this.props.navigation.openDrawer}/>
        <Content>
            <Text>Gerencie seus cartões
              salvos ou adicione outro
            </Text>

            <Image
              style={styles.cardImage}
              source={require('../img/loading.gif')}
            />

            <Text>Voce não possui um cartão
            </Text>


            <Button dark>
              <Text> Cadastrar um cartão </Text>
            </Button>

              <Button dark>
              <Text> Voltar </Text>
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
