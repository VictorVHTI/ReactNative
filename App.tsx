import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import DashboardScreen from './components/DashboardScreen'
//import HomeScreen from './components/HomeScreen'
import CommentsScreen from './components/CommentsScreen'

const MainNav = createStackNavigator({
  Dashboard: { screen: DashboardScreen },
  //Home: {screen: HomeScreen},
  Post: {screen: CommentsScreen}},
  //Post: {screen: PostScreen}},
  {
  defaultNavigationOptions: {
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor:'#FFF', 
    }
  }
});

export default  createAppContainer(MainNav);



