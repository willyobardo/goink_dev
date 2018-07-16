
import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions } from 'react-native';
import {  Content,
          Container,
          Button,  
          View,  
          Thumbnail, 
          Text, 
          Left, 
          Right, 
          Icon, 
        } from 'native-base';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('screen');

export default class TattoerClientBar extends Component {

  constructor(props) {
     super(props);
     this.state = {
        idTatuador: 3
     }
     this.fotos = this.props.fotos;
     this.nomeTatuador = this.props.nomeTatuador
     this.tattoerProfile = props.tattoerProfile.bind(this);
  }

  mudandoConteudo(idIng){
    if (this.state.fotos != '') {
      console.warn(this.state.fotos[0].id)
    }
  }


render() {
    return(

		<View style={styles.headerTatooer}> 
          <View style={styles.headerText}>
            <Text>{this.state.nomeTatuador}</Text>
            <Text>{this.state.enderecoTatuador}</Text>
          </View>
          <Right>
           <Icon onPress={()=> this.props.tattoerProfile()} name="arrow-forward"/>
          </Right>
        </View>
        
    )
  }
}


const styles = StyleSheet.create({
  headerTatooer: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 20

  },
   headerText:{
    justifyContent:'center',
    alignItems:'center',
  },
  buttonEuquero:{
    color: '#ED4A6A',
    position: 'absolute',
    bottom: 50,
    right: 20
  }, 
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});