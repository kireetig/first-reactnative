/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    createStackNavigator,
} from 'react-navigation';
import HomeScreen from './pages/home';
import NewPage from './pages/Newpage';


const RootStack = createStackNavigator({
    Home: HomeScreen,
    New: NewPage
},{
    initialRouteName: 'Home',
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}


