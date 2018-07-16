import React from 'react';

import {createDrawerNavigator} from 'react-navigation';
import ClientTattooScreen from '../screens/ClientTattooScreen';
import ClientAgendaScreen from '../screens/ClientAgendaScreen';
import ClientTattooNav from './ClientTattooNav';
import ClientAddressScreen from '../screens/ClientAddressScreen';
import ClientCardScreen from '../screens/ClientCardScreen';
import DrawerButton from '../components/DrawerButton';

const DrawerNav = createDrawerNavigator ({
  Home:{
    screen: ClientTattooNav
  },
  Agenda: {
    screen: ClientAgendaScreen
  },
  Endereços: {
    screen: ClientAddressScreen
  },
  Cartões: {
    screen: ClientCardScreen
  }
  },
  {
    navigationOptions: ({ navigation }) =>({
      title: '',
      headerLeft: <DrawerButton navigation={navigation}/>,
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
);

export default DrawerNav;