import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'
import { purple, white } from '../utils/colors'
import EntryDetail from './EntryDetail'
import Tabs from './Tabs'


const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
});

export default createAppContainer(MainNavigator)
