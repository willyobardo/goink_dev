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

export default class ClientInfoAdd extends Component {

  static navigationOptions = {
    title: 'Complete seu cadastro!',
  };


  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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
                <Label>CPF</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>RG</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Data de Nascimento</Label>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2050, 12, 31)}
                  locale={"pt"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                />
                <Input />
                {this.state.chosenDate.toString().substr(4, 12)}
              </Item>

              <Item floatingLabel last>
                <Label>Telefone</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Celular</Label>
                <Input />
              </Item>
            <Body>

              <Button dark round style={styles.buttonFinalizar} onPress={()=>  this.props.navigation.navigate('ClientAddAddress')}>
                <Text> Próximo </Text>
              </Button>

            </Body>
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


