import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Content, Container, Button, Header, View, Text, Left, Body, Icon, Right } from 'native-base';

export default class HeaderGoInk extends React.Component {

  constructor(props) {
    super(props);
    this.abrindoDrawerPeloHeader = props.abrindoDrawerPeloHeader.bind(this);
  }

  render() {
    return (
        <Header/>
    );
  }
}