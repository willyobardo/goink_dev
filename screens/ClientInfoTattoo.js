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
          ListItem
        } from 'native-base';
import HeaderGoInk from '../components/HeaderGoInk'

const { width, height } = Dimensions.get('screen');

export default class ClientInfoProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {
         switchValue: false
      }
   }

   toggleSwitch = (value) => {
      this.setState({switchValue: value})
      
   }

  onOpenPayment(tattoador) {
    this.props.navigation.navigate('ClientPayment', {dados: tattoador});
  };


  render() {

    const { navigation } = this.props;
    const dados = navigation.getParam('dados');
    let tattoador = dados;
  
    return(
      <Container style={styles.wrapper}>
        <Content>

          <Body style={styles.body}>
            <Text style={styles.tattoadorName}>{tattoador.name}</Text>
            <Text style={styles.tattoadorAddress}>{tattoador.address}</Text>
          </Body>


          <ListItem>
            <Left>
              <Text>Local</Text>
            </Left>
    
            <Right>
              <Text>
                <Text>São Paulo</Text>
              </Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Data:</Text>
            </Left>
    
            <Right>
              <Text>
                {dados.date} ddddd
              </Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Horario:</Text>
            </Left>
    
            <Right>
              <Text>
                {dados.duration} ddd
              </Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Duracao Media:</Text>
            </Left>
    
            <Right>
              <Text>
                {dados.duration} ddd
              </Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Tecnicas:</Text>
            </Left>
    
            <Right>
              { dados.technique.map((item, key)=>(
                <Text key={key}> { item } </Text>
                )
              )} dddd
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Indicacao:</Text>
            </Left>
    
            <Right>
              { dados.body_part.map((item, key)=>(
                <Text key={key}> { item } </Text>
                )
              )} ddd
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Tamanho da Tattoo:</Text>
            </Left>
    
            <Right>
              <Text>{dados.width}cm x {dados.height}</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Valor:</Text>
            </Left>
    
            <Right>
              <Text>R$ {dados.value}</Text>
            </Right>
          </ListItem>


              <Body style={styles.importanteContent}>
                <Text style={styles.bold}>Importante</Text>
                <Text> Os Estudos GO INK, assim que comprados, somem do aplicativo para que a sua tatuagem
                seja exclusive.</Text>
                <Text> As informacoes aqui apresentadas (valor,técnica utilizada, data e horário) não podem sofrer
                mudanças.</Text>



                <Text> E aí? Partiu rabiscar?</Text>

                <Text> Eu aceito os termos de uso</Text>
                <Switch
                  onTintColor = {'orange'}
                  onValueChange = {this.toggleSwitch}
                  value = {this.state.switchValue}/>



              </Body>
           


            <Button style={styles.buttonFinalizar} disabled={!this.state.switchValue}  onPress={()=> this.onOpenPayment(tattoador)} rounded block style={styles.buttonComprar}>
              <Text>Finalizar compra</Text>
            </Button>
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


