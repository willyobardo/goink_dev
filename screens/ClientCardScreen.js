import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Dimensions, AsyncStorage, Switch } from 'react-native';
import {  Container, Header, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';

const { width, height } = Dimensions.get('screen');

export default class ClientCardScreen extends Component {


  render() {
  
    return(
      <Container>
        <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="pen" />
              </Button>
            }
            body={
              <View>
                <Text>Rua Endereço</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
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
  }
});


