import React from 'react';
import {createStackNavigator} from 'react-navigation';

import ClientTattooScreen from '../screens/ClientTattooScreen';
import ClientAgendaScreen from '../screens/ClientAgendaScreen';
import ClientTattoerProfile from '../screens/ClientTattoerProfile';
import ClientInfoTattoo from '../screens/ClientInfoTattoo';
import ClientPayment from '../screens/ClientPayment';
import DrawerButton from '../components/DrawerButton';

const ClientTattooNav = createStackNavigator ({
  ClientTattooScreen:{
    screen: ClientTattooScreen,
  },
  ClientTattoerProfile: {
    screen:ClientTattoerProfile
  },
  ClientInfoTattoo:{
  	screen:ClientInfoTattoo
  },
  ClientPayment:{
  	screen: ClientPayment
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

export default ClientTattooNav;