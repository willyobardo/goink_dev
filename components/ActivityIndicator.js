import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
import {  Content,
          Container,
          View,
          Icon
        } from 'native-base';


const { width, height } = Dimensions.get('screen');

export default class ActivityIndicator extends Component {
  render() {
    return(

      <Container>
      <Content style={styles.content}>
        <Image
          style={styles.loading}
          source={require('../img/loading.gif')}
        />
        </Content>
      </Container>

    )  
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading:{
    width:50,
    height: 50
  }

});
