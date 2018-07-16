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
          Picker
        } from 'native-base';
import HeaderGoInk from '../components/HeaderGoInk'

const { width, height } = Dimensions.get('screen');


export default class ClientPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    const { navigation } = this.props;
    const dados = navigation.getParam('dados');
    

    return(
      <Container>
        <Content>
          <Body style={styles.body}>
          	<Text style={styles.tattoadorName}>{dados.name}</Text>
            <Text style={styles.tattoadorAddress}>{dados.address}</Text>
         
            <Text>Gerencie seus cartões</Text>
            <Text>salvos ou adicione outro</Text>


            <Image style={styles.cardImage} source={require('../img/icon-card.png')} resizeMode="contain"/>

            {//se nao tiver cartao 
            }

            <Text>Voce não possui um cartão
            </Text>
            <Button dark rounded block style={styles.buttonComprar}>
              <Text>Cadastrar um Cartão</Text>
            </Button>



            <Text>Quer pagar parcelado, ou á vista?
            </Text>

            <Picker
              mode="dropdown"
              iosHeader="Selecione"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "orange", fontSize: 25 }} />}
              style={styles.pickerParcelamento}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label={'1x R$' + dados.instalments[1].installment_amount} value={'1x R$' + dados.instalments[1].installment} key={this.state.selected}/>
              <Picker.Item label={'2x R$' + dados.instalments[2].installment_amount} value={'2x R$' + dados.instalments[2].installment} />
              <Picker.Item label={'3x R$' + dados.instalments[3].installment_amount} value={'3x R$' + dados.instalments[3].installment} />

            </Picker>

            
            <Button dark rounded block style={styles.buttonComprar}>
              <Text>Efetuar Compra</Text>
            </Button>
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
    marginBottom:30,
    marginTop:10
  },
  cardImage:{
    width: 200,
    height:200
  },
  pickerParcelamento:{
    width:300,
    marginBottom:15,
    marginTop:30,
    borderTop:1
  }

});
