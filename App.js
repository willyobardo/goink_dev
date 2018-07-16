import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Container, Content, Header, Icon} from 'native-base';
import StackNav from './navs/StackNav';

export default class App extends React.Component {
  render() { 
    return (
      <StackNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage:{
    width:150,
    height: 150
  }

});

