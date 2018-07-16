import React from 'react';

import {createDrawerNavigator} from 'react-navigation';
import TattoerScreen from '../screens/TattoerScreen';
import TattoerAgendaScreen from '../screens/TattoerAgendaScreen';
import TattoerAddressScreen from '../screens/TattoerAddressScreen';


import DrawerButton from '../components/DrawerButton';

const TattoerDrawerNav = createDrawerNavigator ({
  Home:{
    screen: TattoerScreen
  },
  Agenda: {
    screen: TattoerAgendaScreen
  },
  Endereços: {
    screen: TattoerAddressScreen
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

export default TattoerDrawerNav;