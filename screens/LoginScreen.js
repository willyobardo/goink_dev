import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Alert, AsyncStorage } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Text,Body } from 'native-base';
import { AuthSession } from 'expo';
import Swiper from 'react-native-swiper';


export default class LoginScreen extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
         userType: 1, // 1 Ciente, 0 Tatuador
         userInfo: null,
         userInfoForApp: null
      }
   }


async logInFB() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('247581699305354', {
      permissions: ['public_profile', 'email'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
    let userInfo = await response.json();
    this.setState({userInfo});
    this.posloginToFacebook(userInfo);
  }
}

posloginToFacebook(data){
    let credentials =[];
    let formBody = {
      'credentials':{
            "username":data.email,
            "password" : "",
            "provider_id" : data.id,
            "role_id" : this.state.userType, // 0 Tatuador, 1 Cliete
            "name": data.name
      }
    };

    fetch('http://qa.api.tattoaria.com.br/signinapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody)
      })
      .then(function(response){ return response.json() })
        .then((responseJson) => {
          this.setState({userInfoForApp:responseJson})
          //this.redirectForPages(this.state.userInfoForApp);
          this.props.navigation.navigate('Home')
        })
        .catch((error) => {
           Alert.alert(
          'Houve um erro, tente novamente mais tarde entre em contato conosco'
          );
          console.warn('Error: '+ error);
        });
  }


redirectForPages(userInfo){
  let firstoLogin = userInfo.first_login
  console.warn(firstoLogin);
  console.warn(this.state.userInfo)
  console.warn(this.state.userInfoForApp)

  if (firstoLogin) {
    //console.log('vai pra tela de cadastro de endereco')
    this.props.navigation.navigate('Home')
  }else{
    this.props.navigation.navigate('Home')
  }
}


setUserData(){
  AsyncStorage.setItem('userInfo', JSON.stringify(this.state.userInfo))
  AsyncStorage.setItem('userInfoForApp', JSON.stringify(this.state.userInfoForApp))
}

definindoTipoDeUsuario(tipoDeUsuario){
  this.setState({userType: tipoDeUsuario})
  this.refs.swiper.scrollBy(1);
}

  render() {
    return (
      <Body>
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
     
          <Swiper 
            showsButtons={false}
            showsPagination={false}
            loop={false}
            scrollEnabled={false}
            ref='swiper'
          >
            <View>
                    <Button dark rounded block style={styles.buttonCustom} onPress={() => this.definindoTipoDeUsuario(0)}>
                      <Text>Sou tatuador</Text>
                    </Button>
                    <Button dark rounded block style={styles.buttonCustom} onPress={() => this.definindoTipoDeUsuario(1)}>
                      <Text>Quero me tatuar</Text>
                    </Button>
            </View>

            <View>
                     <Button dark rounded block style={styles.buttonCustom} onPress={()=>  this.logInFB()}>
                      <Text>Login pelo Facebook</Text>
                    </Button>
                    <Button dark rounded block style={styles.buttonCustom} onPress={()=>  this.props.navigation.navigate('App')}> {//Mudar aqui para App(usuario) TattoerApp(Tatuador)}
                      <Text>Entrar sem Logar</Text>
                    }
                    </Button>
            </View>

          </Swiper>
       
       </ImageBackground>
       </Body>
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
