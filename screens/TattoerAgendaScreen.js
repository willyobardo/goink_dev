import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Alert, AsyncStorage } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Text } from 'native-base';


export default class TattoerAgendaScreen extends React.Component {
  render() {
    return (
      <View>
        <Button><Text>Camera</Text></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  text:{
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
