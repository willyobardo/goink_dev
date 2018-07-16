/*import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Icon, Button, Container, Header, Content, Left,Text } from 'native-base';

export default class PreLogin extends React.Component {
  render() {
    return (

      <ImageBackground
        style={{
          backgroundColor: '#000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={require('../img/splash.gif')}
      >

      <Image style={styles.logo} source={require('../img/logo.png')} resizeMode="contain"/>
     
        <Button dark rounded block style={styles.buttonCustom} onPress={()=>  this.props.navigation.navigate('Login')}>
          <Text>Sou tatuador</Text>
        </Button>
        <Button dark rounded block style={styles.buttonCustom} onPress={()=>  this.props.navigation.navigate('Login')}>
          <Text>Quero me tatuar</Text>
        </Button>
       
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonCustom:{
    marginLeft:30,
    marginRight:30,
    marginBottom:30,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 30
  }
});

*/
