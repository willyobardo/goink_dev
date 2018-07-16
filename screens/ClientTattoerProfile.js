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
import HeaderGoInk from '../components/HeaderGoInk'

const { width, height } = Dimensions.get('screen');

export default class ClientTattoerProfile extends Component {


  render() {
    const { navigation } = this.props;
    const dados = navigation.getParam('dados');
    const tattoador = dados.inker;

    return(
      <Container >
        <Content>
          <Image
            style={styles.coverTatuador}
            source={{uri: tattoador.cover}}
          />
          <Body style={styles.body}>
            <Image
              style={styles.pictureTatuador}
              source={{uri: tattoador.picture}}
            />
            
              <Text style={styles.tattoadorName}>{tattoador.name } laslalasl</Text>
              <Text style={styles.tattoadorAddress}>{tattoador.address} lasdldslsdal</Text>


            <Image
              style={styles.imageGrid}
               source={{uri: tattoador.tattoos[0].image}}
            />

            {tattoador.tattoos.map((item) => {
                return (       
                  <Image
                  
                    style={styles.imageGrid}
                     source={{uri: [item].image}}
                  />
                )
              })}
            
          </Body>
        </Content>
      </Container>
    )  
  }
}

const styles = StyleSheet.create({
   wrapper: {
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-100
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
  coverTatuador:{
    width:width,
    height:300
  },
  pictureTatuador:{
    width:200,
    height:200,
     alignItems: 'center',
    justifyContent: 'center',
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
  }

});
