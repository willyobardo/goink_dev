import React from 'react';
import {createStackNavigator} from 'react-navigation';

import TattoerScreen from '../screens/TattoerScreen';

import DrawerButton from '../components/DrawerButton';

const TattoerNav = createStackNavigator ({
  TattoerScreen:{
    screen: TattoerScreen,
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