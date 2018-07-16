import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions, AsyncStorage, Button} from 'react-native';
import {  Content,
          Container,
          Header, 
          View, 
          DeckSwiper,  
          Thumbnail, 
          Text, 
          Left, 
          Right, 
          Body, 
          Icon
        } from 'native-base';
import HeaderGoInk from '../components/HeaderGoInk';
import SwiperComponent from '../components/SwiperComponent';
import ActivityIndicator from '../components/ActivityIndicator';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('screen');


export default class ClientTattooScreen extends Component {

constructor(props) {
 super(props);
    this.state = {
      fotos:[]
  }
}

  componentWillMount() {
    fetch('http://qa.api.tattoaria.com.br/goink/products/forSaleByUser')
      .then((response) => response.json())
      .then((responseJson) => {this.setState({fotos: responseJson.data})})
      .then(this.setFotosData.bind(this))
      .then(this.getFotosData.bind(this))
      .catch((error) => {
        console.error(error);
      })
  }

  setFotosData(){
    AsyncStorage.setItem('fotos', JSON.stringify(this.state.fotos))
  }

  getFotosData = async () =>{
    try{
      let fotos = await AsyncStorage.getItem('fotos');
      let parsedFotos = JSON.parse(fotos);
      this.setState({ fotos: parsedFotos });

      //console.warn(this.state.fotos[0].id)
    }

    catch(error){
      console.error(error)
    }

  }


  mostraComponent(){
    if(this.state.fotos != ''){ 
        return (<SwiperComponent fotos={this.state.fotos} navigation={this.props.navigation}/>)
      //return (<ActivityIndicator/>)
      //console.warn('arow carregou o SwiperComponent')
    } else { 
      //console.warn('arow carregando')
      return(<ActivityIndicator/>)
    }
  }

  render() {


    return (

      
      <Container>

          {this.mostraComponent()}

      </Container>

    );
  }
}

const styles = StyleSheet.create({
   wrapper: {
  },
  slideTattoos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }

});
